import React from 'react';

import Select from 'react-select';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import { connect } from 'react-redux';
import {fetchCities,selectDate,selectCity,searchHotels} from '../Actions';
import './css/templates/default_template/css/date-picker.css';

class HalalSearchForm extends React.Component{

    constructor(props) {
        super(props);
      
        // Don't call this.setState() here!
        this.state = { 
            cities: {},
            selectedOption : {value : '0', label: 'Select City'}, 
            formErrors: {city: '', date: ''},
            date:'',
            hotelList : {} ,
            displayhotelList : false
        };
    }



    componentDidMount(){
        this.props.fetchCities();
        this.props.selectDate([new Date(), new Date()])
        
    }

    

    handleChange = (e)=>{
      this.props.selectCity(e);
    }

    onChange = date =>  this.props.selectDate(date);
    
    // function to handle submit 
    handleSubmit =(e)=>{
        e.preventDefault();
      
        
        if(this.handleValidation()){
            let check_in_date = this.formatDate(this.props.date[0]);
            let check_out_date = this.formatDate(this.props.date[1]);
            let city_id =this.props.selectedOption.value;
            this.props.searchHotels(check_in_date,check_out_date,city_id);
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
       
        const { formErrors }  = this.state;
      
        return(
            <React.Fragment>
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
                        <div className="row no-margin">
                            <div className="col-md-3">
                                <div className="form-group">
                                    <span className="form-label">Destination</span>
                                    <Select
                                        value = {this.props.selectedOption}
                                        onChange={this.handleChange}
                                        options={options}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6" >
                                <div className="row no-margin">
                                    <div className="col-md-5">
                                        <div className="form-group">
                                            <span className="form-label" style={{display: "block"}}>Date Range</span>
                                            <DateRangePicker  onChange={this.onChange} value={this.props.date} minDate ={new Date()}/>
                                        </div>
                                    </div>
                                    
                                    
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <span className="form-label visibility">displaynone</span>
                                    <div className="form-btn">
                                        <button type="submit" className="submit-btn Submitbtn">Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

            </React.Fragment>
        );
    }

    

}

const mapStateToProps = (state) =>{
  
    return {cities : state.cities,date : state.date,selectedOption : state.selectedCity}
}
export default connect(mapStateToProps,{fetchCities : fetchCities,selectDate,selectCity,searchHotels})(HalalSearchForm);

