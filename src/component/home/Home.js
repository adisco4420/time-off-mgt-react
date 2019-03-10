import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './HomeStyle.css'
class Home extends Component { 
    render() {
        return (
            <div>
              <div className="jumbotron">
                <h1 className="display-4 pull-left">Time Off Management</h1>
                    <div className="float-right mr-3"> 
                        <span className="fa fa-calendar fa-5x" ></span>
                    </div>
                <h1 className="lead mt-lead">Open source, simple yet powerful absence management software for small and medium size business.</h1>
                <hr className="my-4" />
                <p>Endorsed by hundreds of software developers..</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Sign Up</a>
                </p>
            </div>
            <div className="container">    
                <h2 className="text-primary text-center mb-5">Simple Employees Absence Management</h2>
                <div className="row text-center">
                
                    <div className="col-4">
                    <span className="fa fa-server fa-5x"></span>
                        <h5 className="mt-3">Use within own infrastructure</h5>
                        <p>Host application within your own infrastructure</p>
                        <p className="mt-4">
                            As an open source software TimeOff.Management 
                            could be deployed into customer server without any enquires, 
                            not even email is needed!
                        </p>
                      
                    </div>

                    <div className="col-4">
                    <span className="fa fa-cloud fa-5x"></span>
                        <h5 className="mt-3">Host in a cloud</h5>
                        <p>For as little as 0.50 USD per person per month! With 30 days trial.</p>
                        <p className="mt-4">
                            just create an account and start using the application. 
                            We will issue PayPal invoice by the end of second month.
                        </p>
                     
                    </div>
                    <div className="col-4">
                    <span className="fa fa-random fa-5x"></span>
                        <h5 className="mt-3">Simple and flexible</h5>
                        <p>Fits into your organisation's workflow rather than force you to adopt it!</p>
                        <p className="mt-4">
                            Automated account setup and very intuitive user interface.
                        </p>
                     
                    </div>
                </div>
            </div>
        </div>
        )
    }

}
export default Home;