import {SET_ROOM_RATES} from '../Actions/types';

const INITIAL_STATE = {}

export default (state=INITIAL_STATE,action) =>{
    switch(action.type){
        case SET_ROOM_RATES :
            let selectedRooms = { ...state, ...action.payload };
            return selectedRooms;
        default :
            return state;
    }
}
