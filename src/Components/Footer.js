import React from 'react';

import {Link} from 'react-router-dom';

class Footer extends React.Component{
    render(){
        return(
			<div className="workteams_footer_01">
				<footer id="footer" className="fixed">
					<div className="upper-footer">
						<div className="container">
							<div className="row">
								<div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 first-widget-area">
									<div className="footer_widget">
										<h5 className="widget-title"><span>ABOUT US</span></h5>
										<div className="textwidget">
											<p><a href="https://alhijaztoursandtravels.com/about-us/">About Us</a></p>
											<p><a href="https://alhijaztoursandtravels.com/blog">Media</a></p><br /><p>&nbsp;</p>
											<p className="footer-blank-space"></p>
										</div>
									</div>
									<div className="footer_widget">
										<img width="201" height="55" src="https://alhijaztoursandtravels.com/wp-content/uploads/2018/05/logo-alhjz.png" className="image wp-image-2269  attachment-full size-full" alt="" />
									</div>
								</div>
								<div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 second-widget-area">
									<div className="footer_widget">
										<h5 className="widget-title"><span>HAJJ</span></h5>
										<div className="textwidget">
											<p><a href="https://alhijaztoursandtravels.com/hajj/#Packages">Packages</a></p>
											<p><a href="https://app.alhijaztoursandtravels.com/public/uploads/agent/package/itenary/PCKH_76_1547506328.pdf" target="_blank" rel="noopener">General Itinerary</a></p>
											<p>Requirements</p>
										</div>
									</div>
									<div className="footer_widget">
										<img width="300" height="88" src="https://alhijaztoursandtravels.com/wp-content/uploads/2018/07/logotest-300x88.png" className="image wp-image-4564  attachment-medium size-medium" alt="" />
									</div>
								</div>
								<div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 third-widget-area">
									<div className="footer_widget">
										<h5 className="widget-title"><span>UMRAH</span></h5>
										<div className="textwidget">
											<p><a href="https://alhijaztoursandtravels.com">Instant Quote</a></p>
											<p><a href="https://alhijaztoursandtravels.com/umrah/#Packages">Group Package</a></p>
											<p><a href="https://alhijaztoursandtravels.com/wp-content/uploads/2018/12/HAJJ%20and%20UMRAH%20GUIDE%20A4P.pdf" target="_blank" rel="noopener">Umrah Guide</a></p>
										</div>
									</div>
									<div className="footer_widget">
										<img width="300" height="88" src="https://alhijaztoursandtravels.com/wp-content/uploads/2018/07/logotest2-300x88.png" className="image wp-image-4565  attachment-medium size-medium" alt="" />
									</div>
								</div>
								<div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 forth-widget-area">
									<div className="footer_widget">
										<h5 className="widget-title"><span>LEGAL</span></h5>
										<div className="textwidget"><p>Privacy</p>
											<p><a href="http://alhijaztoursandtravels.com/faq">FAQ</a></p>
											<p><a href="http://alhijaztoursandtravels.com/complaints">Complaints</a></p>
										</div>
									</div>
									<div className="footer_widget">
										<div className="socials-widget">
											<a href="https://en-gb.facebook.com/AlHijazLondon" target="_blank">
												<span className="fa fa-facebook"></span>
											</a>
											<a href="https://twitter.com/ALHIJAZLONDON" target="_blank">
												<span className="fa fa-twitter"></span>
											</a>
											<a href="https://www.youtube.com/user/AlHijazToursTravels/videos" target="_blank">
												<span className="fa fa-youtube">    
												</span>
											</a>
											<a href="http://www.instagram.com/alhijazlondon" target="_blank">
												<span className="fa fa-instagram"></span>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="lower-footer">
						<div className="container">
							<div className="pull-left">
								<span><b>YOUR FINANCIAL PROTECTION</b> <br />Flight-inclusive holiday packages and Flight-Plus arrangements created on alhijaztoursandtravels.com are Financially protected by the Civil Aviation Authority (under Al-Hijaz Tours & Travels Ltd, ATOL number 10143), But ATOL protection does not apply to all holiday and travel services listed on this website. Please ask us to confirm what protection may apply to your booking. If you do not receive an ATOL Certificate then your booking will not be ATOL protected. If you do receive an ATOL Certificate but all the parts of your trip are not listed on it, those parts will not be ATOL protected. Please see our general terms and conditions for further details on ATOL<br />© 2018 Al-Hijaz (Tours & Travels) Ltd. All Rights Reserved. Registered Company Number: 06858100</span>
							</div>
						</div>
					</div>
				</footer>
			</div>
        )
    }
}

export default Footer;