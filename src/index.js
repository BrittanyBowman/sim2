//import the store to hook it up with App, allows App access to the store and the reducers.
//Provider component will "provide" the store to our App (needs a store prop that = store)
import store from './ducks/store';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';


ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));

//NOTES: The react-redux package SIMPLE INTERFACE -
//<Provider store> — Wraps the React application and makes the Redux state available to all container components in the application’s hier
//connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options]) — Creates a higher-order component for making container components out of base React components
