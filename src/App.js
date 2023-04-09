import React, { Component, useState } from 'react';
// Removed logo since we don't need it anymore
import MapContainer from './MapContainer.js';
import Header from './Header.js';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './App.css';
import DisqusBoard from './DisqusBoard.js';


class App extends Component {
  constructor(props) {
    super();
    this.state = { 
      selected: ""
    }
  };

  render() {
    const polyName = (s) => {
      this.setState({selected: s}) 
    }
    return (
      <div className='App' TestId="app-component" data-testid="app-component">
        <Grid container spacing={{ xs: 1, md: 3 }} style={{ justifyContent: 'center' }}>
          <Grid item xs={12}>
            <Header TestId="header-component"/>
          </Grid>
          {/*Change to xs={12} to lg={8} when we implement the posts component */}

          {/* <Grid item xs={11} lg={10} style={{ position: 'sticky', height: '90vh' }}>
            <Box sx={{ flexGrow: 1, backgroundColor: '##f2efeb' }}>
              <MapContainer />
            </Box>
          </Grid> */}
          <Grid item xs={11} lg={11} style={{ position: 'relative', height: '80vh' }}>
            <Box sx={{ flexGrow: 0, backgroundColor: '#4a7d9a', borderRadius: '30px', padding: '1%' }}>
              <Grid container spacing={{ xs: 3 }} style={{ justifyContent: 'center' }}>
                <Grid item xs={12} lg={12}>
                  <MapContainer style={{ width: '95%' }} pname={polyName} TestId="map-container-component"/>
                </Grid>
                <Grid item xs={12} lg={12}>
                  <Box sx={{ width: '100%', height: '80vh'}} />
                </Grid>
              </Grid>
            </Box>




            <Grid item xs={8} lg={11}>
              <DisqusBoard url={this.state.selected} TestId="disqus-board-component"/>
            </Grid>
          </Grid>
        </Grid>

      </div>
    );
  }
}
export default App;