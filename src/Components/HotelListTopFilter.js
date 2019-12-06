import React from 'react';
import { connect } from 'react-redux';

import {selectGuest} from '../Actions';

class HotelListTopFilter extends React.Component {

    constructor() {
        super();
    }

    // To handle guest selection
    handleGuestSelection = (event) => {
        this.props.selectGuest({ [event.target.name]: event.target.value });
    }

    render() {
        let makkahImgPath = 'https://dev-six.usoft.co.uk/packages/usoft/calculator/src/Calculator/assets/images/tab-icon-two.png';

        let date1 = new Date(this.props.checkIndDate);
        let utcDate1 = date1.toUTCString();
        let checkInDate = utcDate1.split(' ').slice(0, 4).join(' ');

        let date2 = new Date(this.props.checkOutdDate);
        let utcDate2 = date2.toUTCString();
        let checkOutdDate = utcDate2.split(' ').slice(0, 4).join(' ');

        return (
        <React.Fragment>
            <div className="SortingHeader clearfix">
                <div className="sortingGroup">
                    <label>Sort by:</label>
                    <ul>
                        <li><a href="#">Star<i className="fa fa-sort-amount-desc"></i></a></li>
                        <li><a href="#">Distance<i className="fa fa-sort-amount-desc"></i></a></li>
                        <li><a href="#">Price<i className="fa fa-sort-amount-desc"></i></a></li>
                    </ul>
                </div>
                <div className="SearchBox">
                    <div id="">
                        <div className="input-group stylish-input-group">
                            <input type="text" className="form-control"  placeholder="Change Search" />
                            <span className="input-group-addon">
                                <button type="submit"><span className="glyphicon glyphicon-search"></span></button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="innerContainer clearfix">
                <div className="CheckHeader clearfix">
                    <div className="checkbox checkbox-success checkbox-inline">
                        <input id="checkbox01" type="checkbox" />
                        <label htmlFor="checkbox01">Check In / Check Out</label>
                    </div>
                    <div className="checkbox checkbox-success checkbox-inline">
                        <input id="checkbox02" type="checkbox" />
                        <label htmlFor="checkbox02">Guests</label>
                    </div>
                    <div className="checkbox checkbox-success checkbox-inline">
                        <input id="checkbox03" type="checkbox" />
                        <label htmlFor="checkbox03">Makkah Hotel</label>
                    </div>
                    <div className="checkbox checkbox-success checkbox-inline">
                        <input id="checkbox04" type="checkbox" />
                        <label htmlFor="checkbox04">Madinah Hotel</label>
                    </div>
                </div>
                <div className="tab-container clearfix">
                    <ul className="nav nav-tabs" role="tablist">
                        <li role="presentation" className="active">
                            <a href="#Makkah" aria-controls="Makkah" role="tab" data-toggle="tab">
                                <span><img src={makkahImgPath} /></span>
                                { this.props.selectedCity.label }
                            </a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div role="tabpanel" className="tab-pane active" id="Makkah">
                            <div className="panel-body panel-tab-body">
                                <div className="row">
                                    <div className="col-sm-6 col-md-6 col-lg-6">
                                        <div className="customerTab">
                                            <div className="box-detail">
                                                <div className="icon"><i className="fa fa-calendar" aria-hidden="true"></i></div>
                                                <div className="headDetail">
                                                    <h3>Check out date :</h3>
                                                        <p className="Date" id="OutDate">{ checkInDate }</p>
                                                </div>
                                            </div>
                                            <div className="box-detail">
                                                <div className="icon"><i className="fa fa-calendar" aria-hidden="true"></i></div>
                                                <div className="headDetail">
                                                    <h3>Check out date :</h3>
                                                    <p className="Date" id="OutDate">{ checkOutdDate }</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6">
                                        <div className="customerTab">
                                            <div className="box-detail">
                                                <div className="icon"><i className="fa fa-calendar" aria-hidden="true"></i></div>
                                                <div className="headDetail">
                                                    <h3>GUEST</h3>
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <label>Adult</label>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <select name="adult_count" onChange={ this.handleGuestSelection } value={ this.props.selectedGuest.adult_count }>
                                                                <option value="0">0</option>
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                                <option value="4">4</option>
                                                                <option value="5">5</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <label>Child</label>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <select name="child_count" onChange={ this.handleGuestSelection } value={ this.props.selectedGuest.child_count }>
                                                                <option value="0">0</option>
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                                <option value="4">4</option>
                                                                <option value="5">5</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <label>Infant</label>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <select name="infant_count" onChange={ this.handleGuestSelection } value={ this.props.selectedGuest.infant_count }>
                                                                <option value="0">0</option>
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                                <option value="4">4</option>
                                                                <option value="5">5</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return { selectedCity: state.selectedCity, checkIndDate: state.date[0], checkOutdDate: state.date[1], selectedGuest: state.selectGuest }
}
export default connect(mapStateToProps, {selectGuest})(HotelListTopFilter);