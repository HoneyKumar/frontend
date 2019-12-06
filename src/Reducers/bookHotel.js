import {BOOK_HOTELS} from '../Actions/types';

const INITIAL_STATE = {};
export default (state=INITIAL_STATE,action) =>{
    switch(action.type ){
        case BOOK_HOTELS:
        return {...state, ...action.payload}
        default :
        return state;
    }

}