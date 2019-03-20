import React from 'react';
import './House.css';



export default function House(props) {
  let { id, name, address, city, state, zip } = props.house;
  return (
    <div>
        <p>Property Name: {name}</p>
        <p>Address: {address}</p>
        <p>City: {city}</p>
        <p>State: {state}</p>
        <p>Zip: {zip}</p>
      
      <button onClick={() => props.deleteHouse(id)}>Delete</button>
    </div>
  )
}

// Change where you're mapping over the list in Dashboard to pass the house information down to the House component.
