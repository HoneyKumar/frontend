import React from 'react';
import {connect} from 'react-redux';
import {signInAction} from '../Actions';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email : '',
            password : '',
            formErrors : {email : '',password : ''}
        }
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        if(this.handleValidation()){
            let email = this.state.email;
            let password = this.state.password;
            
            this.props.signInAction(email,password);
        }
    }

    handleOnChange = (e)=>{
        e.preventDefault();
        this.setState({[e.target.name] : e.target.value })
    }

    handleValidation =()=>{
        let formErrors = JSON.parse(JSON.stringify(this.state.formErrors))
        if(this.state.email === ''){
          
            formErrors.email = 'Email is required';
            this.setState({formErrors});
          return false;
        }
        
        if(this.state.password === ''){
           
            formErrors.password = 'Password is required';
            this.setState({formErrors});
            return false;
        }
        
        return true;
    }
    
    render(){
        return (
            <div className="container">
                <div className="sign-up-section">
                    <div className="sign-up-wrap">
                        <div className="sign-up-wrap-col">
                            <div className="col-md-12">
                                <div className="col-md-6 col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="email-address" className="sign-up-form-text">Email Address <span>*</span></label><br />
                                        <input type="text" className="form-control sign-up-form-input" id="bed-type" name="email" onChange={this.handleOnChange} value={this.state.email} />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="password" className="sign-up-form-text">Password<span>*</span></label><br />
                                        <input type="password" name="password" className="form-control sign-up-form-input" id="password" value={this.state.password}  onChange={this.handleOnChange}/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="col-md-6 col-sm-6"><button className="btn btn-primary" onClick={this.handleSubmit}>Sign In</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default connect(null,{signInAction})(Login);