import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import { searchHotels } from '../Actions';
import { selectRoom } from '../Actions';
import { setRoomRates } from '../Actions';
import { reserveRoom } from '../Actions';

// To use history.push
import { withRouter } from "react-router";

class RecomendedHotels extends React.Component{

    constructor() {
        super();

        this.state = {
            hotelSelectedBeds: {},
            hotelSelectedBedRates: {}
        }
    }
    
    handleOnCLick =(e) => {
        e.preventDefault();
        let hotel_id = e.currentTarget.id;
        this.props.history.push('hotel/detail/'+hotel_id);
    }
    
    hotelFacilityList = (list)=>{
        var i =0
        return list.map(list_det=>{
           
            return (
                    <li key={i++}><Link to="#">{list_det}</Link></li>
                );        
        })
    }

    renderPagination = () =>{
        let i =1;
        return this.props.pagination.map(page_det =>{
            return(
                <li className="page-item" key={i}><Link to="#" className="page-link" data-offset={page_det.offset} data-limit={page_det.limit} onClick={this.handleSearch}>{i++}</Link></li>
            )
        })
    }

    handleSearch =(e)=>{
        e.preventDefault();
        let offset = e.target.dataset.offset; //used for pagination
        let limit = e.target.dataset.limit; // used for pagination
        let check_in_date = this.formatDate(this.props.date[0]);
        let check_out_date = this.formatDate(this.props.date[1]);
        
        this.props.searchHotels(check_in_date,check_out_date,this.props.cityId,offset,limit);
    }

    rawMarkup(htmlContent) {
        var rawMarkup = htmlContent
        return { __html: rawMarkup };
    }

    // To handle room selection
    handleBedSelection = (HotelId, bedId, operationType, currency, rate) => {
        let existingBedCount = parseInt(document.getElementsByName("bedtype["+ HotelId +"]["+ bedId +"]")[0].value);
        let objkey = 'hotel-' + HotelId + '_' + 'bed-' + bedId;

        let newBedCount = null;
        if( operationType === '+' )
        {
            newBedCount = existingBedCount + 1;
        }
        else
        {
            newBedCount = existingBedCount - 1;
        }

        // key = hotel-11_bed-67, value: 0
        let selectedRoom = { [objkey]: newBedCount };
        
        // Merge the new state with the existing state
        let beds = {...this.state.hotelSelectedBeds, ...selectedRoom};

        // Update the state
        this.setState({ hotelSelectedBeds: beds });

        // Dispatch the action
        this.props.selectRoom( beds );

        // hotelSelectedBedRates
        let totalRoomCharge = newBedCount * rate;
        let roomRatesObj = { curency: currency, charges: totalRoomCharge };
        let selectedRoomRates = { [objkey]: roomRatesObj };

        // Dispatch the action
        this.props.setRoomRates(selectedRoomRates);
    }

    redirectToQuoteDetails = (hotelId) => {
        let hotelBeds = document.getElementsByClassName('hotel_bed_' + hotelId);

        let hotelBedCounts = [];
        for( let i=0; i<hotelBeds.length; i++ )
        {
            hotelBedCounts.push( parseInt( hotelBeds[i].value ) );
        }

        // Check if any one room type is selected or not
        const isAllZero = hotelBedCounts.every(item => item === 0);
        if( isAllZero )
        {
            alert('Please select atleast one room');
            return false;
        }

        // Check if Guest type is selected
        const adultCount = document.getElementsByName('adult_count')[0].value;
        const childCount = document.getElementsByName('child_count')[0].value;
        const infantCount = document.getElementsByName('infant_count')[0].value;

        if( adultCount == 0 && childCount == 0 && infantCount == 0 )
        {
            alert('Please select atleast one guest');
            return false;
        }

        // Calculate the selected hotel rooms count and its toltal price
        let selectedRooms = {...this.props.roomSelectedOption};
        // let selectedRoomKeys = Object.keys(selectedRooms);
        
        let roomDetails = [];
        for( let key in selectedRooms )
        {
            let parts = key.split("_");
            
            if( 'hotel-' + hotelId === parts[0] )
            {
                let beds = parts[1].split('-');
                let individualBedRate = document.getElementsByName("bedtype["+ hotelId +"]["+ beds[1] +"]")[0].getAttribute('data-rate');
                let individualBedType = document.getElementsByName("bedtype["+ hotelId +"]["+ beds[1] +"]")[0].getAttribute('data-bedtype');
                let BedCurrencyType   = document.getElementsByName("bedtype["+ hotelId +"]["+ beds[1] +"]")[0].getAttribute('data-currency');

                roomDetails.push({ 'BedID': beds[1], 'BedName': individualBedType, 'bed_counts': selectedRooms[key], 'rate': individualBedRate, 'bed_total_rate': ( selectedRooms[key] * individualBedRate ), 'SellCurrency': BedCurrencyType });
            }
        }

        let selectedRoomDetails = { 'hotel_id': hotelId, roomDetails };

        // Dispatch the room reservation action
        this.props.reserveRoom(selectedRoomDetails);

        // Redirect to quote details
        this.props.history.push('quote-details');
    } 

