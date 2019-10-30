import React from 'react';

import { connect } from 'react-redux';

import TopSearchBar from './TopSearchBar'; 
import RecomendHotels from './RecomendedHotels';
import {Link} from 'react-router-dom';
import {searchHotels} from '../Actions';
import HotelFacilities from './HotelFacilities';

class HotelList extends React.Component{

   

  

    handleOnCLick =(e)=>{
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

    formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }


    renderList(){
        return this.props.hotelList.map(hotel=>{
            
            let {hotel_details} = hotel;
          
            let bed_details = Object.values(hotel_details.BedDetails);
            let images = Object.values(hotel_details.images);
            let image_path = 'https://dev-six.usoft.co.uk/public/uploads/users/client/hotels/';
            let hotel_facilities = Object.values(hotel_details.HotelFacilities); 
            if(images.length > 0){
                image_path=   image_path+images[0].PictureName;
            }
            
           
            return (
                <li  key={hotel_details.HotelID} >
                                <div className="hotel-listing-list" id={hotel_details.HotelID} onClick={this.handleOnCLick}>
                                <figure><img src={image_path} alt="" /></figure>
                                <div className="hotel-listing-infobox">
                                    <div className="hotel-listing-name">{hotel_details.HotelName}</div>
                                    <Link to="#" className="hotel-listing-location">
                                    <i className="fa fa-map-marker" aria-hidden="true"></i>{hotel_details.Address}</Link>
                                    <div className="hotel-listing-feedback">
                                    
                                        {
                                            hotel_facilities.length > 0 && (
                                                <ul>
                                                    {this.hotelFacilityList(hotel_facilities)}
                                                </ul>
                                            )
                                        }
                                       
                                    
                                    </div>
                                    <div className="recommend-guest"><i className="fa fa-users" aria-hidden="true"></i> Recommended by 90% of guests</div>
                                </div>
                                <div className="hotel-listing-PriceAndReview">
                                    <div className="hotel-review-wrapper">
                                    <div className="hotel-review-details">
                                        <div className="hotel-review-text">Very good</div>
                                        <div className="hotel-review-count">1,437 <span>reviews</span></div>
                                    </div>
                                    <div className="hotel-review-score">7.7</div>
                                    </div>

                                    <div className="PriceAndReview-price-wrapper">
                                    <div className="price-bags-col">Last minute price drop!</div>
                                    <div className="PriceAndReview-priceper">Price per night as low as</div>
                                    { bed_details.length > 0 && (
                                        <div className="PriceAndReview-price-box"><span>{bed_details[0]['SellCurrency'] === '&pound;' ? '£' : bed_details[0]['SellCurrency']}</span>{bed_details[0]['rate'] }</div>
                                    )}
                                    
                                    </div>
                                </div>
                                </div>
                                </li>
            )
        });
    }
  

    render(){
        
        
         
        return(
            <React.Fragment>
                <TopSearchBar />
                <div className="container">
                    <RecomendHotels />
                    <HotelFacilities />
                    <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
                        <div className="hotel-listing-wrap">
                           <ul>
                               {this.renderList()}
                            </ul>
                        </div>
                        <nav aria-label="Page navigation example">
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
        );
    }

    

}

const mapStateToProps = (state) =>{
   

    return {hotelList:Object.values(state.hotelList.hotel_details), pagination : Object.values(state.hotelList.pagination),date : state.date,cityId:state.selectedCity.value }
}
export default connect(mapStateToProps,{searchHotels})(HotelList);

