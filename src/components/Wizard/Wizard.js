import React, { Component } from 'react'
import './Wizard.css';

export class Wizard extends Component {
  constructor(props){
    super(props)

    this.state = {
      name: "",
      address: "",
      city: "", 
      state: "",
      zip: 0
    }
  }

//handleChange for input fields on the wizard page
handleChange = (prop, value) => {
    switch (prop) {
      case 'state':
        if (value.length > 2) {
          return
        }
        break;
      case 'zip':
        if (value.length > 5) {
          return
        }
        break;
      default:
        break;
    }
    this.setState({ [prop]: value })
  
}
  render() {
    return (
      <div>
        <h1>Wizard</h1>
        <h2>Add New Listing</h2>
        <button onClick={()=> this.props.history.push('/')}>Cancel</button>
        <form>
        <p>Property Name</p>
            <input value={this.state.name} onChange={e => this.handleChange('name', e.target.value)} />

        <p>Address</p>
            <input value={this.state.address} onChange={e => this.handleChange('address', e.target.value)} />

        <p>City</p>
            <input value={this.state.city} onChange={e => this.handleChange('city', e.target.value)} />

        <p>State</p>
            <input value={this.state.state} onChange={e => this.handleChange('state', e.target.value)} />

        <p>Zip</p>
            <input value={this.state.zip} onChange={e => this.handleChange('zip', e.target.value)} />

        </form>
      </div>
    )
  }
}

export default Wizard

//Make an onClick event to setup the cancel button and redirect it to the Dashboard path "/" when clicked.
