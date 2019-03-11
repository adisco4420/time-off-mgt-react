import React from 'react';
import './register.css'

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
    
        this.state = {
          companyName: null,
          firstName: null,
          lastName: null,
          email: null,
          password: null,
          formErrors: {
            companyName: '',
            firstName: "",
            lastName: "",
            email: "",
            password: ""
          }
        };
      }
    
      handleSubmit = e => {
        e.preventDefault();
    
        if (formValid(this.state)) {
          console.log(`
            --SUBMITTING--
           Company Name: ${this.state.companyName}
            First Name: ${this.state.firstName}
            Last Name: ${this.state.lastName}
            Email: ${this.state.email}
            Password: ${this.state.password}
          `);
          alert('registration successful')
        } else {
          console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
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
            formErrors.lastName =
              value.length < 3 ? "minimum 3 characaters required" : "";
            break;
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
                <div className="jumbotron text-center bg-teal ">
                    <h1>Register Form </h1>
                </div>
                <form className="container mb-5" onSubmit={this.handleSubmit} noValidate style={{padding: '2% 20%' }}>
                    <div className="">
                    <div className="form-group">
                    <label >Company Name</label>
                    <input type="text" className="form-control"  placeholder="Company Name" 
                          name="companyName"  noValidate onChange={this.handleChange}/>
                      {formErrors.companyName.length > 0 && (
                         <span className="text-danger">{formErrors.companyName}</span>
              )}
                   </div>
                   <div className="form-group">
                    <label >First Name</label>
                    <input type="text" className="form-control"  placeholder="First Name" 
                          name="firstName"  noValidate onChange={this.handleChange}/>
                      {formErrors.firstName.length > 0 && (
                         <span className="text-danger">{formErrors.firstName}</span>
              )}
                   </div>
                   <div className="form-group">
                    <label >Last Name</label>
                    <input type="text" className="form-control"  placeholder="First Name" 
                          name="lastName"  noValidate onChange={this.handleChange}/>
                      {formErrors.lastName.length > 0 && (
                         <span className="text-danger">{formErrors.lastName}</span>
              )}
                   </div>
                    <div className="form-group">
                    <label >Email address</label>
                    <input type="email" className="form-control"  placeholder="Enter email" 
                          name="email"  noValidate onChange={this.handleChange}/>
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