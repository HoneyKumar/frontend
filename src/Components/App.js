import React from 'react';

import TopBar from './TopBar';
import Header from './Header';
import Footer from './Footer';
import { Router, Switch, Route} from 'react-router-dom';

import HomeComponent from './HomeComponent';
import HotelList from './HotelList';
import QuoteDetails from './QuoteDetails';
import HotelDetailsComponent from './HotelDetailsComponent';
import BookingConfirmation from './BookingConfirmation';
import './css/templates/default_template/css/bootstrap.css';
import './css/templates/default_template/css/converter.css';
import './css/templates/default_template/css/footer.css';
import './css/templates/default_template/css/hotel-list.css';
import history from '../history';
class App extends React.Component{
  render(){
    return(
      <div>
        <Router history={history}>
            <TopBar/>
            <Header />
            <Switch>
            <Route exact path='/' component={HomeComponent} />
            <Route  exact path="/hotel-list" component={HotelList}/>
            <Route  exact path="/hotel/detail/:id" component={HotelDetailsComponent}/>
            <Route  exact path="/quote-details" component={QuoteDetails}/>
            <Route  exact path="/booking-confirmation" component={BookingConfirmation}/>
            </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;