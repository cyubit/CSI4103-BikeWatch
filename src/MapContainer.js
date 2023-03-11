import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Polygon, InfoWindow } from 'google-maps-react';
// import data from './master.json';
import data from './master_unkeyed.json';

const Name = ({name}) => (
  <p>{name}</p>
);
export class MapContainer extends Component {

  constructor(props){
    super();
    this.state={
      name:""
    }
  }
  setName=(nameValue)=>{
    this.setState({name:nameValue});
  }
  render() {

    const locations = JSON.parse(JSON.stringify(data));

    return (
      <div><Name name = {this.state.name}/>
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
                onClick = {()=>this.setName(item.Name)}>
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