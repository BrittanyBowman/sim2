import React, { Component } from "react";

import {HashRouter as Router} from 'react-router-dom';
import "./App.css";
import routes from './routes';
import Header from "./components/Header/Header";

class App extends Component {
  render() {
    return (
      
      <Router>
      
        <div className="App">
        <Header />
          {routes}
        </div>
      </Router>
    );
  }
}

export default App;