import React , { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

import Header from './../../header/Header'

const allLeaveRequest = [
    {   employee: 'Somoye', department: 'Accounting', DOR: '01/02/2018', 
        leavedate: 'from 04/02/2018 to 10/02/2018', type: 'Vacation', days: 8 
    },
    {  employee: 'Tunde', department: 'Finance', DOR: '07/05/2018', 
    leavedate: 'from 11/05/2018 to 20/05/2018', type: 'Medical Checkup', days: 9
    },
    {  employee: 'Mayowa', department: 'Marketing', DOR: '23/09/2018', 
    leavedate: 'from 23/09/2018 to 30/05/2018', type: 'Special Occassion', days: 7
    },
]
const allLeaves = [
    {type: 'Vacation', deducted: '6', date: 'from 04/02/2018 to 10/02/2018', approvedBy:'Jide', status: 'Approved'},
    {type: 'Medical Checkup', deducted: '9', date: 'from 11/05/2018 to 20/05/2018', approvedBy:'Thomas', status: 'Declined'}
]

class TeamView extends Component {
    render() {
        return (
        <div>          
           <Header isLogin={true} />
            <div className="container mt-3 mb-5">
            <h4>Admin Dashboard</h4>    
            <h6 className="text-info mb-2">Leave Request To Approve Or Decline</h6>     
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Employee</th>
                  <th>Department</th>
                  <th>Date Of Request</th>
                  <th>Leave Date</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                  {
                      allLeaveRequest.map((item , index) => {
                          return <tr key={index}>
                          <td>{item.employee}</td>
                          <td>{item.department}</td>
                          <td>{item.DOR}</td>
                          <td>{item.leavedate}</td>
                          <td>{item.type}</td>
                          <td>
                              <button className="btn btn-success mr-2">Approve</button>
                              <button className="btn btn-danger">Decline</button>
                          </td>
                        </tr>
                      })
                  }

              </tbody>
            </table>
          
          <h6 className="text-info mt-5 mb-2"> All Leaves</h6>
          <table className="table table-hover mb-5 px-4">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Deducted</th>
                  <th>Date</th>
                  <th>Approved By</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                  {
                      allLeaves.map((item , index) => {
                          return <tr key={index}>
                          <td>{item.type}</td>
                          <td>{item.deducted}</td>
                          <td>{item.date}</td>
                          <td>{item.approvedBy}</td>
                          <td>{item.status}</td>

                        </tr>
                      })
                  }

              </tbody>
            </table>
          
          
          </div>
          </div>
 
          
        )
    }

}

export default TeamView