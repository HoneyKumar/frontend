import {BOOK_HOTELS} from '../Actions/types';

const INITIAL_STATE = {'hotelId' : 0, 'roomId' : 0,'totalRooms' : 0};
export default (state=INITIAL_STATE,action) =>{
    switch(action.type ){
        case BOOK_HOTELS:
        return action.payload
        default :
        return state;
    }

}