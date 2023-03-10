import React, { Component } from 'react';
// Removed logo since we don't need it anymore
import MapContainer from './MapContainer.js';
import Grid from '@mui/material/Grid';
class App extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h1>Bike Watch</h1>
          </Grid>
          <Grid item xs={12} md={8} style={{position: 'relative', height: '90vh'}}>
            <MapContainer />
          </Grid>
          <Grid item xs={8} md={4}>
            <h1>Why Watch</h1>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default App;