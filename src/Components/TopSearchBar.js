import React from 'react';

import {connect} from 'react-redux';
import {fetchCities,selectDate,selectCity,searchHotels,fetchRooms,selectRoom} from '../Actions';

import Select from 'react-select';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

class TopSearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {formErrors: {city: '', date: ''} }
    }

    onChange = date =>  this.props.selectDate(date);

    handleChange = (e)=>{
        this.props.selectCity(e);
    }

    handleSubmit =(e)=>{
        e.preventDefault();
      
        
        if(this.handleValidation()){
            let check_in_date = this.formatDate(this.props.date[0]);
            let check_out_date = this.formatDate(this.props.date[1]);
            let city_id =this.props.selectedOption.value;
            this.props.searchHotels(check_in_date,check_out_date,city_id);
           

        }
    }

    handlRoomChange = (e)=>{
        this.props.selectRoom(e);
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
        const options = Array.from(this.props.cities).reduce((option,val)=>{
            let arr = {value: val.CityID,label: val.CityName };
            option = [...option,arr];
            return option;
        }, [{value : 'Select City', label: 'Select City'}]);
        const roomOptions = Array.from(this.props.rooms).reduce((option,val)=>{
            let arr = {value : val.BedID,label : val.BedName},
            options = [...option,arr];
            return options;
        },[{value : 'Select Room Type', label: 'Select Room Type'}])

        return(
            <React.Fragment>
                <div className="container">
                    <div className="booking-form">
                        <form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <span className="form-label">Destination</span>
                                        <Select value={ this.props.selectedOption } onChange={this.handleChange} options={ this.state.cities } />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group">
                                        <span className="form-label" style={{display: "block"}}>Date Range</span>
                                        <DateRangePicker onChange={this.onChange} value={this.props.date} minDate ={new Date()}/>
                                    </div>
                                </div>
                                <div className="col-md-3" >
                                    <div className="form-group">
                                        <span className="form-label" style={{display: "block"}}>Select Room Type</span>
                                        <Select value= { this.props.roomSelectedOption } onChange={this.handlRoomChange} options={ this.state.rooms }/>
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
        )
    }

}
const mapStateToProps = (state) =>{
    console.log(state);
    
    return {cities : state.cities,date : state.date,selectedOption : state.selectedCity,rooms : state.rooms,roomSelectedOption :state.selectedRoom}
}

export default connect(mapStateToProps,{fetchCities : fetchCities,selectDate,selectCity,searchHotels,fetchRooms,selectRoom})(TopSearchBar);