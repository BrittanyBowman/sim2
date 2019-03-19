import React, { Component } from "react";
import House from "./House/House";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <button>Add New Property</button>
        <House />
      </div>
    );
  }
}

//Make an onClick event to setup the Add button and redirect it to the Wizard path "/wizard" when clicked.