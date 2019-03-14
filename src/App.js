import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/header/Header';
import Home from './component/home/Home';
import Footer from './component/footer/Footer'
import EmployeeDashboard from './component/dashboard/Employee-Dashboard'

import { BrowserRouter ,Route, Switch,Link } from 'react-router-dom'
import Login from './component/auth/login/Login';
import Register from './component/auth/register/Register';
class App extends Component {
  render() {
    return (
      <div>
    <BrowserRouter>
        <div>
          
             <Header />
         
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/employee-dashboard" component={EmployeeDashboard} />
          </Switch> 
          <Footer />
        </div>
     </BrowserRouter>

      </div>
    );
  }
}

export default App;
