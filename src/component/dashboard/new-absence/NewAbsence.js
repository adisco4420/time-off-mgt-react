import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import Header from './../../header/Header'

import './style.css';
const typeOfTimeOff = [
    {name: '-- Select Leave Type --', day: 1},
    {name: 'Vacation', days: 2},
    {name: 'Maternity Leave', days: 10},
    {name: 'Medical Checkup', days: 5},
    {name: 'Marriage Purpose', days: 7},
]
let date = new Date();
date = `${date.getFullYear()}-0${date.getMonth() + 1 }-${date.getDate()}`

class NewAbsenceForm extends Component {
    state = {
        leaveType: '',
        startTime: date,
        stopTime: date,
        diffStartTimeStopTime: '0 Days',
        showError: false
    }
    handleStartTime = e => {
        let startTimeValue = e.target.value;
        this.setState({startTime: startTimeValue})
        const start = startTimeValue.replace(/-/g, '');
        const stop = this.state.stopTime.replace(/-/g, '');
        let diff = stop - start
        diff = this.calculateDuration(diff)
        this.setState({diffStartTimeStopTime: `${diff}`})
        console.log(this.state.diffStartTimeStopTime)
    }
    handleStopTime = e => {
        let stopTimeValue = e.target.value;
        this.setState({stopTime: stopTimeValue})
        const start = this.state.startTime.replace(/-/g, '');
        const stop = stopTimeValue.replace(/-/g, '');
        let diff = stop - start
        diff = this.calculateDuration(diff)
        this.setState({diffStartTimeStopTime: `${diff}`})
        console.log(diff)
    }
    handeleLeavetype = e => {
        console.log(e.target.value)
        this.setState({leaveType: e.target.value})
    }
    hamdleFormSubmit = () => {
        if ((!this.state.diffStartTimeStopTime.includes('-') && this.state.diffStartTimeStopTime !== '0 Days') && 
            this.state.leaveType !== '-- Select Leave Type --') {
            console.log(this.state.diffStartTimeStopTime)
            Swal.fire(
                'Success',
                'Your Leave Request Has Being Submitted',
                'success'
              )
        } else {
            this.setState({showError: true})
        } 
        if (this.state.diffStartTimeStopTime === '0 Days') {
            this.setState({showError: true})
        } 
    } 
    calculateDuration = (days) => {
        let not = undefined;
          let value = days
          let result = days
          let day , month, weeks
          if(value >= 30) {
            month = value / 30;
            month = Math.floor(month)
            value = value % 30
          }if (value >= 7) {
              day = value % 7;
              weeks = value / 7;
              weeks = Math.floor(weeks);
          } else {
            day = value
          }
          if(month !== not && (weeks === not && day === not) ) {
             result = `${month} Month`
          }
          if((month === not && day === 0) && weeks !== not ) {
             result = `${weeks} Week`
          }
          console.log(day)
          if(day !== not && (month === not && weeks ===not )) {
            result = `${day} day`
          }
          if(month !== not && weeks !== not && day !== not) {
            result = `${month} Month ${weeks} Week ${day} Day`
          }
            console.log(weeks)
          if(month !== not && weeks !== not && day === 0) {
            result = `${month} Month ${weeks} Week`
          }
          if(month !== not && weeks === not && day !== not ) {
            result = `${month} Month ${day} Day`
          }
          if (month === not && weeks && day) {
            result = `${weeks} Week ${day} Day`
          }
          // result = `${month} Month ${weeks} Week ${day} Day`
          return result
      }
    render() {
        return(
            <div>
            <Header isLogin={true} />
                       <div className="container absence mt-3 align-center ">
                <div className="card align-center">
  <div className="card-header text-center">
  <h5>Request For Leave</h5>
  </div>
  <div className="card-body">
    <div className="row">
        <div className="col-12">
            <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1"><h6>Leave Type</h6></label>
                    <select onClick={this.handeleLeavetype} className="form-control" id="exampleFormControlSelect1">
                    {
                        typeOfTimeOff.map((item, index) => {
                            return <option key={index}>{item.name}</option>
                        })
                    }
                    
                    </select>
                {
                    (this.state.leaveType !== '-- Select Leave Type --') ? '' : 
                    <p className="text-danger">select valid leave type</p>
                }
                {
                     (this.state.leaveType === '' && this.state.showError) ? 
                     <p className="text-danger">*leave type is required</p> : 
                    ''
                }
            </div>
        </div>
    </div>
    <h6>From:</h6>
    <div className="row">
        <div className="col-4">
            <select className="form-control">
                <option>All day</option>
                <option>Morning</option>
                <option>Afternoon</option>
            </select>
        </div>
        <div className="col-8">
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1"><i className="fa fa-calendar" ></i></span>
                </div>
                <input type="date" min={date} value={this.state.startTime} onChange={this.handleStartTime}
                className="form-control"  />
            </div>
        </div>
    </div>
    <h6>To:</h6>
    <div className="row">
   
        <div className="col-4">
            <select className="form-control">
                <option>All day</option>
                <option>Morning</option>
                <option>Afternoon</option>
            </select>
        </div>
        <div className="col-8">
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1"><i className="fa fa-calendar" ></i></span>
                </div>
                <input value={this.state.stopTime} onChange={this.handleStopTime} type="date" 
                min={this.state.startTime} className="form-control"  />
            </div>
        </div>
    </div>
    <h6>Duration</h6>
    <div className="row">
        <div className="col-12">
            <input 
                value={this.state.diffStartTimeStopTime.includes('-') ? '0 Days' : this.state.diffStartTimeStopTime } 
                className="form-control" disabled />
            {
                ((this.state.diffStartTimeStopTime === '0 Days' || this.state.diffStartTimeStopTime.includes('-')) 
                && this.state.showError) ? 
                <span className="text-danger">invalid duration must be more than 0 Days</span> : '' 
            }
        </div>
    </div>

    <div className="row">
        <div className="col-12">
            <div className="form-group">
                <label ><h6>Comment (Optional)</h6></label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
             </div>
        </div>
    </div>
  </div>
  <div className="card-footer">
    <button onClick={this.hamdleFormSubmit} className="btn btn-primary">Submit</button>
  </div>
</div>
            </div>
        </div>
        )
    }
}
export default NewAbsenceForm;