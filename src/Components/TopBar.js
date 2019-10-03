import React from 'react';

import {Link} from 'react-router-dom';


import chat from './css/templates/default_template/images/chat-icon.jpg';

 // with import


class TopBar extends React.Component{
    render(){
        return(
          
               <div className="top-bar">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-12 padding-left-right">
                                <div className="top-bar-left">
                                    <ul>
                                    <li> <img src={chat} alt="chat" /> Talk to an Expert: +44-142-4394071 </li>
                                    <li> <img src={require('./css/templates/default_template/images/chat-icon.jpg')}  alt="time-icon" /> Mon-Sat 8.00/18.00 </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12 padding-left-right">
                                <div className="top-bar-left right-bar">
                                    <ul>
                                    <li> Web 08 Nov 2017 / 2 Zul Qa'edah 1438 </li>
                                    <li> 
                                    <Link to="#"> <img src={require('./css/templates/default_template/images/login-icon.jpg')} alt="login" /> Login</Link> 
                                    <Link to="#"> <img src={require('./css/templates/default_template/images/register-icon.jpg')} alt="register-icon" /> Register</Link> 
                                    </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
           
        )
    }
}

export default TopBar;