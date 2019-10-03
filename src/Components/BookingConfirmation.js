import React from 'react';
import{connect} from 'react-redux';

class BookingConfirmation extends React.Component{

    render(){
        return(
            <div className="container">
             { this.props.isBooked > 0  ? (
                 <span>
                     Your Booking Is done please check your email
                </span>
             ) : (
                <span>
                    We can not process booking 
                </span>
             )}   
            </div>
        )
    }

}


const mapStateToProps = (state)=>{
    return {isBooked :  state.isBooked}
}

export default connect(mapStateToProps,null)(BookingConfirmation)