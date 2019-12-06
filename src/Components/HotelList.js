import React from 'react';

import { connect } from 'react-redux';
import {searchHotels} from '../Actions';

import TopSearchBar from './TopSearchBar';
import HotelListLeftFilter from './HotelListLeftFilter';
import HotelListTopFilter from './HotelListTopFilter';
import RecomendHotels from './RecomendedHotels';

class HotelList extends React.Component{
    render(){
        return(
            <React.Fragment>
                {/* Top search bar */}
                <TopSearchBar />
                
                {/* Hotel list left filter */}
                <HotelListLeftFilter />

                {/* Hotel list top filter */}
                <section className="content result clearfix">
                    <HotelListTopFilter />

                    {/* Recomend Hotel list */}
                    <RecomendHotels />
                </section>

            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) =>{
    return {hotelList:Object.values(state.hotelList.hotel_details), pagination : Object.values(state.hotelList.pagination),date : state.date,cityId:state.selectedCity.value,roomSelectedOption :state.selectedRoom }
}
export default connect(mapStateToProps,{searchHotels})(HotelList);