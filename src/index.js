import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore,applyMiddleware,compose } from 'redux';
import './index.css';
import App from './Components/App';
import reducer from './Reducers';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//const ReduxThunk = window.ReduxThunk.default;
const initialState = { 
    
  };
  
const store = createStore(reducer,initialState,composeEnhancers(applyMiddleware(thunk)));
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

