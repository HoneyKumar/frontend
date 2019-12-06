import React from 'react';
import { connect } from 'react-redux';

import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

class LeftFilter extends React.Component {
    constructor(props) {
        super(props);
     
        this.state = {
            priceRangeSliderValue: { min: 2500, max: 3500 },
            distanceSliderValue: { min: 1000, max: 2500 },
        };
    }

    render() {
        let hotelOptions = [];
        if( Array.isArray( this.props.hotelList ) && ( this.props.hotelList.map.length > 0 ) )
        {
            hotelOptions = this.props.hotelList.map( (hotel, index) => <option key={index} value={ hotel.hotel_details.HotelID }>{ hotel.hotel_details.HotelName }</option> );
        }
        
        return (
            <div id="sidebar clearfix" className="sidebar">
                <div className="refine sidebarBox">
                    <h3>Refine your search</h3>
                    <div className="panel-body">
                        <form>
                            <div className="form-group">
                                <label>{ this.props.selectedCity } Hotel</label>
                                <select className="form-control">
                                    <option value="">Select Hotel</option>
                                    { hotelOptions }
                                </select>
                            </div>
                            <hr />
                            <div className="form-group">
                                <label>Price Range</label>
                                <InputRange
                                maxValue={5000}
                                minValue={500}
                                value={this.state.priceRangeSliderValue}
                                onChange={value => this.setState({ priceRangeSliderValue: value })} />
                            </div>
                            <hr />
                            <div className="form-group">
                                <label>Ratings</label>
                                <div className="star-rating"><span className="fa fa-star orange" data-rating="1"></span><span className="fa fa-star orange" data-rating="2"></span><span className="fa fa-star orange" data-rating="3"></span><span className="fa fa-star-o" data-rating="4"></span><span className="fa fa-star-o" data-rating="5"></span></div>
                                <div className="SelectRating">Select Ratings</div>
                            </div>
                            <hr />
                            <div className="form-group">
                                <label>Distance</label>
                                <InputRange
                                maxValue={5000}
                                minValue={500}
                                // formatLabel={value => `${value} km`}
                                value={this.state.distanceSliderValue}
                                onChange={value => this.setState({ distanceSliderValue: value })} />
                            </div>
                            <hr />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { selectedCity: state.selectedCity.label, hotelList: Object.values(state.hotelList.hotel_details) }
}

export default connect(mapStateToProps, {})(LeftFilter);