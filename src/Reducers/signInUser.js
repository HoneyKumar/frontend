import {SIGN_IN_USER} from '../Actions/types';
const INITIAL_STATE = {isLogin : false,userDetails : {}};
export default (state=INITIAL_STATE,action) =>{
    switch(action.type ){
        case SIGN_IN_USER:
            return {...state, userDetails: action.payload,isLogin : true}
       
        default :
        return state;
    }

}