import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class QuoteHotelPannel extends React.Component{

    render(){
        var {hotel_details} = this.props.hotelDetail;
        let images = Object.values(hotel_details.images);
        let image_path = 'http://dev-three.usoft.co.uk/public/uploads/users/client/hotels/'+images[0].PictureName;
        return (
            <div className="panel-body">
                <div className="media">
                    <div className="media-left">
                        <Link to="#">
                            <img className="media-object img-responsive" src={image_path} alt=""/>
                        </Link>
                    </div>
                    <div className="media-body">
                        <h4 className="media-heading">{ hotel_details.HotelName }</h4>
                        <div className="Rating"> 
                            <i className="fa fa-star c-yellow" aria-hidden="true"></i> 
                            <i className="fa fa-star c-yellow" aria-hidden="true"></i> 
                            <i className="fa fa-star c-yellow" aria-hidden="true"></i> 
                        </div>
                        <p>
                            <small>{hotel_details.Address }</small>
                        </p>
                        <div className="messageContainer">
                            <span><i className="fa fa-map-marker" aria-hidden="true"></i> Exceptional location </span>
                            <span><Link data-toggle="popover" data-container="body" data-placement="left" type="button" data-html="true" to="#">- What's nearby?</Link></span>
                            <div id="popover-content" className="hide popover-content-list">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <h5>Most Popular Landmark</h5>
                                        <ul>
                                            <li>Lorem ipsum dolor sit amet</li>
                                            <li>Lorem ipsum dolor sit amet</li>
                                            <li>Lorem ipsum dolor sit amet</li>
                                            <li>Lorem ipsum dolor sit amet</li>
                                            <li>Lorem ipsum dolor sit amet</li>
                                            <li>Lorem ipsum dolor sit amet</li>
                                            <li>Lorem ipsum dolor sit amet</li>
                                            <li>Lorem ipsum dolor sit amet</li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-6">
                                        <h5>Closest Landmark</h5>
                                        <ul>
                                            <li>Lorem ipsum dolor sit amet</li>
                                            <li>Lorem ipsum dolor sit amet</li>
                                            <li>Lorem ipsum dolor sit amet</li>
                                            <li>Lorem ipsum dolor sit amet</li>
                                            <li>Lorem ipsum dolor sit amet</li>
                                            <li>Lorem ipsum dolor sit amet</li>
                                            <li>Lorem ipsum dolor sit amet</li>
                                            <li>Lorem ipsum dolor sit amet</li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="alert alert-danger-custom">
                        <p><small><strong>Selling out fast!</strong> 6 similar properties are already sold out! Book your room before they're all gone.</small></p>
                    </div>
                </div>
	        </div>
        )
    }
}

const mapStatToProps = (state)=>{
   let bookHotel = state.bookHotel;
   let hotelList = Object.values(state.hotelList);
    var hotelDetail = hotelList.find(({hotel_details})=> parseInt(hotel_details.HotelID) === parseInt(bookHotel.hotelId) );
    return {bookHotel,hotelDetail}
}

export default connect(mapStatToProps,null)(QuoteHotelPannel);

