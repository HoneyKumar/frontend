import { combineReducers } from 'redux';
import citiesReducer from './citiesReducer';
import checkInCheckOutReducer from './checkInCheckOutReducer';
import selectCityReducer from './selectCityReducer';
import searchHotelReducer from './searchHotelReducer';
import bookHotel from './bookHotel';
import checkBookingStatus from './checkBookingStatus';
import signInUser from './signInUser';
import hotelFacilities from './hotelFacilities';

export default combineReducers({
    cities : citiesReducer,
    date : checkInCheckOutReducer,
    selectedCity : selectCityReducer,
    hotelList : searchHotelReducer,
    bookHotel : bookHotel,
    isBooked : checkBookingStatus,
    userDetails : signInUser,
    hotelFacilities : hotelFacilities
});