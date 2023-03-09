import React, { Component } from 'react';
// Removed logo since we don't need it anymore
import MapContainer from './MapContainer.js';
class App extends Component {
  render() {
    return (
      <div>
        <h1>Bike Watch</h1>
        <MapContainer />
      </div>
    );
  }
}
export default App;