import usoft from '../Components/apis/usoft';
import history from '../history';
import { FETCH_CITIES, SELECT_CHECKIN_CHECKOUT_DATE, SELECT_CITY, SEARCH_HOTELS, BOOK_HOTELS, BOOKING_CONFIRMED, SIGN_IN_USER, HOTEL_FACILITES, FETCH_ROOMS, SELECT_ROOM, SELECT_GUEST, SET_ROOM_RATES } from './types';
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

export const searchHotels =(checkInDate,checkOutDate,cityId,offset=0,limit=4,hotelStars=null,accommodationType=null,facilityDetails=[],roomId=null)=>{
   
    return async function(dispatch,getState){
        var params = {};
        params.check_in_date = checkInDate;
        params.check_out_date =  checkOutDate;
        params.city_id = cityId;
        params.offset = offset;
        params.limit = limit;
        if(hotelStars){
            params.hotel_stars = hotelStars;
        }
        if(accommodationType){
            params.accommodation_type = accommodationType;
        }
        if(facilityDetails.length > 0){
            params.facility_details = facilityDetails;
        }
        if(roomId){
            params.bed_id = roomId;
        }
        let hotels = await usoft.get('/hotels',{
            params
        });

        dispatch({ type : SEARCH_HOTELS, payload : hotels.data.response.data});
        history.push('/hotel-list');
    }

}

export const reserveRoom = (hotelDetails)=>{
    return {
        type: BOOK_HOTELS,
        payload : hotelDetails
    }
    
}

export const bookRequest = (userDetails, hotelDetails, bookingType, guests)=>{
   return async function(dispatch){
       let status = 0;
       await usoft.post('/hotel-booking-confirmation',{
           params :{
               userDetails : userDetails,
               hotelDetails : hotelDetails,
               bookingType : bookingType,
               guests: guests
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

export const signInAction = (email,password)=>{
    return async function(dispatch,getState){
        await usoft.post('/authenticate',
             {
                email_address : email,
                password : password
            }
        ).then((response)=>{
            if(response.data.token !== ''){
                localStorage.setItem("token", response.data.token);
                dispatch({ type: SIGN_IN_USER, payload:response.data.user_details})
            }
        }).catch(function (erro){

        });
        
        history.push('/');
    }
}

export const fetchHotelFacilities = (hotel_id=null)=>{
    return async function (dispatch){
        await usoft.get('/hotels-facilities').then((response)=>{
           
            dispatch({ type: HOTEL_FACILITES, payload:response.data.response.data})
        }).catch(function(error){

        });
    }
}

// Action Creator
export const fetchRooms = () =>{
    // Return An Action
    
    return async function(dispatch){
        // fetch rooms
        await usoft.get('/rooms').then((response)=>{
          
            dispatch({ type: FETCH_ROOMS, payload:response.data.response.data})
        }).catch(function(error){

        });

    }
    

}

// set the selected room (beds)
export const selectRoom = (roomDetails={}) => {
    return {
        type : SELECT_ROOM,
        payload : roomDetails
    }
}

// set the selected room (beds) rates
export const setRoomRates = (roomRateDetails={}) => {
    return {
        type : SET_ROOM_RATES,
        payload : roomRateDetails
    }
}

// set the selected guest
export const selectGuest = (guest={}) => {
    // console.log('selectGuest action is called here');
    return {
        type : SELECT_GUEST,
        payload : guest
    }
}