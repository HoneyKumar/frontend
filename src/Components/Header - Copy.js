import React from 'react';

import {Link} from 'react-router-dom';


class Header extends React.Component{

    render(){
        return(
            <header>
                <div className="container">
                    <div className="col-md-4 col-sm-12 col-xs-12">
                        <div className="logo"> <Link to="index.html"><img src={require('./css/templates/default_template/images/logo.png')} alt="logo" /></Link> </div>
                    </div>
                    <div className="col-md-8 col-sm-12 col-xs-12 toggle-xs">
                        <div className="navigation"> 
                            <nav className="navbar navbar-default" data-aos="fade-down" data-aos-duration="3000">
                                <div className="navbar-header">
                                    <button className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button>
                                </div>
                                <div className="collapse navbar-collapse" id="navcol-1">
                                    <ul className="nav navbar-nav">
                                    <li className="active"><Link to="#">Home</Link></li>
                                    <li className="dropdown"><Link to="#" className="dropdown-toggle" data-toggle="dropdown"> About Us </Link> 
                                    </li>
                                    <li><Link to="#"> Hajj </Link></li>
                                    <li><Link to="#"> umrah </Link></li>
                                    <li><Link to="#"> Hotel </Link> </li>
                                    <li><Link to="#"> Media </Link></li>
                                    <li><Link to="#"> Contact Us </Link></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;