import React , { Component } from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import './employee.css';

// Render the Calendar
var today = new Date();
var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
const username = 'Sodiq Alabi';
const typeOfTimeOff = [
    {name: 'Vacation', days: 2},
    {name: 'Maternity Leave', days: 10},
    {name: 'Medical Checkup', days: 5},
    {name: 'Marriage Purpose', days: 7},
    // {name: 'Attend Meetup', days: 3},
]
const employeDetail = {name: 'Alabi Sodiq', departement: 'Software', position: 'Frontend Developer'}
const requests = [
    {name: 'Medical Checkup', date: '12/03/2019'},
    {name: 'Maternity Leave', date: '23/02/2019'},
    {name: 'Vacation', date: '14/01/2019'},
]
const allAbsence = [
{type: 'Vacation', days: 3, startDate: '01/02/2019', stopDate: '04/02/2019', approvalBy: 'James Bond', status: 'Approved'},
{type: 'Attend Meetup', days: 5, startDate: '11/03/2019', stopDate: '16/03/2019', approvalBy: 'Thomas Edison', status: 'Approved'},
{type: 'Christmas Break', days: 4, startDate: '23/03/2018', stopDate: '27/02/2018', approvalBy: 'Mayowa', status: 'Approved'}

]
class EmployeeDashboard extends Component {
    render(){
        return(
            <div>
                <div  className="ml-3 mt-3">
                <h3>Empolyee Dashboard</h3>
                <h5>{username}</h5>
                </div>

                <div className="container">
                    <h3 className="text-center">Statistics</h3>
                    <div className="row p mt-5 statistics">
                        <div className="col-md-3 sta">
                        <div className="card">
                            <div className="card-header bg-primary text-light">Days Remaining</div>
                            <div className="card-body">
                                <h1>10 Days</h1>
                                <h6>Out Of 20 Working Days</h6>
                            </div> 
                        </div>
                        </div>

                        <div className="col-md-3 sta">
                        <div className="card">
                            <div className="card-header bg-primary text-light">Types Of TimeOff</div>
                            <div className="card-bod">
                            <ul class="list-group"> 
                                {
                                typeOfTimeOff.map(item => {
                                        return <div>
                                            <li class="list-group-item"> {item.name} 
                                                <span class="badge badge-primary float-right ">{item.days}</span></li>
                                            </div>
                                })
                                }
                            </ul>
                            </div> 
                        </div>
                      </div>

                        <div className="col-md-3 sta">
                        <div className="card">
                            <div className="card-header bg-primary text-light">Available Request</div>
                            <div className="card-bod">
                            <ul class="list-group"> 
                                {
                                requests.map(item => {
                                        return <div>
                                            <li class="list-group-item"> {item.name} 
                                                <span class="badge badge-primary float-right ">{item.date}</span></li>
                                            </div>
                                })
                                }
                            </ul>
                            </div> 
                        </div>
                      </div>
                    
                      <div className="col-md-3 sta">
                        <div className="card">
                            <div className="card-header bg-primary text-light">Profile</div>
                            <div className="card-body text-center ">
                                <i className="fa fa-user-circle-o fa-3x "></i>
                                <div className="mt-2">
                                    <h6>Name: {employeDetail.name}</h6>
                                    <h6>Department: {employeDetail.departement}</h6>
                                    <h6>Position: {employeDetail.position}</h6>
                                </div>
                            </div> 
                        </div>
                        </div>

                    </div>
                    <h2 className="text-center mt-2 cla">Calendar</h2>
                    <div className="row">
                   
                        <div className="col-md-3 first">
                        <InfiniteCalendar
                                width={330}
                                height={300}
                                selected={new Date(2019, 0, 2)}
                                disabledDays={[0, 1, 2, 4, 5,  6]}
                                min={new Date(2019, 0, 1)} 
                                max={new Date(2019, 0, 30)} 
                            />,
                        </div>
                        <div className="col-md-3 ml-3 second">
                        <InfiniteCalendar
                        width={330}
                        height={300}
                        selected={new Date(2018, 11, 24)}
                        min={new Date(2018, 11, 1)} 
                        max={new Date(2018, 11, 30)} 
                        disabledDays={[0, 3, 2, 4, 5,  6]}
                    />,
                        </div>
                        <div className="col-md-3 third">
                        <InfiniteCalendar
                                width={330}
                                height={300}
                                selected={new Date(2019, 2, 11)}
                                disabledDays={[0, 3, 2, 4, 5,  6]}
                                min={new Date(2019, 2, 1)} 
                                max={new Date(2019, 2, 30)} 
                            />,
                        </div>
      

                    </div>
                        

                    <h3 className="text-center mt-3">All Absenses</h3>
                    <div className="row mb-5 py-3">
                        <div className="col-12">
                        <table class="table table-hover">
                            <thead>
                            <tr>
                                <th>Type</th>
                                <th>Number Of Days</th>
                                <th>Date</th>
                                <th>Approved By</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                            <tbody>
                          
                                {
                                    allAbsence.map(item => {
                                        return <tr>
                                        <td>{item.type}</td>
                                        <td>{item.days}</td>
                                        <td>From: {item.startDate} To: {item.stopDate}</td>
                                        <td>{item.approvalBy}</td>
                                        <td>{item.status}</td>
                                    </tr>
                                    })
                                }
                   
                            </tbody>
                        </table>
                        </div>
                    </div>
               
                </div>


            </div>
        )
    }
}
export default EmployeeDashboard;