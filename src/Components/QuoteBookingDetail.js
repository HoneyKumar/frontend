import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class QuoteBookingDetail extends React.Component{

formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [ day,month,year].join('-');
    }    
render(){
    var {hotel_details} = this.props.hotelDetail;
    let check_in_date = this.formatDate(this.props.date[0]);
    let check_out_date = this.formatDate(this.props.date[1]);
    return (
        <div className="panel panel-default">
            <div className="panel-body">
                <div className="checkin-checkout-details-panel">
                <div>
                <div className="dates-container">
                    <h4>{check_in_date} - {check_out_date}</h4>
                </div>
                <div className="nights-container">
                    <h4>{hotel_details.TotalDays} nights</h4>
                </div>
                </div>
                <div className="room-detail">
                <div>{this.props.roomQuantity} x {this.props.bedDetail.BedName}</div>
                <div><Link to="#">Change</Link></div>
                </div>
                </div>
                <div className="person-detail-container">
                <p><i className="fa fa-male"></i> {this.props.roomQuantity} room, 2 adults</p>
                <p><i className="fa fa-users"></i> Max 2 adults, 2 children (0-5 years)</p>
                </div>
                <Link to="#">Extra low price! (non-refundable)</Link>
            </div>
        </div>
    )
}


}

const mapStateToProps = (state)=>{
    let {date} = state;
    let selectedHotel = state.bookHotel.hotelId;
    console.log(state.hotelList);
    let hotelList = Object.values(state.hotelList.hotel_details);
   
    let hotelDetail = hotelList.find(({hotel_details})=> parseInt(hotel_details.HotelID) === parseInt(selectedHotel) );
    let roomQuantity = state.bookHotel.totalRooms;
    let selectedRoomId = state.bookHotel.roomId;
    let bedDetails = Object.values(hotelDetail.hotel_details.BedDetails);
    let bedDetail = bedDetails.find((detail)=> parseInt(detail.BedID) === parseInt(selectedRoomId));
    
    return {hotelDetail,roomQuantity,bedDetail,date};
    
}

export default connect(mapStateToProps)(QuoteBookingDetail);
