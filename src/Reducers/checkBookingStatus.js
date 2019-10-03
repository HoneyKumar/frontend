import {BOOKING_CONFIRMED} from '../Actions/types';

export default (state=0,action) =>{
    switch(action.type ){
        case BOOKING_CONFIRMED:
        return action.payload
        default :
        return state;
    }

}