import React from 'react';
import {connect} from 'react-redux';

import { bookRequest } from '../Actions';

// To use history.push
import { withRouter } from "react-router";

class QuotePriceDetails extends React.Component{

    // To handle button and check if the user is loggee-in or not. If yes book the package otherwise redirect user to login page
    handleClick = () => {
        
        // Check if terms and condition checkbox is checked
        if( !document.getElementById("term_condition").checked )
        {
            alert('Please accept the terms and conditions');
            return false;
        }

        if( !localStorage.hasOwnProperty("token") )     // User is not logged-in so redirect the user to login page
        {
            if( window.confirm('To book this package user must logged-in. \nClick OK to go to login page.') )
            {
                this.props.history.push('/login');
            }
        }
        else                                            // The user is logged-in so book the package
        {
            let user_Detail ={ fullName : this.props.userDetails.FirstName + ' ' + this.props.userDetails.LastName, email: this.props.userDetails.EmailAddress, phonenumber: this.props.userDetails.Mobile };
            let {hotel_details} = this.props.hotelDetail;
            let check_in_date = this.formatDate(this.props.dates[0]);
            let check_out_date = this.formatDate(this.props.dates[1]);
            
            let bedDetails = Object.values(hotel_details.BedDetails);
            let bedDetail = bedDetails.find((detail)=> parseInt(detail.BedID) === parseInt(this.props.selectedRoomId));

            let totalNights = hotel_details.TotalDays;
            let booking_details ={'hotelName':hotel_details.HotelName,'hotelId':hotel_details.HotelID,'bedDetail': bedDetail,'roomQuantity' : this.props.roomQuantity,'checkInDate':check_in_date,'checkOutDate' : check_out_date,'totalNights' : totalNights};
            let booking_type =1;

            let adultCount  = this.props.selectedGuests.hasOwnProperty('adult_count') ? this.props.selectedGuests.adult_count: 0;
            let childCount  = this.props.selectedGuests.hasOwnProperty('child_count') ? this.props.selectedGuests.child_count: 0;
            let infantCount = this.props.selectedGuests.hasOwnProperty('infant_count') ? this.props.selectedGuests.infant_count: 0;
            let guests = { 'adultCount': adultCount, 'childCount': childCount, 'infantCount': infantCount };

            // API call to book the package
            this.props.bookRequest(user_Detail, booking_details, booking_type, guests);
        }
    }

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
        let selectedBeds = <li>No room is selected</li>;
        let roomDetails = this.props.bookHotel.roomDetails;
        let totalReservationCharge = 0;
        if( Array.isArray(roomDetails) && ( roomDetails.length > 0 ) )
        {
            selectedBeds = roomDetails.map( (bed, index) => ( bed.bed_counts > 0 ) ? <li key={index}>{ bed.bed_counts } X { bed.bed_type }</li>: '' );

            totalReservationCharge = roomDetails.map( (bed) => ( bed.bed_total_rate > 0 ) ? ( bed.bed_total_rate ) : 0 );
            totalReservationCharge = totalReservationCharge.reduce(arraySum);
        }

        // To calculate the sum of array's element
        function arraySum(total, num) {
            return total + num;
        }

        return (
            <div className="col-lg-3">
                <div className="summary">
                    <h2>Summary</h2>
                    <div className="cost_box">
                        <label>Total Cost :</label>
                        <div className="price">&pound; { totalReservationCharge }</div>
                    </div>
                    <div className="checkbox text-danger accept">
                        <label>
                            <input type="checkbox" name="term_condition" id="term_condition" /> <u>I accept your terms & conditions</u>
                        </label>
                    </div>
                    <div className="booking-btn">
                        <button type="button" className="btn btn-success btn-width" onClick={ this.handleClick }>BOOK</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    // console.log( state.selectGuest );

    let bookHotel = state.bookHotel;
    let hotelList = Object.values(state.hotelList.hotel_details);
    let hotelDetail = hotelList.find(({hotel_details})=> parseInt(hotel_details.HotelID) === parseInt(bookHotel.hotel_id) );
    let userDetails = state.userDetails.userDetails;
    let dates = state.date;

    let selectedRoomId = state.bookHotel.roomDetails[0].BedID;

    return {
        roomDetails: state.roomDetails,
        bookHotel,
        hotelDetail,
        userDetails,
        dates,
        selectedRoomId,
        selectedGuests: state.selectGuest
    }
}

// export default connect(mapStateToProps)(QuotePriceDetails);
export default withRouter(connect(mapStateToProps, { bookRequest })(QuotePriceDetails));