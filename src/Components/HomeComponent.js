import React from 'react';
import HalalSearchForm from './HalalSearchForm';
import {connect} from 'react-redux';

class HomeComponent extends React.Component{

    render(){
        return (
            <div>
               <HalalSearchForm />
            </div>
        )
    }
}


export default connect(null,null)(HomeComponent);