import React from 'react';
import QuoteTopBar from './QuoteTopBar';
import CustomerDetailForm from './CustomerDetailForm';
import QuoteHotelPannel from './QuoteHotelPannel';
import {connect} from 'react-redux';
import QuoteBookingDetail from './QuoteBookingDetail';

import './css/templates/default_template/css/quote-details.css';



class QuoteDetails extends React.Component{

    render(){
        return (
            <React.Fragment>
                <div className="clearfix"></div>
                <section className="content enquery">
                    {/* Top bar */}
                    <QuoteTopBar />

                    {/* City details bar */}
                    <QuoteHotelPannel />

                    {/* Booking details */}
                    <QuoteBookingDetail />
                </section>
            </React.Fragment>
        )
    }
}



export default connect(null,null)(QuoteDetails);