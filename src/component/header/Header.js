import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HeaderStyle.css';

class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            koloLogin: true,
        }
        console.log(this.state.koloLogin)
        console.log(this.props)
    }
    handleLogout = () => {
        localStorage.clear('currentUser')
        this.setState({koloLogin: !this.state.koloLogin})
       console.log(this.state.koloLogin)
    }
    
  render() {
      
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary navbar-fixed-top  ">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active ml-2">
                    <Link className="nav-link text-light" to="/">
                        TimeOff.Management <span className="sr-only">(current)</span>
                    </Link>
                </li>
                {
                   this.props.isLogin ? 
                <React.Fragment>                   
                    <li className="nav-item active ">
                   <Link className="nav-link text-light" to="/employee-dashboard">
                       Employee Dashboard 
                   </Link>
                    </li>
                    <li className="nav-item active ">
                        <Link className="nav-link text-light" to="/team-view">
                            Team View 
                        </Link>
                    </li>
                    <li className="nav-item active ">
                        <Link className="nav-link bg-light text-primary" to="/new-absence">
                            New Absence
                        </Link>
                    </li>
               </React.Fragment>
                     : ''
                }
          
                
                </ul>
                {
                    !this.props.isLogin ? 
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mr-3">
                        <Link className="nav-link text-light" to="/login" >Login </Link>
                        </li>
                        <li className="nav-item ml-3">
                            <Link className="nav-link btn btn-outline-light text-light" to="/register">Sign Up</Link>
                        </li>
                        </ul>
                
                     :    <ul className="navbar-nav ml-auto">
                            <li className="nav-item ml-3" onClick={this.handleLogout}>
                            <Link className="nav-link btn btn-outline-light text-light" to="/login">Logout</Link>
                            </li>
                        </ul>
                }
             
               

            </div>
            </nav>
        </div>
    );
  }
}

export default Header;
