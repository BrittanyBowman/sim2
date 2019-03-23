import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { updateMoney, clear } from './../../ducks/reducer';
import './Wizard.css';

class Step3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mortgage: 0,
      recommended: 0,
      rent: 0
    }
    this.handleChange = this.handleChange.bind(this);
    this.complete = this.complete.bind(this);
  }

  componentDidMount() {
    let { mortgage, rent } = this.props
    this.setState({ mortgage, rent })
  }

  handleChange(prop, value) {
    switch (prop) {
      case 'mortgage':
        this.setState({
          mortgage: value, recommended: value * 1.25
        })
        break;
      case 'rent':
        this.setState({
          rent: value
        })
        break;
      default:
        break;
    }
  }

  complete() {
    let { name, address, city, state, zip, img } = this.props;
    let house = {
      name, address, city, state, zip, img, ...this.state
    }
    
    axios.post('/api/pt2/houses', house)
      .then(res => {
        this.props.clear();
        this.props.history.push('/')
      })
  }
  render() {
    return (
      <div>
        <div className='wiz_input_container'>
          <div style={{ textAlign: 'center', fontWeight: '700', margin: '20px' }}>Recommended Rent: ${this.state.recommended}</div>
          <div className='wiz_input_box'>
            <p>Monthly Mortgage Amount</p>
            <input type='number' style={{ width: "35vw" }} value={this.state.mortgage} onChange={e => this.handleChange('mortgage', e.target.value)} />
          </div>
          <div className='wiz_input_box'>
            <p>Desired Monthly Rent</p>
            <input type='number' style={{ width: "35vw" }} value={this.state.rent} onChange={e => this.handleChange('rent', e.target.value)} />
          </div>
        </div>
        <button className='wiz_button wiz_prev_button' onClick={() => {
          this.props.updateMoney(this.state);
          this.props.history.push('/wizard/step2');
        }}>Previous Step</button>
        <button className='wiz_button wiz_complete_button' onClick={this.complete}>Complete</button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, { updateMoney, clear })(Step3);

//Now that you have Step One connected to Redux, you will replicate the process for steps two and three.

// For both components:

// Bring in connect from react-redux.
// Write the mapStateToProps function at the bottom of the file.
// In Step Two, take the image off of the Redux state.
// In Step Three, take all the properties off of the Redux state (we'll need these to make our axios request).
// Invoke connect, passing in mapStateToProps. Immediately invoke it again passing in the name of the component.