import React from 'react';

import {Link} from 'react-router-dom';

class Footer extends React.Component{
    render(){
        return(
			<div>
			<footer id="footer">
			<div className="container-fluid">
		  
			  <div className="col-md-3 col-sm-3">
				<div className="foot-logo-sec">
				  <Link to="index.html"><img src={require('./css/templates/default_template/images/footer-logo.png')} alt="footer-logo" /></Link>
		  
				  <div className="footer-social">
					<Link to="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
					<Link to="#"><i className="fa fa-youtube" aria-hidden="true"></i></Link>
					<Link to="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
				  </div>
		  
				</div>
			  </div>
		  
			  <div className="col-md-9 col-sm-9">
		  
				<div className="footer-left">
		  
				  <div className="footer-blocks">
					<h4>Contact</h4>
					<ul>
					  <li>
						<i className="fa fa-home" aria-hidden="true"></i><span>AR Travel Pvt.
						  1 St Stephens Terrace
						Bradford BD5 7BY </span>
					  </li>
		  
					  <li>
						<i className="fa fa-phone" aria-hidden="true"></i> <span>01274 394 071</span>
					  </li>
		  
					  <li>
						<i className="fa fa-envelope" aria-hidden="true"></i> <span>support@artravels.co.uk</span>
					  </li>
		  
					</ul>
				  </div>
		  
		  
				  <div className="footer-blocks">
					
					<ul>
					  <li><Link to="#">About Us</Link></li>
					  <li><Link to="#">Team</Link></li>
					  <li><Link to="#">Media</Link></li>
					  <li><Link to="#">Insurance</Link></li>
					</ul>
				  </div>
		  
		  
				  <div className="footer-blocks">
					<h4>Hajj</h4>
					<ul>
					  <li><Link to="#">Packages</Link></li>
					  <li><Link to="#">Booking Form</Link></li>
					  <li><Link to="#">Hajj Guide</Link></li>
					  <li><Link to="#">Testimonials</Link></li>
					</ul>
				  </div>
		  
		  
				  <div className="footer-blocks">
					<h4>Umrah</h4>
					<ul>
					  <li><Link to="#">Online</Link></li>
					  <li><Link to="#">Packages</Link></li>
					  <li><Link to="#">Umrah Guide</Link></li>
					  <li><Link to="#">Hotels</Link></li>
					</ul>
				  </div>
		  
		  
				  <div className="footer-blocks">
					<h4>Legal</h4>
					<ul>
					  <li><Link to="#">Terms</Link></li>
					  <li><Link to="#">Disclaimer</Link></li>
					  <li><Link to="#">Privacy Policy</Link></li>
					  <li><Link to="#">Complaints</Link></li>
					</ul>
				  </div>
		  
		  
				</div>
			  </div>
		  
			</div>
		  
			<div className="copyright-text">
			  Copyright 2017 AR Travel Pvt. All Rights Reserved
			</div>
		  
		  </footer>
			</div>
        )
    }
}

export default Footer;