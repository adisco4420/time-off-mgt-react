import React from 'react';
import Header from './../../header/Header';
import axios from 'axios';
import { Link } from 'react-router-dom'

class Confirm extends React.Component {
    state = {
        loading: true,
        response: null
    }
    componentDidMount(){
        console.log(this.props.match.params.token);
        this.confirmToken(this.props.match.params.token)
    }
   async confirmToken(token) {
        try {
            token = this.props.match.params.token
            const res = await axios.post(`${process.env.REACT_APP_TimeOffURL}/employee/confirm`, {token});
            this.setState({loading: false, response: 200})
            console.log(res.data);
        } catch (error) {
            console.log(error.response);
            this.setState({loading: false, response: error.response.status})
        }
    }
   showResend = e => {
       e.preventDefault()
       console.log('resend');
   }

    render() {
        return(
            <div>
                <Header isLogin={false} />
                <div className="jumbotron text-center bg-teal ">
                    <h1>Confirmation </h1>
                </div>
                <form className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            {
                                this.state.loading ? <i className="fa fa-spinner fa-5x fa-spin"></i> : 
                                <React.Fragment>
                                    {
                                        this.state.response === 200 ? 
                                        <div>
                                            <h5>Your Email have Being Verified</h5>
                                            <Link to="/login" className="btn btn-success">Login</Link>
                                        </div> : 
                                        <React.Fragment>
                                            {
                                                this.state.response === 422 ? 
                                                <div>
                                                    <h5>Account has already being Verified</h5>
                                                    <Link to="/login" className="btn btn-success">Login</Link>
                                                </div> : 
                                                <div>
                                                    <i className="fa fa-exclamation-circle text-warning fa-3x"></i>
                                                    <h5>Account activation failed. <br />Your verification link may have expired.</h5>
                                                    <button className="btn btn-primary" onClick={this.showResend}>Click to resend</button>
                                                </div>
                                            }
                                        </React.Fragment> 
                                        
                                    }
                                </React.Fragment>
                            }
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default Confirm