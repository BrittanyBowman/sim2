import React, { Component } from "react";
import { connect } from "react-redux";
import { updateLocation } from './../../ducks/reducer';
import './Wizard.css';

class Step1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zip: 0
    };
  }

  //handleChange for input fields
  handleChange(prop, value) {
    this.setState({ [prop]: value });
  }

  render() {
    return (
      <div>        
        <div className="wiz_input_container">
          <div className="wiz_input_box">
            <p>Property Name</p>
            <input
              value={this.state.name}
              onChange={e => this.handleChange("name", e.target.value)}
            />
          </div>
          <div className="wiz_input_box">
            <p>Address</p>
            <input
              style={{ width: "35vw" }}
              value={this.state.address}
              onChange={e => this.handleChange("address", e.target.value)}
            />
          </div>
          <div className="wiz_input_box">
            <p>City</p>
            <input
              value={this.state.city}
              onChange={e => this.handleChange("city", e.target.value)}
            />
          </div>
          <div className="wiz_input_box">
            <p>State</p>
            <input
              style={{ width: "70px" }}
              value={this.state.state}
              onChange={e => this.handleChange("state", e.target.value)}
            />
          </div>
          <div className="wiz_input_box">
            <p>Zip</p>
            <input
              style={{ width: "100px" }}
              type="number"
              value={this.state.zip}
              onChange={e => this.handleChange("zip", e.target.value)}
            />
          </div>
        </div>
        <button
          className="wiz_button wiz_step_button"
          onClick={() => {
            this.props.updateLocation(this.state);
            this.props.history.push("/wizard/step2");
          }}
        >
          Next Step
        </button>
      </div>
    );
  }
}
function mapStateToProps(reduxState) {
  let { name, address, city, state, zip } = reduxState;
  return { name, address, city, state, zip };
}

export default connect(mapStateToProps, { updateLocation })(Step1);


// Bring the action builder you just wrote into Step One.
// Add an object to the connect method at the bottom of the component. Add the action builder you just brought into Step One as a value to this object.
// Now setup the 'Next Step' button to fire this action.
// The button should still navigate to the next step.