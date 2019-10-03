export default (state= {},action)=>{
    switch(action.type){
        case 'FETCH_CITIES' :
            
            return action.payload.data.response.data;
            default :
            return state;
    }

   
}