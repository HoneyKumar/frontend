import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class QuoteHotelPannel extends React.Component{

    render(){
        var {hotel_details} = this.props.hotelDetail;
        let images = Object.values(hotel_details.images);
        let image_path = 'https://dev-six.usoft.co.uk/public/uploads/users/client/hotels/'+images[0].PictureName;
        let makkahImgPath = 'https://dev-six.usoft.co.uk/packages/usoft/calculator/src/Calculator/assets/images/tab-icon-two.png';

        let date1 = new Date(this.props.checkIndDate);
        let utcDate1 = date1.toUTCString();
        let checkInDate = utcDate1.split(' ').slice(0, 4).join(' ');

        let date2 = new Date(this.props.checkOutdDate);
        let utcDate2 = date2.toUTCString();
        let checkOutdDate = utcDate2.split(' ').slice(0, 4).join(' ');

        let selectedBeds = <li>No room is selected</li>;
        let roomDetails = this.props.bookHotel.roomDetails;
        if( Array.isArray(roomDetails) && ( roomDetails.length > 0 ) )
        {
            selectedBeds = roomDetails.map( (bed, index) => ( bed.bed_counts > 0 ) ? <li key={index}>{ bed.bed_counts } X { bed.BedName }</li>: '' );
        }

        // To calculate the sum of array's element
        function arraySum(total, num) {
            return total + num;
        }
        
        return (
            <React.Fragment>
                <hr/>
                <div className="search-area">
                    <div className="container-fliud">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="hpanel">
                                    <div className="panel-heading pad-left">
                                        <img src={makkahImgPath} />
                                        <span>{ this.props.selectedCity }</span>
                                    </div>
                                    <div className="panel-body">
                                        <div className="row">
                                        <div className="col-sm-4">
                                            <div className="box-detail">
                                            <div className="icon"><i className="fa fa-calendar" aria-hidden="true"></i></div>
                                            <div className="headDetail">
                                                <h3>Check in date :</h3>
                                                <p className="Date" id="InDate">{ checkInDate }</p>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="box-detail">
                                            <div className="icon"><i className="fa fa-calendar" aria-hidden="true"></i></div>
                                            <div className="headDetail">
                                                <h3>Check out date :</h3>
                                                <p className="Date" id="OutDate">{ checkOutdDate }</p>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="box-detail">
                                            <div className="icon"><i className="fa fa-calendar" aria-hidden="true"></i></div>
                                            <div className="headDetail">
                                                <h3>Guests :</h3>
                                                <p className="person" id="person">
                                                    { this.props.guests.infant_count } Adults, { this.props.guests.adult_count } Child, { this.props.guests.child_count } Infant
                                                </p>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="HotelDetail clearfix">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="hotelOverview clearfix">
                                <div className="row">
                                    <div className="col-md-4 "><a href="#"><img src={image_path} alt="hotel" className="img-responsive" /></a></div>
                                    <div className="col-md-8">
                                        <div className="overview">
                                            <h2>{ hotel_details.HotelName }</h2>
                                            <div className="star-rating">
                                                <span className="fa fa-star orange" data-rating="1"></span>
                                                <span className="fa fa-star orange" data-rating="2"></span>
                                                <span className="fa fa-star orange" data-rating="3"></span>
                                                <span className="fa fa-star-o" data-rating="4"></span>
                                                <span className="fa fa-star-o" data-rating="5"></span>
                                            </div>
                                            <p dangerouslySetInnerHTML={{__html: hotel_details.HotelDescription}}></p>
                                            <h3>Room Type</h3>
                                            <ul>
                                                {selectedBeds}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStatToProps = (state)=>{
    // console.log(state);

    let bookHotel = state.bookHotel;
    let hotelList = Object.values(state.hotelList.hotel_details);

    var hotelDetail = hotelList.find(({hotel_details})=> parseInt(hotel_details.HotelID) === parseInt(bookHotel.hotel_id) );
    return {
        selectedCity: state.selectedCity.label,
        checkIndDate: state.date[0], 
        checkOutdDate: state.date[1],
        guests: state.selectGuest,
        roomDetails: state.roomDetails,
        bookHotel,
        hotelDetail
    }
}

export default connect(mapStatToProps,null)(QuoteHotelPannel);

