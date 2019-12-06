import { combineReducers } from 'redux';
import citiesReducer from './citiesReducer';
import checkInCheckOutReducer from './checkInCheckOutReducer';
import selectCityReducer from './selectCityReducer';
import searchHotelReducer from './searchHotelReducer';
import bookHotel from './bookHotel';
import checkBookingStatus from './checkBookingStatus';
import signInUser from './signInUser';
import hotelFacilities from './hotelFacilities';
import fetchRooms from './fetchRooms';
import selectRooms from './selectRoom';
import setRoomRates from './setRoomRates';
import selectGuest from './selectGuest';

export default combineReducers({
    cities : citiesReducer,
    date : checkInCheckOutReducer,
    selectedCity : selectCityReducer,
    hotelList : searchHotelReducer,
    bookHotel : bookHotel,
    isBooked : checkBookingStatus,
    userDetails : signInUser,
    hotelFacilities : hotelFacilities,
    rooms : fetchRooms,
    selectedRoom : selectRooms,
    selectGuest: selectGuest,
    setRoomRates: setRoomRates
});