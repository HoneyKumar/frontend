import {HOTEL_FACILITES} from '../Actions/types';

export default (state=0,action) =>{
    switch(action.type ){
        case HOTEL_FACILITES:
        return action.payload
        default :
        return state;
    }

}