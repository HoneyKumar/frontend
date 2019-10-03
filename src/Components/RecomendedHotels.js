import React from 'react';
import {Link} from 'react-router-dom';

class RecomendedHotels extends React.Component{

    render(){
        return (
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                        <div className="hotel-recommend-wrap">
                            <div className="map-view-col"><Link to="#"><img src="images/map-img.jpg" alt="" /></Link></div>
                            <div className="hotel-recommend-col">
                            <h3>Recommended for you in Hua Hin / Cha-am</h3>
                            <div className="hotel-recommend-list">
                            <figure><img src="images/recommend-img1.jpg" alt="" /></figure>
                            <div className="hotel-recommend-info">
                                <div className="hotel-recommend-name">The Hideaway Resort Hua Hin</div>
                                <Link to="#" className="hotel-listing-location">
                                <i className="fa fa-map-marker" aria-hidden="true"></i> Khao Takiab Beach Front, Hua Hin / Cha-am - View on map</Link>
                                <div className="hotel-recommend-price-details">
                                <span className="hotel-recommend-pernighttext">Price per night as low as</span>
                                <span className="hotel-recommend-price">Rs. 2,109</span>
                                </div>
                            </div>
                            </div>
                            <div className="hotel-recommend-list">
                            <figure><img src="images/recommend-img2.jpg" alt="" /></figure>
                            <div className="hotel-recommend-info">
                                <div className="hotel-recommend-name">The Hideaway Resort Hua Hin</div>
                                <Link to="#" className="hotel-listing-location">
                                <i className="fa fa-map-marker" aria-hidden="true"></i> Khao Takiab Beach Front, Hua Hin / Cha-am - View on map</Link>
                                <div className="hotel-recommend-price-details">
                                <span className="hotel-recommend-pernighttext">Price per night as low as</span>
                                <span className="hotel-recommend-price">Rs. 2,109</span>
                                </div>
                            </div>
                            </div>
                            <div className="hotel-recommend-list">
                            <figure><img src="images/recommend-img3.jpg" alt="" /></figure>
                            <div className="hotel-recommend-info">
                                <div className="hotel-recommend-name">The Hideaway Resort Hua Hin</div>
                                <Link to="#" className="hotel-listing-location">
                                <i className="fa fa-map-marker" aria-hidden="true"></i> Khao Takiab Beach Front, Hua Hin / Cha-am - View on map</Link>
                                <div className="hotel-recommend-price-details">
                                <span className="hotel-recommend-pernighttext">Price per night as low as</span>
                                <span className="hotel-recommend-price">Rs. 2,109</span>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default RecomendedHotels;