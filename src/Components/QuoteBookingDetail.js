import React from 'react';
import QuotePriceDetails from './QuotePriceDetails';
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
    // var {hotel_details} = this.props.hotelDetail;
    // let check_in_date = this.formatDate(this.props.date[0]);
    // let check_out_date = this.formatDate(this.props.date[1]);
    
    return (
        <React.Fragment>
            <hr/>
            <div className="detailTransport clearfix">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="transport">
                            <div className="notice">
                                <div className="panel-body">
                                    <h4 className="text-success">Important</h4>
                                    <p>
                                        Ministry of Religious Affairs & Interfaith Harmony has arranged Hajj Training for the Successful Hajj Applicants. 
                                        This is Pre-Ramzan Schedule, Hajj Training for remaining District / Tehsil will be arranged after Ramzan. 
                                        Intimation Letter to concerned Successful Hajj Applicants has been despatched. 
                                        All the Successful applicants are requested to attend compulsory Hajj Training as per Schedule remaining District / Tehsil will be arranged after Ramzan. 
                                        Intimation Letter to concerned Successful Hajj Applicants has been despatched. All the Successful applicants are requested to attend compulsory Hajj.
                                    </p>
                                    <div>
                                        <button type="button" className="btn btn-danger text-uppercase">See full terms & conditions</button>
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </div>

                    <QuotePriceDetails />

                </div>
            </div>
        </React.Fragment>
    )
}


}

const mapStateToProps = (state)=>{
    let {date} = state;
    let selectedHotel = state.bookHotel.hotelId;
    let hotelList = Object.values(state.hotelList.hotel_details);
   
    let hotelDetail = hotelList.find(({hotel_details})=> parseInt(hotel_details.HotelID) === parseInt(selectedHotel) );
    let roomQuantity = state.bookHotel.totalRooms;
    let selectedRoomId = state.bookHotel.roomId;
    // let bedDetails = Object.values(hotelDetail.hotel_details.BedDetails);
    // let bedDetail = bedDetails.find((detail)=> parseInt(detail.BedID) === parseInt(selectedRoomId));
    
    return {hotelDetail,roomQuantity,date};
    
}

export default connect(mapStateToProps)(QuoteBookingDetail);
