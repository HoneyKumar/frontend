import React from 'react';
import {connect} from 'react-redux';

class QuotePriceDetails extends React.Component{

    calculateTotalPrice = (rate,roomQuantity)=>{
        return parseInt(roomQuantity) * parseFloat(rate);
    }
render(){
    var {hotel_details} = this.props.hotelDetail;
    return (
        <div className="panel panel-default">
            <div className="panel-body">
            <div className="discount-label label-position">60% OFF TODAY</div>
            <div className="ammountContainer">
            <div className="TotalDays">Original price ({this.props.roomQuantity} room x {hotel_details.TotalDays} nights)</div>
            <div className="TotalPrice">{this.props.bedDetail.SellCurrency === '&pound;' ? '£' : this.props.bedDetail.SellCurrency} 45,784.39</div>
            </div>
            <div className="discountCoupon">
            <div className=""><i className="fa fa-check-circle" aria-hidden="true"></i> 24HOURSALE Coupon applied</div>
            <div className="">-{this.props.bedDetail.SellCurrency === '&pound;' ? '£' : this.props.bedDetail.SellCurrency} 1,244.01</div>
            </div>
            <div className="ActualPrice-Container">
            <div className="PriceTotal-Nights">Price ({this.props.roomQuantity} room x {hotel_details.TotalDays} nights)</div>
            <div className="Actual-price">{this.props.bedDetail.SellCurrency === '&pound;' ? '£' : this.props.bedDetail.SellCurrency} {this.props.bedDetail.rate }</div>
            </div>
            <div className="PriceWithTaxes">
            <div className="Pricetax-text">Price <i className="fa fa-info-circle" aria-hidden="true"></i></div>
            <div className="Actual-Taxprice">{this.props.bedDetail.SellCurrency === '&pound;' ? '£' : this.props.bedDetail.SellCurrency} { this.calculateTotalPrice(this.props.bedDetail.rate,this.props.roomQuantity) }</div>
            <p><small><strong>Included in price:</strong> Hotel tax and service fees {this.props.bedDetail.SellCurrency === '&pound;' ? '£' : this.props.bedDetail.SellCurrency} 6,903.77</small></p>
            </div>
            <p className="we-price-match-message">
                    <span className="arrow-up"></span>
                    <span><strong>We price match.</strong> Find it for less, and we'll match it!</span>
                    <i className="fa fa-info-circle"></i>
            </p>
            <p>YOU SAVED {this.props.bedDetail.SellCurrency === '&pound;' ? '£' : this.props.bedDetail.SellCurrency} 1,244.01 ON THIS BOOKING!</p>
            </div>
        </div>
    )
}

}

const mapStateToProps = (state)=>{
    let roomQuantity = state.bookHotel.totalRooms;
    let selectedHotel = state.bookHotel.hotelId;
    let hotelList = Object.values(state.hotelList);
    let hotelDetail = hotelList.find(({hotel_details})=> parseInt(hotel_details.HotelID) === parseInt(selectedHotel) );
    let selectedRoomId = state.bookHotel.roomId;
    let bedDetails = Object.values(hotelDetail.hotel_details.BedDetails);
    let bedDetail = bedDetails.find((detail)=> parseInt(detail.BedID) === parseInt(selectedRoomId));
    return {roomQuantity,hotelDetail,bedDetail};

}
export default connect(mapStateToProps)(QuotePriceDetails);