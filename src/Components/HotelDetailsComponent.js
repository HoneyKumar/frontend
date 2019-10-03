import React from 'react';

import { connect } from 'react-redux';
import {Link } from 'react-router-dom';
import TopSearchBar from './TopSearchBar'; 
import RecomendHotels from './RecomendedHotels';
import {reserveRoom} from '../Actions'
import './css/templates/default_template/css/hotel-detail.css';
 

class HotelDetailsComponent extends React.Component{
    
    handleOnClick = (event)=>{
        event.preventDefault();
        let roomId= event.currentTarget.id;
        var e = document.getElementById('roomNo'+roomId);
        let totRooms = e.options[e.selectedIndex].value;
        let hotelID = this.props.hotelDetail.hotel_details.HotelID;
      
        this.props.reserveRoom(hotelID, roomId, totRooms);
        

    }

    getPerNightPrice = (numberOfNights,totalPrice)=>{
        let pricePerNight = parseFloat(totalPrice)/parseInt(numberOfNights);
        return pricePerNight; 
    }

    renderRoomType =(hotel_details)=>{
      let bed_details = Object.values(hotel_details.BedDetails);
      
      return bed_details.map((bed_detail)=>{
        
       
      return (
       
            <div className="box-border MasterRoom" key={bed_detail.BedID}>
                <div className="MasterRoom-header">
                    <div className="MasterRoom-headerLeft"> 
                        <Link to="" className="MasterRoom-headerTitle">
                            <div className="MasterRoom-headerTitle--text">
                                <div className="MasterRoom__TitleName"><span>{bed_detail.BedName}</span></div>
                                <div className="MasterRoom__LastBooked text-danger">Last booked 4 hours ago</div>
                            </div>
                        </Link> 
                    </div>
                    <div className="MasterRoom-headerRight">
                        <div className="MasterRoom-headerAskAbout">
                            <div className="chat-icon">
                                <div className="fa fa-commenting-o"></div>
                            </div>
                            <div className="border"><span className="MasterRoom-headerAskAboutText">Ask about this room</span></div>
                        </div>
                    </div>
                </div>
                <div className="MasterRoom-table">
                    <div className="MasterRoom-row">
                        <div className="MasterRoom-info">
                            <div className="MasterRoom-infoPhotoContainer">
                                <div className="MasterRoom-infoPhoto"> <img src="images/recommend-img3.jpg" className="img-responsive" alt=""/> </div>
                                <div className="MasterRoom-infoPhotoThumbnail">
                                <ul>
                                    <li><img src="images/recommend-img3.jpg" className="img-responsive" alt=""/></li>
                                    <li><img src="images/recommend-img3.jpg" className="img-responsive" alt=""/></li>
                                </ul>
                                </div>
                            </div>
                            <div className=""> <Link to="" className="MasterRoom-infoSeePhotos">Room photos and details</Link>
                                <ul className="masterRoomFacility">
                                <li><span><i className="fa fa-wifi" aria-hidden="true"></i></span> Free Wi-Fi</li>
                                <li><span><i className="fa fa-bed" aria-hidden="true"></i></span> 1 double bed</li>
                                <li><span><i className="fa fa-home" aria-hidden="true"></i></span> Room size: 12 m²/129 ft²</li>
                                <li><span><i className="fa fa-window-maximize" aria-hidden="true"></i></span> No Windows view</li>
                                <li><span><i className="fa fa-wifi" aria-hidden="true"></i></span> Non-smoking</li>
                                <li><span><i className="fa fa-bath" aria-hidden="true"></i></span> Shower and bathtub</li>
                                <li className="more"><span><i className="fa fa-plus-circle" aria-hidden="true"></i></span> More features</li>
                                </ul>
                            </div>
                            <hr />
                            <div className="reviewScore">
                                <div className="scoreHolder">
                                    <div className="scorePoint">8.2</div>
                                    <div className="scoreCategory">Excellent</div>
                                </div>
                            </div>
                        </div>
                        <div className="MasterRoom-roomsList">
                            <div className="ChildRoomsList-header">
                                <div className="ChildRoomsList-headerCell ChildRoomsList-headerCellIncluded">Benefits</div>
                                <div className="ChildRoomsList-headerCell ChildRoomsList-headerCellCapacity">Sleeps</div>
                                <div className="ChildRoomsList-headerCell ChildRoomsList-headerCellPrice">Price per night</div>
                                <div className="ChildRoomsList-headerCell ChildRoomsList-headerCellRooms">Rooms</div>
                                <div className="ChildRoomsList-headerCell ChildRoomsList-headerCellBook">Most booked</div>
                            </div>
                            
                        
                            <div className="dealOfthedayRed dealOfthedayBlue">
                                <div className="dealOftheday-content">
                                    <div className="dealOftheday-content-cell roomcell-feature">
                                        <div className="dealOftheday-title"><i className="fa fa-thumbs-up" aria-hidden="true"></i> Recommended for you</div>
                                        <span><strong>Your price includes:</strong></span>
                                        <div className="Selectedamenities"><span className="fa fa-check text-green"></span> Pay nothing until September 24, 2019</div>
                                        <div className="Selectedamenities"><span className="fa fa-check text-green"></span> Free Wi-Fi</div>
                                        <div className="Selectedamenities"><span className="fa fa-check text-green"></span> 
                                        <Link to="#" data-toggle="popover" data-content="Security wise-very safe, even at 2 am, there r activities, good for late nite super & shopping-right into hotel (own convenient store)">Extra low price! (non-refundable) <i className="fa fa-external-link" aria-hidden="true"></i>
                                        </Link>
                                        </div>
                                        <div className="PromotionBadge">
                                        <i className="fa fa-clock-o" aria-hidden="true"></i> Super Saver
                                        </div>
                                        <div className="rounded-badge-text"><span>24HOURSALE</span><span> Coupon Code 24HOURSALE applied - Rs. 87 off!</span></div>
                                    </div>
                                    <div className="dealOftheday-content-cell roomcell-capacity text-center">
                                        <div className="info">
                                            <Link to="#" data-toggle="popover" data-content="Security wise-very safe, even at 2 am, there r activities"><i className="fa fa-external-link" aria-hidden="true"></i>
                                                <span className="Capacity-iconGroup">
                                                <i className="fa fa-male f-24" aria-hidden="true"></i>
                                                <i className="fa fa-male f-24" aria-hidden="true"></i>
                                                <i className="fa fa-male f-16" aria-hidden="true"></i>
                                                <i className="fa fa-male f-16" aria-hidden="true"></i>
                                                </span>
                                                <span className="Capacity__text">
                                                <span>2</span>
                                                <span> kids under </span>
                                                <span>6</span>
                                                <span> years stay </span>
                                                <span className="text-green">FREE!</span>
                                                </span>
                                            </Link>
                                        </div>

                                    </div>
                                    <div className="dealOftheday-content-cell roomcell-price">
                                        <div className="PriceContainer">
                                        <div className="Discount">69% CHEAPER TODAY!</div>
                                        <div className="price-bags-col">Last minute price drop!</div>
                                        <div className="DiscountInfoText hidden">
                                            <span className="text-green">49%</span><span> cheaper than the average of properties in </span><span className="text-green">Taipei</span>

                                        </div>
                                        <div className="actualPrice">{bed_detail.SellCurrency === '&pound;' ? '£' : bed_detail.SellCurrency} {bed_detail.rate }</div>
                                        <div className="priceWithDiscount">
                                            <span>{bed_detail.SellCurrency === '&pound;' ? '£' : bed_detail.SellCurrency} </span>{this.getPerNightPrice(hotel_details.TotalDays,bed_detail.rate) }
                                        </div>
                                        <div className="PriceAndReview-priceper text-right">Price per night as low as</div>
                                        </div>
                                    </div>
                                    <div className="dealOftheday-content-cell roomcell-selector">
                                        <div className="RoomSelector">
                                            <select className="form-control" id={"roomNo" + bed_detail.BedID}>
                                                <option>0</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="dealOftheday-content-cell roomcell-book">
                                        <div className="Booking-Container">
                                        <button type="button" className="btn btn-info btn-booking" id={bed_detail.BedID} onClick={this.handleOnClick}>Reserve</button>
                                        <div className="alert alert-green"> <strong>RISK FREE!<br /></strong> No cancellation fee </div>
                                        <div className="MessageBooking">It only takes 2 minutes</div>
                                        <div className="RoomList-urgency text-right text-danger">Our last 4 rooms!</div>
                                        <div className="SellOt-in-a-days text-right">Likely to sell out in <span className="text-danger">4 days</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
      })
        
    }
    render(){
        const svgStyle = {
            fill:'#f39c12'
          };
          var {hotel_details} = this.props.hotelDetail;
         
               
        return(
            <React.Fragment>
               
                <TopSearchBar />
                <div className="container">
                    <div className="row">
                        <RecomendHotels />
                        <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
                            <div className="hotel-detail-wrap">
                                <div className="page-header detail-box">
                                    <div className="BadgeHolder"> <span className="label label-danger">Favorite choice for travelers!</span> <span className="label label-info">Newly renovated</span> <span className="label label-success">Free Wi-Fi</span> </div>
                                    <h3>{hotel_details.HotelName}</h3>
                                    <div className="starRating"> <i className="fa fa-star c-yellow" aria-hidden="true"></i> <i className="fa fa-star c-yellow" aria-hidden="true"></i> <i className="fa fa-star c-yellow" aria-hidden="true"></i> </div>
                                    <p className="hotelLocation">{hotel_details.HotelDescription}</p>
                                    <div className="recommend-guest"><i className="fa fa-star" aria-hidden="true"></i> One of our top picks in {}</div>
                                </div>
                                <div className="page-header review-box">
                                    <h4 className="text-center"> "Security wise-very safe, even at 2 am, there r activities, <span className="text-warning">good</span> for late nite super & shopping-right into <span className="text-warning">hotel</span> (own convenient store)" </h4>
                                    <div className="GuestName text-center"><i className="fa fa-calendar" aria-hidden="true"></i> <span className="name">Joseph</span> - <span className="postDate">June 13, 2018</span></div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="media">
                                            <div className="media-left media-middle"> <svg width="2em" height="2em" id="Layer_1" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 32 32" className="text-warning" style={svgStyle}>
                                                <path className="st0" d="M31.5 24.3l-5.3-5c1.3-2 2.1-4.3 2.1-6.8C28.3 5.7 22.8.3 16.1.3 9.2.2 3.8 5.7 3.8 12.5c0 2.5.8 4.8 2 6.8L.5 24.4c-.2.2-.3.5-.2.8.1.3.3.5.6.5l4.6.7 1 4.7c.1.3.3.5.5.6h.2c.2 0 .4-.1.5-.2l7.1-6.8c.4 0 .8.1 1.2.1.4 0 .8 0 1.1-.1l7 6.8c.1.1.3.2.5.2h.2c.3-.1.5-.3.5-.6l.9-4.6 4.8-.9c.3-.1.5-.3.6-.5.2-.3.1-.6-.1-.8zM7.7 29.5l-.8-3.9c-.1-.3-.3-.5-.6-.6l-3.6-.6 4.1-4c1.6 1.9 3.8 3.3 6.3 3.9l-5.4 5.2zm-2.5-17C5.2 6.6 10.1 1.8 16 1.8s10.7 4.8 10.7 10.8S21.9 23.2 16 23.2c-5.9 0-10.8-4.8-10.8-10.7zm20.4 12.7c-.3.1-.5.3-.6.6l-.8 3.8-5.2-5.2c2.5-.6 4.7-2 6.3-3.9l4.2 3.9-3.9.8z"></path>
                                                <path className="st0" d="M19.6 8.5L13 15.3 11.5 14c-.3-.3-.8-.3-1.1 0-.3.3-.3.8 0 1.1l1.8 1.6c.2.2.5.3.7.3h.1c.3 0 .5-.1.6-.3l6.9-7.2c.3-.3.3-.8 0-1.1-.1-.2-.6-.2-.9.1z"></path>
                                                </svg> </div>
                                            <div className="media-body">
                                                <h4 className="media-heading">Exceptional reputation</h4>
                                                <p>Recommended by <span className="text-warning">89%</span> of guests</p>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="media">
                                            <div className="media-left media-middle"> 
                                            
                                        </div>
                                            <div className="media-body">
                                                <h4 className="media-heading">Very good cleanliness</h4>
                                                <p><span className="text-warning">7.8</span> rating for cleanliness</p>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="page-header box-border">
                                    <div className="HotelAmenities text-center">
                                        <ul>
                                            <li> <i className="fa fa-train text-success" aria-hidden="true"></i>
                                            <p>140 meters to public<br />
                                                transportation</p>
                                            </li>
                                            <li> <i className="fa fa-plane text-success" aria-hidden="true"></i>
                                            <p>Airport transfer </p>
                                            </li>
                                            <li> <i className="fa fa-map-marker text-success" aria-hidden="true"></i>
                                            <p>Located in heart of Taipei </p>
                                            </li>
                                            <li> <i className="fa fa-wifi text-success" aria-hidden="true"></i>
                                            <p>Free Wi-Fi in all rooms!</p>
                                            </li>
                                            <li> <i className="fa fa-train text-success" aria-hidden="true"></i>
                                            <p>Air conditioning</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            {this.renderRoomType(hotel_details)}
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="featureBox">
                                <i className="fa fa-globe fa-2x" aria-hidden="true"></i>
                                <div className="sub-section">
                                <h3 className="sub-section-header">Languages spoken</h3>
                                <ul>
                                    <li>English</li>
                                    <li>Chinese [Mandarin]</li>
                                    <li>Japanese</li>
                                </ul>
                                </div>
                            </div>
                            <div className="featureBox">
                                <i className="fa fa-wifi fa-2x" aria-hidden="true"></i>
                                <div className="sub-section">
                                <h3 className="sub-section-header">Internet access</h3>
                                <ul>
                                    <li>Free Wi-Fi in all rooms!</li>
                                    <li>Wi-Fi in public areas</li>
                                </ul>
                                </div>
                            </div>
                            <div className="featureBox">
                                <i className="fa fa-bus fa-2x" aria-hidden="true"></i>
                                <div className="sub-section">
                                <h3 className="sub-section-header">Things to do, ways to relax</h3>
                                <ul>
                                    <li>Tours</li>
                                </ul>
                                </div>
                            </div>
                            <div className="featureBox">
                                <i className="fa fa-cutlery fa-2x" aria-hidden="true"></i>
                                <div className="sub-section">
                                <h3 className="sub-section-header">Dining, drinking, and snacking</h3>
                                <ul>
                                    <li>Grocery delivery</li>
                                </ul>
                                </div>
                            </div>
                            <div className="featureBox">
                                <i className="fa fa-cog fa-2x" aria-hidden="true"></i>
                                <div className="sub-section">
                                <h3 className="sub-section-header">Services and conveniences</h3>
                                <ul>
                                    <li>Cash withdrawal</li>
                                    <li>Dry cleaning</li>
                                    <li>Shops</li>
                                    <li>Concierge</li>
                                    <li>Laundromat</li>
                                    <li>Smoke-free property</li>
                                    <li>Convenience store</li>
                                    <li>Laundry service</li>
                                    <li>Smoking area</li>
                                    <li>Daily housekeeping</li>
                                    <li>Luggage storage</li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

const mapStateToProps =(state,ownProps)=>{
    var hotelId = ownProps.match.params.id;
    let hotelList = Object.values(state.hotelList);
    var hotelDetail = hotelList.find(({hotel_details})=> parseInt(hotel_details.HotelID) === parseInt(hotelId) );
    return {hotelDetail }
}

export default connect(mapStateToProps,{reserveRoom})(HotelDetailsComponent);