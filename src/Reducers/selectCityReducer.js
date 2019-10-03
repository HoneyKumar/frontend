import {SELECT_CITY} from '../Actions/types';

const INITIAL_STATE = {value : '0', label: 'Select City'}

export default (state=INITIAL_STATE,action) =>{
    switch(action.type){
        case SELECT_CITY :
            return action.payload;
        default :
            return state;
    }
}
