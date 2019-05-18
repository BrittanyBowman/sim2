//organize Wizard to keep routing simple.
import React from 'react';
import './Wizard.css';
import { connect } from 'react-redux';
import { clear } from './../../ducks/reducer';
import { Route } from 'react-router-dom';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

function Wizard(props) {
    return (
      <div className='Wiz'>
        <div className='wiz_subheader'>
          <h2 className='wiz_heading'>Add New Listing</h2>
          <button className='wiz_subheader_button' onClick={() => {
            props.clear();
            props.history.push('/')
          }}>Cancel</button>
        </div>
        <Route path={props.match.path+'/step1'} component={Step1} />
        <Route path={props.match.path+'/step2'} component={Step2} />
        <Route path={props.match.path+'/step3'} component={Step3} />
      </div>
    )
  }
  
  export default connect(null, { clear })(Wizard);

//   The connect() function provided by react-redux can take up to four arguments, all of which are optional. Calling the connect() function returns a higher-order component which can be used to wrap any React component.

// Since a higher-order component is returned by connect(), it has to be invoked again with the base React component in order to convert it to a container component:

// const ContainerComponent = connect()(BaseComponent);