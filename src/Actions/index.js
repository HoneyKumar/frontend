import usoft from '../Components/apis/usoft';
import history from '../history';
import {FETCH_CITIES,SELECT_CHECKIN_CHECKOUT_DATE,SELECT_CITY,SEARCH_HOTELS,BOOK_HOTELS,BOOKING_CONFIRMED} from './types';
// Action Creator
export const fetchCities = () =>{
    // Return An Action
    
    return async function(dispatch,getState){
        let response = await usoft.get('/cities');
        
        dispatch({ type : FETCH_CITIES, payload : response})
       
    }
    

}
// get date 

export const selectDate = (date) =>{
    return {
        type : SELECT_CHECKIN_CHECKOUT_DATE,
        payload : date
    }

}

// select user selected city 

export const selectCity = (cityDetails={}) =>{
    return {
        type : SELECT_CITY,
        payload : cityDetails
    }
}

// search hotel based on city and check in check out date

export const searchHotels =(checkInDate,checkOutDate,cityId)=>{

    return async function(dispatch,getState){
        let hotels = await usoft.get('/hotels',{
            params:{
                check_in_date : checkInDate,
                check_out_date :checkOutDate,
                city_id : cityId,
                fields : 'images'
            }
        });

        dispatch({ type : SEARCH_HOTELS, payload : hotels.data.response.data});
        history.push('/hotel-list');
    }

}

export const reserveRoom = (hotelId, roomId, totalRooms)=>{
  
    let selectedHotelDetails ={'hotelId' : hotelId, 'roomId' : roomId,'totalRooms' : totalRooms}
    history.push('/quote-details')
    return {
        type: BOOK_HOTELS,
        payload : selectedHotelDetails
    }
    
}

export const bookRequest = (userDetails,hotelDetails,bookingType)=>{

   return async function(dispatch){
       let status = 0;
       await usoft.post('/hotel-booking-confirmation',{
           params :{
               userDetails : userDetails,
               hotelDetails : hotelDetails,
               bookingType : bookingType
           }
       }).then(() => {
        status = 1
        }).catch(function (error) {
            // handle error
            status =0;
          });
          dispatch({ type : BOOKING_CONFIRMED, payload : status});
          history.push('/booking-confirmation')
   }
}


// get customer name









