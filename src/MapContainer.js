import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Polygon, InfoWindow } from 'google-maps-react';
import { Grid, Paper } from '@mui/material';

// import data from './master.json';
import data from './master_unkeyed.json';

const Name = ({ name, a2017, a2018, a2019, a2020, a2021 }) => (

  <div>

    {name ?
      (<Grid container spacing={1} style={{ justifyContent: 'center', color: "#124562" }}>
        <Grid item xs={12} md={4}>
          <h2>{name}</h2>

        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{padding:"5px"}}>
            <Grid container spacing={2} style={{ justifyContent: 'center' }}>
              <Grid item xs={4} >
                <Paper elevation={5} style={{ textAlign: 'center' }}>
                  Thefts in 2017: <b>{a2017}</b>
                </Paper>
              </Grid>
              <Grid item xs={4} >
                <Paper elevation={5} style={{ textAlign: 'center' }}>
                  Thefts in 2018: <b>{a2018}</b>
                </Paper>
              </Grid>
              <Grid item xs={4} >
                <Paper elevation={5} style={{ textAlign: 'center' }}>
                  Thefts in 2019: <b>{a2019}</b>
                </Paper>
              </Grid>
              <Grid item xs={4} >
                <Paper elevation={5} style={{ textAlign: 'center' }}>
                  Thefts in 2020: <b>{a2020}</b>
                </Paper>
              </Grid>
              <Grid item xs={4} >
                <Paper elevation={5} style={{ textAlign: 'center' }}>
                  Thefts in 2021: <b>{a2021}</b>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>) : null}

  </div>
);
export class MapContainer extends Component {

  constructor(props) {
    super();
    this.state = {
      name: "",
      2017: "",
      2018: "",
      2019: "",
      2020: "",
      2021: "",
    }
  }
  setName = (nameValue, a2017, a2018, a2019, a2020, a2021) => {
    console.log(a2017)
    this.setState({ name: nameValue });
    this.setState({ 2017: a2017 });
    this.setState({ 2018: a2018 });
    this.setState({ 2019: a2019 });
    this.setState({ 2020: a2020 });
    this.setState({ 2021: a2021 });
  }
  render() {

    const locations = JSON.parse(JSON.stringify(data));

    return (
      <div>
        <Name name={this.state.name} a2017={this.state[2017]} a2018={this.state[2018]} a2019={this.state[2019]} a2020={this.state[2020]} a2021={this.state[2021]} />
        <Map google={this.props.google}
          className={'map'}
          zoom={14}
          initialCenter={{
            lat: 45.4215,
            lng: -75.6972
          }}>
          {
            locations.map((item) => (
              <Polygon
                paths={item.coordinates}
                strokeColor="#0000FF"
                strokeOpacity={0.8}
                strokeWeight={2}
                fillColor="#0000FF"
                fillOpacity={0.35}
                onClick={() => this.setName(item.Name, item["2017"], item["2018"], item["2019"], item["2020"], item["2021"])}>
              </Polygon>
            ))
          }
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB4GCrFrx_ah_E1AQDeqIjIyWO2RAJvLjU'
})(MapContainer);