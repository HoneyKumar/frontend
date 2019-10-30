import React from 'react';
import {connect} from 'react-redux';
import {fetchHotelFacilities,searchHotels} from '../Actions';

class HotelFacilities extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            checkedItems: new Map(),
          }
    }
    
  
    componentDidMount(){
        this.props.fetchHotelFacilities();
        
    }

    handleOnChange =(event)=>{
        
      
        const item =event.target.name;
        const isChecked = event.target.checked;
        this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
        
    }

    componentDidUpdate(){
        let check_in_date = this.formatDate(this.props.date[0]);
        let check_out_date = this.formatDate(this.props.date[1]);
        let checkedItems = [];
        this.state.checkedItems.forEach(function(value, key) {
            if(value=== true){
                checkedItems =[...checkedItems,key];
            }
          });
        
        this.props.searchHotels(check_in_date,check_out_date,this.props.cityId,null,null,null,null,checkedItems);
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

   

    
    displayAccomodationFacilites(){
        return this.props.hotelFacilities.map((facility_detail)=>{
            var checkBoxVal = false;
            if(this.state.checkedItems.get(facility_detail.name) === undefined){
                checkBoxVal =false;
            }else{
                checkBoxVal = this.state.checkedItems.get(facility_detail.name)
            }
            return (
                
                <div className="checkbox" key={facility_detail.id}>
                    <label><input name={facility_detail.name} type="checkbox" checked={checkBoxVal} onChange={this.handleOnChange} />{facility_detail.name}</label>
                </div>
            )
        })
    }
    
    render(){
        return(
           <React.Fragment>
             <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              { this.displayAccomodationFacilites() }
              </div>  
            </React.Fragment>
            
        )
    }
}

const mapStateToProps = (state)=>{
  return {hotelFacilities : state.hotelFacilities,date : state.date,cityId:state.selectedCity.value}
}

export default connect(mapStateToProps,{fetchHotelFacilities,searchHotels})(HotelFacilities);