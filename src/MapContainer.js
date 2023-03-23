import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Polygon, InfoWindow } from 'google-maps-react';
import { Grid, Paper, Box } from '@mui/material';

// import data from './master.json';
import data from './master_unkeyed.json';

const Name = ({ name, a2017, a2018, a2019, a2020, a2021 }) => (

  <div>

    {name !== "Click on a district to see the bike theft statistics" ?
      (<Paper elevation={3} style={{ padding: "5px" }} >
        <Grid container spacing={1} style={{ justifyContent: 'center', color: "#124562" }}>
          <Grid item xs={12} md={4}>
            <h2>{name}</h2>

          </Grid>



          <Grid item xs={1} >

            <h4><b>{a2017}</b> thefts in 2017 </h4>

          </Grid>
          <Grid item xs={1} >

            <h4><b>{a2018}</b> thefts in 2018 </h4>

          </Grid>
          <Grid item xs={1} >

          <h4><b>{a2019}</b> thefts in 2019 </h4>

          </Grid>
          <Grid item xs={1} >

          <h4><b>{a2020}</b> thefts in 2020 </h4>

          </Grid>
          <Grid item xs={1} >

          <h4><b>{a2021}</b> thefts in 2021 </h4>

          </Grid>
        </Grid>


      </Paper>) :
      // <Paper elevation={3} style={{ padding: "5px", borderRadius: '20px', backgroundColor: '#f2efeb' }}>
      <Grid container spacing={1} style={{ justifyContent: 'center', color: "#124562" }}>
        <Grid item xs={12} md={4}>
          <h2>{name}</h2>
        </Grid>
      </Grid>
      // </Paper>
    }

  </div>
);
export class MapContainer extends Component {

  constructor(props) {
    super();
    this.state = {
      name: "Click on a district to see the bike theft statistics",
      2017: "",
      2018: "",
      2019: "",
      2020: "",
      2021: "",
      colours: []
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
  default = () => {
    this.setState({ name: "Click on a district to see the bike theft statistics" });
    this.setState({ 2017: "" });
    this.setState({ 2018: "" });
    this.setState({ 2019: "" });
    this.setState({ 2020: "" });
    this.setState({ 2021: "" });
  }
  colour = (sum) => {
    if (sum > 500) {
      return ("#FF0000")
    } else if (sum > 400) {
      return ("#FF6249")
    } else if (sum > 250) {
      return ("#FF6249")
    } else if (sum > 100) {
      return ("#FF9933")
    } else if (sum > 50) {
      return ("#FFFF00")
    } else if (sum > 25) {
      return ("#ADFF2F")
    } else {
      return ("#00FF00")
    }
  }
  componentDidMount() {
    const locations = JSON.parse(JSON.stringify(data));
    const temp = locations.map((item) => this.colour(item["2017"] + item["2018"] + item["2019"] + item["2020"] + item["2021"]))
    this.setState({ colours: temp })
  }
  render() {

    const locations = JSON.parse(JSON.stringify(data));

    return (
      <div>

        <Name name={this.state.name} a2017={this.state[2017]} a2018={this.state[2018]} a2019={this.state[2019]} a2020={this.state[2020]} a2021={this.state[2021]} />
        <Box sx={{ width: '100%', height: '3px' }} />
        <Map google={this.props.google}
          className={'map'}
          zoom={14}
          initialCenter={{
            lat: 45.4215,
            lng: -75.6972
          }}
          onClick={() => this.default()}
          style={this.props.style}>
          {
            locations.map((item, index) => {
              if (item.Name === 'Centretown') {
                console.log(item.coordinates, "aa")
              }
              return (
                <Polygon
                  paths={item.coordinates}
                  strokeColor="#0000FF"
                  strokeOpacity={0.8}
                  strokeWeight={2}
                  fillColor={this.state.colours[index]}
                  fillOpacity={0.35}
                  onClick={() => this.setName(item.Name, item["2017"], item["2018"], item["2019"], item["2020"], item["2021"])}>
                </Polygon>
              )
            })
          }
        </Map>

      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB4GCrFrx_ah_E1AQDeqIjIyWO2RAJvLjU'
})(MapContainer);