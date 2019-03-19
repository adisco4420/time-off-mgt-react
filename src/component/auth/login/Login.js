import React from 'react';
import { Link } from 'react-router-dom'
import './login.css'

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  
  const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
  
    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false);
    });
  
    // validate the form was filled out
    Object.values(rest).forEach(val => {
      val === null && (valid = false);
    });
  
    return valid;
  };
class Login extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
          email: null,
          password: null,
          invalidError : false,
          formErrors: {
            email: "",
            password: ""
          }
        };
      }
    
      handleSubmit = e => {
        e.preventDefault();
    
        if (formValid(this.state)) {
          // console.log(`
          //   --SUBMITTING--
          //   Email: ${this.state.email}
          //   Password: ${this.state.password}
          // `);
          let user = {email: this.state.email, password: this.state.password}
          user = JSON.stringify(user)
          console.log(user)
          localStorage.setItem('currentUser', user)
          window.location.replace('employee-dashboard')

        } else {
          this.setState({invalidError: true})
         
        }
      };
    
      handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };
    
        switch (name) {
          case "email":
            formErrors.email = emailRegex.test(value)
              ? ""
              : "invalid email address";
            break;
          case "password":
            formErrors.password =
              value.length < 6 ? "minimum 6 characaters required" : "";
            break;
          default:
            break;
        }
    
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
      };
    render() {
        const { formErrors } = this.state;
        return(
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
                        <Link className="nav-link text-light" to="/login" >Login </Link>
                        </li>
                        <li className="nav-item ml-3">
                            <Link className="nav-link btn btn-outline-light text-light" to="/register">Sign Up</Link>
                        </li>
                </ul>

            </div>
            </nav>
                <div className="jumbotron text-center bg-teal ">
                    <h1>Login Form </h1>
                </div>
                <form className="container mb-5" onSubmit={this.handleSubmit} noValidate style={{padding: '2% 20%' }}>
                    <div className="">
                    <div className="form-group">
                    <label >Email address</label>
                    <input type="email" className="form-control"  placeholder="Enter email" 
                          name="email"  noValidate onChange={this.handleChange}/>
                    {this.state.invalidError && (this.state.email === null) ? 
                    <p className="text-danger">* email is required</p> : '' }
                      {formErrors.email.length > 0 && (
                         <span className="text-danger">{formErrors.email}</span>
              )}
                   </div>
                <div className="form-group">
                    <label >Password</label>
                    <input type="password" className="form-control"  placeholder="Password" 
                                    name="password"
                                    noValidate
                                    onChange={this.handleChange}/>
                       {this.state.invalidError && (this.state.password === null) ? 
                    <p className="text-danger">* password is required</p> : '' }
                     {formErrors.password.length > 0 && (
                <span className="text-danger">{formErrors.password}</span>
              )}
                </div>
            
                  { formValid(this.state) ?    
                  <button onClick={this.handleSubmit} type="button" className="btn btn-primary text-light">
                       <Link  className="text-light" to="/employee-dashboard">Login</Link>
                  </button>
                  :    <button type="submit" className="btn btn-primary text-light">Login</button>
                  }
            
                    </div>
                </form>
            </div>

        )
    }
}
export default Login;