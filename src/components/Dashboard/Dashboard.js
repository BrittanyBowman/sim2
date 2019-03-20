import React, { Component } from "react";
import House from "./House/House";
import axios from 'axios';

export default class Dashboard extends Component {
  constructor(props){
    super(props)

    this.state = {
      inventory: []
    }
  }
componentDidMount() {
  this.getHouses();
}
getHouses = () => {
  axios.get('/api/inventory').then(res => this.setState({inventory: res.data}))
}
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        {this.state.inventory.map((el) => {
          return {House}
        })}
        <button>Add New Property</button>
        <House />
      </div>
    );
  }
}

//Make an onClick event to setup the Add button and redirect it to the Wizard path "/wizard" when clicked.