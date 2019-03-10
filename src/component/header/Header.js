import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeaderStyle.css'
class Header extends Component {
    
  render() {
      
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-primary ">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active ml-2">
                    <a class="nav-link text-light" href="#">TimeOff.Management <span class="sr-only">(current)</span></a>
                </li>

                </ul>
                <ul class="navbar-nav ml-auto">
                <li class="nav-item mr-3">
                    <a class="nav-link text-light" href="#">Pricing</a>
                </li>
                <li class="nav-item ml-3">
                    <a class="nav-link btn btn-outline-light text-light" href="#">Sign Up</a>
                </li>
                </ul>

            </div>
            </nav>
        </div>
    );
  }
}

export default Header;
