import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bookRequest} from '../Actions';


class CustomerDetailForm extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            fullName : '',
            email: '',
            retypeEmail : '',
            phoneNumber : '',
            country : '',
            kids : false,
            arrivalTime : '',
            formErrors: {email: '', phoneNumber:'', fullName:'',country:'' },
        }
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
    
        return [ day,month,year].join('-');
    }    

    handleOnChange = (event)=>{
        event.preventDefault();
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({[name] : value});
       
    }

    handleSubmit=(event)=>{
        event.preventDefault();
       
        if(this.handleValidation()){
            
            let user_Detail ={fullName : this.state.fullName, email: this.state.email, phonenumber: this.state.phoneNumber};
            let {hotel_details} = this.props.hotelDetail;
            let check_in_date = this.formatDate(this.props.date[0]);
            let check_out_date = this.formatDate(this.props.date[1]);
            let bedDetails = Object.values(hotel_details.BedDetails);
            let bedDetail = bedDetails.find((detail)=> parseInt(detail.BedID) === parseInt(this.props.selectedRoomId));
            let totalNights = hotel_details.TotalDays;
            let booking_details ={'hotelName':hotel_details.HotelName,'hotelId':hotel_details.HotelID,'bedDetail': bedDetail,'roomQuantity' : this.props.roomQuantity,'checkInDate':check_in_date,'checkOutDate' : check_out_date,'totalNights' : totalNights};
            let booking_type =1;
            this.props.bookRequest(user_Detail,booking_details,booking_type);
        }
    }

    handleValidation=()=>{
       
        let formErrors = JSON.parse(JSON.stringify(this.state.formErrors))
        if(this.state.country === 'Please select one option' || this.state.country === ''){
          
            formErrors.country = 'Country is required';
            this.setState({formErrors});
          return false;
        }
        
        if(this.state.fullName === ''){
           
            formErrors.fullName = 'Full Name is Required';
            this.setState({formErrors});
            return false;
        }

        if(this.state.phoneNumber === ''){
            formErrors.phoneNumber = 'Phone Number is Required';
            this.setState({formErrors});
            return false;
        }

        if(this.state.email === ''){
          
            formErrors.email = 'Email is Required';
            this.setState({formErrors});
            return false;
        }else if(this.state.email !== this.state.retypeEmail){
          
            formErrors.email = 'Email and Re type Email should be same';
            this.setState({formErrors});
            return false;
        }

        
        return true;
    }

    render(){
        
        return(
            <div className="panel panel-default">
                <div className="panel-body">
                    <h4 className="guest-details-title">Let us know who you are</h4>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label className="control-label">Full name</label>
                            <input type="text" className="form-control" id="fullname" name="fullName" placeholder="Full name" onChange={this.handleOnChange} value={this.state.fullName} />
                            { this.state.formErrors.fullName.length > 0 ? (
                                <span>{this.state.formErrors.fullName}</span>
                            ) : '' }
                        </div>
                        <div className="form-group">
                            <label className="control-label">Email</label>
                            <input type="Email" className="form-control" id="email" name="email" placeholder="Email" onChange={this.handleOnChange} value={this.state.email} />
                            { this.state.formErrors.email.length > 0 ? (
                                <span>{this.state.formErrors.email}</span>
                            ) : '' }
                        </div>
                        <div className="form-group">
                            <label className="control-label">Retype email</label>
                            <input type="Email" className="form-control" id="RetypeEmail" name="retypeEmail" placeholder="Retype email" onChange={this.handleOnChange} value={this.state.retypeEmail} />
                        </div>
                        <div className="form-horizontal clearfix">
                            <div className="col-sm-6">
                                <div className="form-group spacing-r">
                                    <label className="control-label">Phone number (optional)</label>
                                    <input type="number" className="form-control" name="phoneNumber" id="number" placeholder="Phone number" onChange={this.handleOnChange} value={this.state.phoneNumber} />
                                    { this.state.formErrors.phoneNumber.length > 0 ? (
                                        <span>{this.state.formErrors.phoneNumber}</span>
                                        ) : '' }
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group has-success spacing-l">
                                    <label className="control-label">Country/region of residence</label>
                                    <select className="form-control" name="country" onChange={this.handleOnChange} value={this.state.country}>
                                        <option>Please select one option</option>
                                        <option value="Afghanistan">Afghanistan</option>
                                        <option value="Åland Islands">Åland Islands</option>
                                        <option value="Albania">Albania</option>
                                        <option value="Algeria">Algeria</option>
                                        <option value="American Samoa">American Samoa</option>
                                        <option value="Andorra">Andorra</option>
                                        <option value="Angola">Angola</option>
                                        <option value="Anguilla">Anguilla</option>
                                        <option value="Antarctica">Antarctica</option>
                                        <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                        <option value="Argentina">Argentina</option>
                                        <option value="Armenia">Armenia</option>
                                        <option value="Aruba">Aruba</option>
                                        <option value="Australia">Australia</option>
                                        <option value="Austria">Austria</option>
                                        <option value="Azerbaijan">Azerbaijan</option>
                                        <option value="Bahamas">Bahamas</option>
                                        <option value="Bahrain">Bahrain</option>
                                        <option value="Bangladesh">Bangladesh</option>
                                        <option value="Barbados">Barbados</option>
                                        <option value="Belarus">Belarus</option>
                                        <option value="Belgium">Belgium</option>
                                        <option value="Belize">Belize</option>
                                        <option value="Benin">Benin</option>
                                        <option value="Bermuda">Bermuda</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <h4>Let us know what you need</h4>
                        <p>Requests are fulfilled on a first come, first served basis. We'll send yours right after you book.</p>
                        <div className="well no-bg">
                            <p>Do you have a smoking preference?</p>
                            <div className="form-horizontal clearfix">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <div className="radio">
                                            <label>
                                                <input type="radio" name="smoking-preference" /> I'm making this booking for someone else.
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <div className="radio">
                                            <label>
                                                <input type="radio" name="smoking-preference" /> Smoking room
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>What bed configuration do you prefer?</p>
                            <div className="form-horizontal clearfix">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <div className="radio">
                                            <label>
                                                <input type="radio" name="bed" /> I'd like a large bed
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <div className="radio">
                                            <label>
                                                <input type="radio" name="bed" /> I'd like twin beds
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className=""><Link to="#"><i className="fa fa-plus-circle" aria-hidden="true"></i> Click here for more requests</Link></p>
                        <hr />
                        <h4>Traveling with kids?</h4>
                        <div className="form-group">
                            <div className="checkbox">
                                <label><input type="checkbox" onChange={this.handleOnChange} value={this.state.kids}/> I'm traveling with kids (0-5 years).</label>
                            </div>
                            <div className="checkbox">
                                <label> Note: This room allows up to 2 children to stay FREE on existing bedding.</label>
                            </div>
                        </div>
                        <hr/>
                        <h4>Let us know when you are arriving</h4>
                        <div className="form-group">
                            <label className="control-label">We'll let the property or host know when to expect you.</label>
                            <select className="form-control" name={this.state.arrivalTime} onChange={this.handleOnChange}>
                                <option value="0">I don't know</option>
                                <option value="1">00.00 - 01.00</option>
                                <option value="2">01.00 - 02.00</option>
                                <option value="3">02.00 - 03.00</option>
                                <option value="4">03.00 - 04.00</option>
                                <option value="5">04.00 - 05.00</option>
                                <option value="6">05.00 - 06.00</option>
                                <option value="7">06.00 - 07.00</option>
                                <option value="8">07.00 - 08.00</option>
                                <option value="9">08.00 - 09.00</option>
                                <option value="10">09.00 - 10.00</option>
                                <option value="11">10.00 - 11.00</option>
                                <option value="12">11.00 - 12.00</option>
                                <option value="13">12.00 - 13.00</option>
                                <option value="14">13.00 - 14.00</option>
                                <option value="15">14.00 - 15.00</option>
                                <option value="16">15.00 - 16.00</option>
                                <option value="17">16.00 - 17.00</option>
                                <option value="18">17.00 - 18.00</option>
                                <option value="19">18.00 - 19.00</option>
                                <option value="20">19.00 - 20.00</option>
                                <option value="21">20.00 - 21.00</option>
                                <option value="22">21.00 - 22.00</option>
                                <option value="23">22.00 - 23.00</option>
                                <option value="24">23.00 - 24.00</option>
                                <option value="25">00.00 - 01.00 (the next day)</option>
                                <option value="26">01.00 - 02.00 (the next day)</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <p><small>By proceeding with this booking, I agree to Agoda’s <Link to="#" target="_blank">Terms of Use</Link> and <Link to="#" target="_blank">Privacy Policy</Link>.</small></p>
                        </div>
                        <p className="text-right text-danger">Don’t miss this! We have only 2 rooms left!</p>
                        <p className="text-right"><button type="submit" className="btn btn-info text-uppercase">Book Now</button></p>
                        <div className="text-right"><label className="price-bags-col">You won't be charged yet.</label></div>
                    </form>
                </div>
            </div>
          
        )
    }

}
const mapStateToProps = (state)=>{
   
    let selectedHotel = state.bookHotel.hotelId;
    let hotelList = Object.values(state.hotelList.hotel_details);
    let hotelDetail = hotelList.find(({hotel_details})=> parseInt(hotel_details.HotelID) === parseInt(selectedHotel) );
    let roomQuantity = state.bookHotel.totalRooms;
    let selectedRoomId = state.bookHotel.roomId;
    let {date} = state;
    return {hotelDetail,roomQuantity,selectedRoomId,date};
}

export default connect(mapStateToProps,{bookRequest})(CustomerDetailForm);