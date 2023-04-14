import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Polygon } from 'google-maps-react';
import { Grid, Paper, Box } from '@mui/material';
import MouseTooltip from 'react-sticky-mouse-tooltip';
import legend from './legend.png'
// import data from './master.json';
import data from './master_unkeyed.json';
import { BarChart } from './BarChart';

const tooltipStyle = {
  color: "black",
  backgroundColor: "#f2efeb",
  padding: "5px",
  opacity: 0.8
}

const Name = ({ name, a2017, a2018, a2019, a2020, a2021, yearColour }) => ( // The code here was written by our team. With help from the google-maps-react documentation, and the react-sticky-mouse-tooltip documentation.


  <div>

    {name !== "Click on a district to see the bike theft statistics" ? // If the user has clicked on a district, show the bar chart and legend. If not, just show the legend.
      (
        <Grid container spacing={1} style={{ justifyContent: 'center', color: "#f2efeb" }}>
          <Grid item xs={12} md={4}>
            <h1>{name}</h1>

          </Grid>

          <Grid item>

            <BarChart yearlyThefts={[a2017, a2018, a2019, a2020, a2021]} colour={yearColour} /> {/* Bar chart component. Written by us with help from the Chart.js documentation*/}

          </Grid>
          <Grid >
            <img src={legend} alt="legend" width="100" height="150" hspace="50" /> {/* Legend component. Written by us.*/}
          </Grid>


        </Grid>


      ) :

      <Grid container spacing={1} style={{ justifyContent: 'center', color: "#f2efeb" }}>
        <Grid item xs={12} md={6}>
          <h1>{name}</h1>
        </Grid>
        <Grid >
          <img src={legend} alt="legend" width="100" height="150" hspace="" />
        </Grid>
      </Grid>

    }

  </div>
);
export class MapContainer extends Component { // The code here was written by our team. With help from the google-maps-react documentation, and the react-sticky-mouse-tooltip documentation. Matthew took point on the state code here

  constructor(props) {
    super();
    this.state = { // The state of the district. This is where the data is stored.
      hoverName: "test",
      isMouseTooltipVisible: false,
      name: "Click on a district to see the bike theft statistics",
      2017: "",
      2018: "",
      2019: "",
      2020: "",
      2021: "",
      yearColour: "",
      colours: []
    }
  }
  setName = (nameValue, a2017, a2018, a2019, a2020, a2021) => { // This function sets the state of the district. It is called when the user clicks on a district.
    this.setState({ name: nameValue });
    this.setState({ 2017: a2017 });
    this.setState({ 2018: a2018 });
    this.setState({ 2019: a2019 });
    this.setState({ 2020: a2020 });
    this.setState({ 2021: a2021 }, () => { this.props.pname(this.state.name) });


  }
  default = () => { 
    this.setState({ name: "Click on a district to see the bike theft statistics" });
    this.setState({ 2017: "" });
    this.setState({ 2018: "" });
    this.setState({ 2019: "" });
    this.setState({ 2020: "" });
    this.setState({ 2021: "" });
    this.setState({ yearColour: "" }, () => { this.props.pname(this.state.name) });
  }
  colour = (sum) => { // This function sets the colour of the district based on the number of bike thefts. It is called when the user clicks on a district.
    if (sum > 500) {
      return ("#FF0000")
    } else if (sum > 400) {
      return ("#ff5349")
    } else if (sum > 250) {
      return ("#ffa500")
    } else if (sum > 100) {
      return ("#FFAE42")
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

    const locations = JSON.parse(JSON.stringify(data)); // The data here is parsed from the JSON file. It consists of the coordinates of the vertices of the districts, and the number of bike thefts in each district in each year.

    return ( // The code here was written by our team. With help from the google-maps-react documentation, and the react-sticky-mouse-tooltip documentation.
      <div> 

        
        <Name name={this.state.name} a2017={this.state[2017]} a2018={this.state[2018]} a2019={this.state[2019]} a2020={this.state[2020]} a2021={this.state[2021]} yearColour={[this.state[2017], this.state[2018], this.state[2019], this.state[2020], this.state[2021]].map((y) => this.colour(y))} />
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

              return ( 
                <Polygon
                  paths={item.coordinates}
                  strokeColor="#0000FF"
                  strokeOpacity={0.8}
                  strokeWeight={2}
                  fillColor={this.state.colours[index]}
                  fillOpacity={0.35}
                  onClick={() => this.setName(item.Name, item["2017"], item["2018"], item["2019"], item["2020"], item["2021"])}
                  onMouseover={() => this.setState({ hoverName: item.Name, isMouseTooltipVisible: true })}
                  onMouseout={() => this.setState({ hoverName: "", isMouseTooltipVisible: false })}
                >

                </Polygon>
              )
            })
          }
        </Map>
        <MouseTooltip 
          visible={this.state.isMouseTooltipVisible}
          style={tooltipStyle}
          offsetX={15}
          offsetY={10}
        >
          <span>{this.state.hoverName}</span>
        </MouseTooltip>
      </div>
    );
  }
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAPS_API_KEY
})(MapContainer);