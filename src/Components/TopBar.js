import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import chat from './css/templates/default_template/images/chat-icon.jpg';

 // with import


class TopBar extends React.Component{
    render(){
        return(
            <div id="navbari">
                <div className="container">
                    <div className="first_header">
                        <div className="col-md-6"><span>
                            <i style={{ color: '#a8d429' }} className="fa fa-phone" aria-hidden="true"></i> &nbsp; 0208 576 6661 &nbsp;</span><span><i style={{ color: '#a8d429' }} className="fa fa-envelope" aria-hidden="true"></i> &nbsp; <a style={{ color: '#FFF' }} href="mailto:enquiries@alhijaztoursandtravels.com" target="_blank">enquiries@alhijaztoursandtravels.com</a></span></div>
                        <div className="col-md-3 koha">
                            <span id="date">Tue, 19 Nov 2019</span> / <span id="today"> 21 Rabi'ul Awwal 1441 AH</span>
                        </div>
                        <div className="col-md-3 buttona">
                            <a className="NotLoggedIn" href="https://app.alhijaztoursandtravels.com/login"><button>LOG IN</button></a>
                            <a className="NotLoggedIn" href="https://app.alhijaztoursandtravels.com/register"><button>REGISTER</button></a>
                            <a className="LoggedIn" href="https://app.alhijaztoursandtravels.com/dashboard" style={{ display: 'none' }}><button>Dashboard</button></a>
                            <a className="LoggedIn" href="https://app.alhijaztoursandtravels.com/logout" style={{ display: 'none' }}><button>Logout</button></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {user: state.userDetails}
}
export default connect(mapStateToProps,null)(TopBar);