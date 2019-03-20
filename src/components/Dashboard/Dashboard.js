import React, { Component } from "react";
import House from "./House/House";
import axios from 'axios';

import './Dashboard.css';

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
deleteHouse = (id) => {
  axios.delete(`/api/inventory/${id}`)
      .then(res => this.getHouses());
}
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        {this.state.inventory.map(el => {
            return <House house={el} deleteHouse={this.deleteHouse} key={el.id} />
          })}
        <button onClick={() => this.props.history.push('/wizard')}>Add New Property</button>
        
      </div>
    );
  }
}

//Make an onClick event to setup the Add button and redirect it to the Wizard path "/wizard" when clicked.