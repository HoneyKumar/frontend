import React from 'react';

import { connect } from 'react-redux';

import TopSearchBar from './TopSearchBar'; 
import RecomendHotels from './RecomendedHotels';
import {Link} from 'react-router-dom';
import {searchHotels} from '../Actions';

class HotelList extends React.Component{

   

    handleSubmit =(e)=>{
        e.preventDefault();
        if(this.handleValidation()){
            this.props.searchHotels();
        }
    }

    handleOnCLick =(e)=>{
        e.preventDefault();
        let hotel_id = e.currentTarget.id;
        this.props.history.push('hotel/detail/'+hotel_id);
    }
  


    renderList(){
        return this.props.hotelList.map(hotel=>{
            let {hotel_details} = hotel;
            let bed_details = Object.values(hotel_details.BedDetails);
            let images = Object.values(hotel_details.images);
            let image_path = 'http://dev-three.usoft.co.uk/public/uploads/users/client/hotels/';
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
                                    <ul>
                                        <li><Link to="#">Excellent location</Link></li>
                                        <li><Link to="#">City center</Link></li>
                                        <li className="active"><Link to="#">Breakfast</Link></li>
                                        <li className="active"><Link to="#">Free cancellation</Link></li>
                                        <li className="active"><Link to="#">Pay later</Link></li>
                                    </ul>
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
                    <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
                        <div className="hotel-listing-wrap">
                           <ul>
                               {this.renderList()}
                            </ul>
                        </div>
                    </div>
                </div>
                   
            </React.Fragment>
        );
    }

    

}

const mapStateToProps = (state) =>{
  
    return {hotelList:Object.values(state.hotelList)}
}
export default connect(mapStateToProps,{searchHotels})(HotelList);

