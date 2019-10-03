export default (state='',action) =>{
    switch(action.type ){
        case 'SELECT_CHECKIN_CHECKOUT_DATE':
        return action.payload
        default :
        return state;
    }

}