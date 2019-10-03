import {SEARCH_HOTELS} from '../Actions/types'; 

export default (state={},action)=>{
    switch(action.type){
        case SEARCH_HOTELS:
            return action.payload;
        default:
            return state;
    }
}