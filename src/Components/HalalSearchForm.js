import React from 'react';

import Select from 'react-select';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import { connect } from 'react-redux';
import {fetchCities,selectDate,selectCity,searchHotels,fetchRooms,selectRoom} from '../Actions';
import './css/templates/default_template/css/date-picker.css';

class HalalSearchForm extends React.Component{

    constructor(props) {
        super(props);

        // Don't call this.setState() here!
        this.state = { 
            cities: {},
            rooms: {},
            selectedOption : {value : '0', label: 'Select City'}, 
            formErrors: {city: '', date: ''},
            date:'',
            hotelList : {} ,
            displayhotelList : false,
            isLoading: false,
            roomSelectedOption : {value : '0', label : 'Select Room Type'},
            queryStringParams: { city: '', datefrom: '', dateto: '', room: '' }
        };
    }

    componentDidMount(){
        this.props.fetchCities();
        this.props.fetchRooms();
        this.props.selectDate([new Date(), new Date()]);

        // Create the cities array
        const options = Array.from(this.props.cities).reduce((option,val)=>{
            let arr = {value: val.CityID, label: val.CityName };
            option = [...option,arr];
            return option;
        }, [{value : 'Select City', label: 'Select City'}]);
        // Set the state
        this.setState({ cities: options });

        // Create the rooms array
        const roomOptions = Array.from(this.props.rooms).reduce((option,val)=>{
            let arr = {value : val.BedID, label : val.BedName},
            options = [...option,arr];
            return options;
        },[{value : 'Select Room Type', label: 'Select Room Type'}]);
        // Set the state
        this.setState({ rooms: roomOptions });

        // Read the query string and parse it
        const queryString = require('query-string');
        const queryStringParams = queryString.parse(window.location.search);

        let queryParams = {
            'city': ('city' in queryStringParams) ? queryStringParams.city: '', 
            'datefrom': ('datefrom' in queryStringParams) ? queryStringParams.datefrom: '', 
            'dateto': ('dateto' in queryStringParams) ? queryStringParams.dateto: '', 
            'roomtype': ('roomtype' in queryStringParams) ? queryStringParams.roomtype: ''
        };

        // Get the query string city object
        let queryParamCity = '';
        if( queryParams.city != '' )
        {
            queryParamCity = options.filter((city) => {
                if( city.value == queryParams.city )
                {
                    return city;
                }
            });
        }

        // Get the query string room object
        let queryParamRoom = '';
        if( queryParams.roomtype != '' )
        {
            queryParamRoom = roomOptions.filter((room) => {
                if( room.value == queryParams.roomtype )
                {
                    return room;
                }
            });
        }

        let params = { city: queryParamCity[0], room: queryParamRoom[0], datefrom: queryParams.datefrom, dateto: queryParams.dateto };
        let paramsObj = {...this.state.queryStringParams, ...params};
        this.setState({ queryStringParams: paramsObj });
    }

    handleChange = (e)=>{
      this.props.selectCity(e);
    }

    onChange = date =>  this.props.selectDate(date);
    
    // function to handle submit 
    handleSubmit =(e)=>{
        e.preventDefault();

        if(this.handleValidation()){
            this.setState({ isLoading: true });

            let check_in_date = this.formatDate(this.props.date[0]);
            let check_out_date = this.formatDate(this.props.date[1]);
            let city_id =this.props.selectedOption.value;
            let room_id = this.props.roomSelectedOption.value;

            this.props.searchHotels(check_in_date,check_out_date,city_id,0,4,null,null,[],room_id);
        }
    }

    handleValidation = ()=>{
        let formErrors = JSON.parse(JSON.stringify(this.state.formErrors))
        if(this.isEmpty(this.props.selectedOption) || this.props.selectedOption.value === '0'){
            formErrors.city = 'City is required';
            this.setState({formErrors});
          return false;
        }
        
        if(this.props.selectedOption.date === ''){
            formErrors.date = 'Date is required';
            this.setState({formErrors});
            return false;
        }
        
        return true; 
    }

    handlRoomChange = (e)=>{
        this.props.selectRoom(e);
    }

    isEmpty = (obj)=> {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }

    render(){
        const { formErrors }  = this.state;
        
        // Set the dropdown values
        let selectedCity = ( (this.props.selectedOption.label === 'Select City') && ( this.state.queryStringParams.city != '' ) ) ? this.state.queryStringParams.city: this.props.selectedOption;
        let selectedRoom = ( ( ( Object.keys(this.props.roomSelectedOption).length == 0 ) || ( this.props.roomSelectedOption.label === 'Select Room Type' ) ) && ( this.state.queryStringParams.city != '' ) ) ? this.state.queryStringParams.room: this.props.roomSelectedOption;
        
        let dateRange = [];
        if( this.state.queryStringParams.datefrom != '' && this.state.queryStringParams.dateto )
        {
            let datefrom = new Date(this.state.queryStringParams.datefrom);
            let dateto   = new Date(this.state.queryStringParams.dateto);

            dateRange.push(datefrom);
            dateRange.push(dateto);
        }
        else
        {
            dateRange = this.props.date;
        }

        return(
            <React.Fragment>
                <div className="container">
                    <div className="booking-form">
                        <div className="formError">
                        {formErrors.city.length > 0 &&
                                <h2>
                                {formErrors.city}
                                </h2>
        
                            }
                            {formErrors.date.length > 0 &&
                                <h2>
                                {formErrors.date}
                                </h2>
        
                            }
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <span className="form-label">Destination</span>
                                        <Select value={ selectedCity } onChange={this.handleChange} options={ this.state.cities } />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <span className="form-label" style={{display: "block"}}>Date Range</span>
                                        <DateRangePicker onChange={this.onChange} value={dateRange} minDate ={new Date()}/>
                                    </div>
                                </div>
                                <div className="col-md-3" >
                                    <div className="form-group">
                                        <span className="form-label" style={{display: "block"}}>Select Room Type</span>
                                        <Select value= { selectedRoom } onChange={this.handlRoomChange} options={ this.state.rooms }/>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <span className="form-label visibility">displaynone</span>
                                        <div className="form-btn">
                                            <button type="submit" className="submit-btn Submitbtn" style={{ width: 140 }}>Search <i className="fa fa-spinner fa-spin" style={{display: this.state.isLoading ? 'inline-block' : 'none' }}></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) =>{
    
    return {cities : state.cities,date : state.date,selectedOption : state.selectedCity,rooms : state.rooms,roomSelectedOption :state.selectedRoom }
}
export default connect(mapStateToProps,{fetchCities : fetchCities,selectDate,selectCity,searchHotels,fetchRooms,selectRoom})(HalalSearchForm);

