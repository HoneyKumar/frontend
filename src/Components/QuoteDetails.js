import React from 'react';
import QuoteTopBar from './QuoteTopBar';
import CustomerDetailForm from './CustomerDetailForm';
import QuoteHotelPannel from './QuoteHotelPannel';
import {connect} from 'react-redux';
import QuoteBookingDetail from './QuoteBookingDetail';
import QuotePriceDetails from './QuotePriceDetails';
import './css/templates/default_template/css/quote-details.css';



class QuoteDetails extends React.Component{

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
                        <QuoteTopBar />
                        <CustomerDetailForm />
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                        <QuoteHotelPannel />
                        <QuoteBookingDetail />
                        <QuotePriceDetails />
                    </div>
                </div>
            </div>
        )
    }
}



export default connect(null,null)(QuoteDetails);