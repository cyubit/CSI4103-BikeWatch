import React, { Component } from 'react';
// Removed logo since we don't need it anymore
import MapContainer from './MapContainer.js';
import Header from './Header.js';
import Grid from '@mui/material/Grid';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Grid container spacing={{xs: 2, md: 3}} style={{justifyContent:'center'}}>
          <Grid item xs={12}>
            <Header/>
          </Grid>
          {/*Change to lg={12} to lg={8} when we implement the posts component */}
          <Grid item xs={11} lg={11}  style={{position: 'relative', height: '80vh'}}>
            <MapContainer />
          </Grid>
          {/* <Grid item xs={8} lg={8}>
            <h1>Posts Go Here!</h1>
          </Grid> */}
        </Grid>
      </div>
    );
  }
}
export default App;