import { SELECT_GUEST } from '../Actions/types';

const INITIAL_STATE = {};

export default (state=INITIAL_STATE, action) =>{
    switch(action.type){
        case SELECT_GUEST :
            var guests = {...state, ...action.payload};
            console.log(action.payload);
            console.log(guests);
            return guests;
        default :
            return state;
    }
}
