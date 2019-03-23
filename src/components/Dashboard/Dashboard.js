import React, { Component } from "react";
import House from "./House/House";
import axios from 'axios';

import './Dashboard.css';

export default class Dashboard extends Component {
  constructor(props){
    super(props)

    this.state = {
      houses: []
    }
  }
componentDidMount() {
  this.getHouses();
}
getHouses = () => {
  axios.get('/api/pt2/houses').then(res => this.setState({houses: res.data}))
}
deleteHouse = (id) => {
  axios.delete(`/api/pt2/house/${id}`)
      .then(res => this.getHouses());
}
render() {
  return (
    <div className='Dash'>
      <div className='dash_subheader'>
        <h2 className='dash_heading'>Dashboard</h2>
        <button className='dash_subheader_button' onClick={() => this.props.history.push('/wizard/step1')}>Add New Property</button>
      </div>
      <div className='dash_prop_container'>
        <h3 className='dash_prop_heading'>Home Listings</h3>
        {this.state.houses.map(el => {
          return <House house={el} deleteHouse={this.deleteHouse} key={el.id} />
        })}
      </div>
    </div>
  );
}
}