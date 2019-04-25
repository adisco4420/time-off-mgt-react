import React from 'react';
import {Link} from 'react-router-dom'
import './register.css'
import Header from './../../header/Header'
import axios from 'axios';


const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  const onlyLetterRegex = RegExp(/^[A-Za-z]+$/)
  
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
class Register extends React.Component{
    constructor(props) {
        super(props);
        this.errorSate = {
          companyNameError: false
        }
    
        this.state = {
          companyName: null,
          firstName: null,
          lastName: null,
          email: null,
          department: null,
          dob: null,
          manager: null,
          password: null,
          invaildError: false,
          formErrors: {
            companyName: '',
            firstName: "",
            lastName: "",
            email: "",
            department: '',
            dob: '',
            manager: '',
            password: ""
          }
        };
      }
      storeToLocalstorage = (token) => {
        localStorage.setItem('userToken', token)
      }
    
      handleSubmit = e => {
        e.preventDefault();
    
        if (formValid(this.state)) {
          const body = this.state;
          delete body['formErrors'];
          delete body['invaildError'];
          console.log('success');
          axios.post('http://localhost:6004/employee/register', body)
          .then((data) => {
            console.log(data.data)
            const token = data.data.data.token
            this.storeToLocalstorage(token)
          })
          .catch(function (error) {
            console.log(error);
          })
        } else {
          this.setState({invaildError: true})
        }
      };
    
      handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };
    
        switch (name) {
            case "companyName":
            formErrors.companyName =  value.length < 3 || !onlyLetterRegex.test(value)
            ? "company name must be up to 3 character (alphabet only)"
            : "";
          break;
          case "firstName":
              formErrors.firstName =  value.length < 3 || !onlyLetterRegex.test(value)
              ? "first name must be up to 3 characters (alphabet only)"
              : "";
            break;
          case "lastName":
          formErrors.lastName =  value.length < 3 || !onlyLetterRegex.test(value)
          ? "last name must be up to 3 characters (alphabet only)"
          : "";
          break;
          case "email":
            formErrors.email = emailRegex.test(value)
              ? ""
              : "invalid email address";
            break;
        case "department":
        formErrors.department =  value.length < 3 || !onlyLetterRegex.test(value)
          ? "department must be up to 3 characters (alphabet only)"
          : "";
        break;  
        case "dob":
        formErrors.dob =  value.length < 3
        ? "date of birth must be up to 3 characters (alphabet only)"
        : "";
        break;
        case "manager":
        formErrors.manager =  value.length < 3 || !onlyLetterRegex.test(value)
        ? "manager must be up to 3 characters (alphabet only)"
        : "";
      break;
          case "password":
            formErrors.password =
              value.length < 6 ? "minimum 6 characaters required" : "";
            break;
          default:
            break;
        }
    
        this.setState({ formErrors, [name]: value });
      };
    render() {
        const { formErrors } = this.state;
        return(
            <div>
              <Header isLogin={false} />
                <div className="jumbotron text-center bg-teal ">
                    <h1>Register Form </h1>
                </div>
                <form className="container mb-5" onSubmit={this.handleSubmit} noValidate style={{padding: '2% 20%' }}>
                    <div className="">
                    <div className="form-group">
                    <label >Company Name</label>
                    <input type="text" className="form-control"  placeholder="Company Name" 
                          name="companyName"  noValidate onChange={this.handleChange}/>
                    {this.state.invaildError && (this.state.companyName === null) ? 
                    <p className="text-danger">* company name is required</p> : '' } 
                    {(<span className="text-danger">{formErrors.companyName}</span>)}
                   </div>
                   <div className="form-group">
                    <label >First Name</label>
                    <input type="text" className="form-control"  placeholder="First Name" 
                          name="firstName"  noValidate onChange={this.handleChange}/>
                        {this.state.invaildError && (this.state.firstName === null) ? 
                    <p className="text-danger">* first name is required</p> : '' } 
                      {formErrors.firstName.length > 0 && (
                         <span className="text-danger">{formErrors.firstName}</span>)}
                   </div>
                   <div className="form-group">
                    <label >Last Name</label>
                    <input type="text" className="form-control"  placeholder="Last Name" 
                          name="lastName"  noValidate onChange={this.handleChange}/>
                    {this.state.invaildError && (this.state.lastName === null) ? 
                    <p className="text-danger">* last name is required</p> : '' } 
                      {formErrors.lastName.length > 0 && (
                         <span className="text-danger">{formErrors.lastName}</span>
              )}
                   </div>
                    <div className="form-group">
                    <label >Email address</label>
                    <input type="email" className="form-control"  placeholder="Enter email" 
                          name="email"  noValidate onChange={this.handleChange}/>
                    {this.state.invaildError && (this.state.email === null) ? 
                    <p className="text-danger">* email is required</p> : '' } 
                      {formErrors.email.length > 0 && (
                         <span className="text-danger">{formErrors.email}</span>
              )}
                   </div>



                    <div className="form-group">
                    <label >Department</label>
                    <input type="text" className="form-control"  placeholder="Dpartment" 
                          name="department"  noValidate onChange={this.handleChange}/>
                    {this.state.invaildError && (this.state.department === null) ? 
                    <p className="text-danger">* dpartment is required</p> : '' } 
                      {formErrors.department.length > 0 && (
                         <span className="text-danger">{formErrors.department}</span>
              )}
                   </div>

                      <div className="form-group">
                    <label >Date Of Birth</label>
                    <input type="date" className="form-control"   
                          name="dob"  noValidate onChange={this.handleChange}/>
                    {this.state.invaildError && (this.state.dob === null) ? 
                    <p className="text-danger">* date of birth is required</p> : '' } 
                      {formErrors.dob.length > 0 && (
                         <span className="text-danger">{formErrors.dob}</span>
              )}
                   </div>

                  <div className="form-group">
                    <label >Manager</label>
                    <input type="text" className="form-control" placeholder="manager"
                          name="manager"  noValidate onChange={this.handleChange}/>
                    {this.state.invaildError && (this.state.manager === null) ? 
                    <p className="text-danger">* manager is required</p> : '' } 
                      {formErrors.manager.length > 0 && (
                         <span className="text-danger">{formErrors.manager}</span>
              )}
                   </div>
                <div className="form-group">
                    <label >Password</label>
                    <input type="password" className="form-control"  placeholder="Password" 
                                    name="password"
                                    noValidate
                                    onChange={this.handleChange}/>
                    {this.state.invaildError && (this.state.password === null) ? 
                    <p className="text-danger">* password is required</p> : '' } 
                     {formErrors.password.length > 0 && (
                <span className="text-danger">{formErrors.password}</span>
              )}
                </div>
                <div className="form-group">
                    <label >Country</label>
                    <select className="form-control" id="sel1">
                        <option>Nigeria</option>
                        <option>Ghana</option>
                        <option>Togo</option>
                        <option>South Africa</option>
                    </select>
                    </div>
                    <div className="form-group">
                    <label >Time Zone</label>
                    <select className="form-control" id="sel1">
                        <option>West Africa/ Lagos</option>
                        <option>Europe/London</option>
                        <option>America/Califonia</option>
                        <option>India/New Delhi</option>
                    </select>
                    </div>
            
                    <button type="submit" className="btn btn-primary">Register</button>
             
                    </div>
                </form>
            </div>

        )
    }
}
export default Register;