    renderList(){
        return this.props.hotelList.map(hotel=>{
            
            let {hotel_details} = hotel;
          
            let bed_details = Object.values(hotel_details.BedDetails);
            let room_id = this.props.roomSelectedOption.value;
            //console.log(room_id);
            let room_type = bed_details.find((element)=>{
                //console.log(element);
                return parseInt(room_id) === parseInt(element.BedID);
              
            });
           
            {/* Hotel images */}
            let images = Object.values(hotel_details.images);
            let image_path = 'https://dev-six.usoft.co.uk/public/uploads/users/client/hotels/'; 

            let hotelImages = [];
            if( ( Array.isArray(images) ) && ( images.length > 0 ) )
            {
                // image_path = image_path+images[0].PictureName;
                hotelImages = images.map( ( image, index ) => image_path + image.PictureName );
            }

            {/* Bed types */}
            let bedTypes = Object.values(hotel_details.BedDetails);
            let beds = [];
            if( Array.isArray( bedTypes ) && ( bedTypes.length > 0 ) )
            {
                // this.state.hotelSelectedBeds
                beds = bedTypes.map( ( bed, index ) => <div key={ index } className="row">
                        <div className="col-sm-2" style={{ color: '#5b677a', fontWeight: '600' }}>{ bed.BedName }</div>
                        <div className="col-sm-4">
                            <div className="form-group">
                                <div className="input-group">
                                    <span className="input-group-btn">
                                        <button disabled={ ( ( this.props.roomSelectedOption.hasOwnProperty('hotel-' + hotel_details.HotelID + '_bed-' + bed.BedID ) ) && ( this.props.roomSelectedOption['hotel-' + hotel_details.HotelID + '_bed-' + bed.BedID] > 0 ) ) ? false: true } onClick={ () => this.handleBedSelection(hotel_details.HotelID, bed.BedID, "-", bed.SellCurrency, bed.rate) } type="button" className="btn btn-default btn-number"><span className="glyphicon glyphicon-minus"></span></button>
                                    </span>
                                    <input type="text" data-currency={bed.SellCurrency} data-bedtype={ bed.BedName } data-rate={bed.rate} className={ 'form-control input-number' + ' hotel_bed_' +  hotel_details.HotelID } placeholder={ bed.BedName } name={`bedtype[${hotel_details.HotelID}][${bed.BedID}]`} disabled value={ ( this.props.roomSelectedOption.hasOwnProperty('hotel-' + hotel_details.HotelID + '_bed-' + bed.BedID) ) ? this.props.roomSelectedOption['hotel-' + hotel_details.HotelID + '_bed-' + bed.BedID]: 0 } />
                                    <span className="input-group-btn">
                                        <button onClick={ () => this.handleBedSelection(hotel_details.HotelID, bed.BedID, "+", bed.SellCurrency, bed.rate) } type="button" className="btn btn-default btn-number"><span className="glyphicon glyphicon-plus"></span></button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div style={{ color: '#478bca', fontWeight: '600' }} className="col-sm-6" dangerouslySetInnerHTML={{__html: bed.SellCurrency + ' ' +  bed.rate.toFixed(2) }}></div>
                    </div>
                )
            }

            return (
                <div key={hotel_details.HotelID} className="HotelBooking">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="MainImage"><img src={ hotelImages[0] } className="img-responsive" /></div>
                            <ul className="thumb">
                                { hotelImages.map( ( imgPath, index ) => ( <li key={ index }><a href="#"><img src={ imgPath } className="img-responsive" /></a></li> ) ) }
                            </ul>
                        </div>
                        <div className="col-md-8">
                            <div className="bookingArea">
                                <h2>{hotel_details.HotelName}
                                    <div className="star-rating"><span className="fa fa-map-marker orange-txt marker"></span><span className="fa fa-star blue-txt fa-1x" data-rating="1"></span><span className="fa fa-star blue-txt fa-1x" data-rating="2"></span><span className="fa fa-star blue-txt fa-1x" data-rating="3"></span><span className="fa fa-star-o fa-1x" data-rating="4"></span><span className="fa fa-star-o fa-1x" data-rating="5"></span></div>
                                </h2>
                                {/* Rendering raw html */}
                                <p dangerouslySetInnerHTML={{__html: hotel_details.HotelDescription }}></p>

                                <div className="Selection">
                                    <h3><span><img src="images/bed-single.png" alt="" className="icon-pad" /></span>Room Type</h3>

                                    {/* bed types here */}
                                    { beds }

                                    <div className="row">
                                        <div className="col-sm-8"></div>
                                        <div className="col-sm-4">
                                            <button type="button" className="btn btn-danger text-uppercase btn-lg btn-select" onClick={ () => this.redirectToQuoteDetails(hotel_details.HotelID) }>Select</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        });
    }

    render(){
        return (
            <React.Fragment>
                {/* Prefix 0 with the number if it is a single digit number */}
                <h2 className="title">
                    <i className="fa fa-hospital-o icon-pad gray-txt" aria-hidden="true"></i>{ ('0' + this.props.hotelList.length ).slice(-2) } Hotels Found
                </h2>

                {/* Hotels listing */}
                { this.renderList() }

                <div className="row">
                    <div className="col-xs-12 text-center">
                        <nav aria-label="Page navigation">
                            {
                                this.props.pagination.length > 0 && (
                                    <ul className="pagination">
                                    { this.renderPagination() }
                                   </ul>
                                )
                            }
                        </nav>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) =>{
    // console.log(state.selectedRoom);

    return { hotelList:Object.values(state.hotelList.hotel_details), pagination : Object.values(state.hotelList.pagination), date : state.date, cityId:state.selectedCity.value, roomSelectedOption: state.selectedRoom }
}
export default withRouter(connect(mapStateToProps, { searchHotels, selectRoom, setRoomRates, reserveRoom })(RecomendedHotels));