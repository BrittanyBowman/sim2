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
    <div className='Dash'>
      <div className='dash_subheader'>
        <h2 className='dash_heading'>Dashboard</h2>
        <button className='dash_subheader_button' onClick={_ => this.props.history.push('/wizard')}>Add New Property</button>
      </div>
      <div className='dash_prop_container'>
        <h3 className='dash_prop_heading'>Home Listings</h3>
        {this.state.inventory.map(el => {
          return <House house={el} deleteHouse={this.deleteHouse} key={el.id} />
        })}
      </div>
    </div>
  );
}
}

//Make an onClick event to setup the Add button and redirect it to the Wizard path "/wizard" when clicked.