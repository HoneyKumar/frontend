import {SELECT_ROOM} from '../Actions/types';

const INITIAL_STATE = {}

export default (state=INITIAL_STATE,action) =>{
    switch(action.type){
        case SELECT_ROOM :
            let selectedRooms = { ...state, ...action.payload };
            return selectedRooms;
        default :
            return state;
    }
}
