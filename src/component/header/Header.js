import React, { Component } from 'react';
import { Link } from 'react-router-dom'


import './HeaderStyle.css'
class Header extends Component {
    
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

                </ul>
                <ul className="navbar-nav ml-auto">
                <li className="nav-item mr-3">
                    {/* <a className="nav-link text-light" href="#">Login</a> */}
                    <Link className="nav-link text-light" to="/login" >Login </Link>
                </li>
                <li className="nav-item ml-3">
                    <Link className="nav-link btn btn-outline-light text-light" to="/register">Sign Up</Link>
                </li>
                </ul>

            </div>
            </nav>
        </div>
    );
  }
}

export default Header;
