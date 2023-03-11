import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Polygon, InfoWindow } from 'google-maps-react';
// import data from './master.json';
import data from './master_unkeyed.json';


export class MapContainer extends Component {
  render() {
    const oldBarrHavenWest = [
      { lng: -75.771002020136905, lat: 45.262156757622002 },
      { lng: -75.773635053749501, lat: 45.260711600111499 },
      { lng: -75.774228349906906, lat: 45.2610220238087 },
      { lat: 45.262097897221402, lng: -75.7757635487622 },
      { lng: -75.776717417912494, lat: 45.263122819647997 },
      { lng: -75.777607356586998, lat: 45.264575310507702 },
      { lng: -75.778374352434497, lat: 45.2659190252744 },
      { lng: -75.779372351908506, lat: 45.267657025524102 },
      { lng: -75.780306989339806, lat: 45.269242112680203 },
      { lng: -75.780937795196294, lat: 45.270041273611199 },
      { lng: -75.783475354572403, lat: 45.271698026084998 },
      { lng: -75.784763353844795, lat: 45.272085025508702 },
      { lng: -75.786906355644902, lat: 45.272468025603899 },
      { lng: -75.786896354807396, lat: 45.272756025609397 },
      { lng: -75.786901448176295, lat: 45.273884327058603 },
      { lng: -75.786559251623302, lat: 45.274857670589299 },
      { lng: -75.785985451777904, lat: 45.275626325606403 },
      { lng: -75.785369060522996, lat: 45.276192968034103 },
      { lng: -75.784488742195606, lat: 45.276760353896996 },
      { lng: -75.783308354840102, lat: 45.277284026623398 },
      { lng: -75.782418354325102, lat: 45.277655026974102 },
      { lng: -75.7815703540535, lat: 45.278007027154203 },
      { lng: -75.780887460600198, lat: 45.2782977980645 },
      { lng: -75.779953359663594, lat: 45.2786413332053 },
      { lng: -75.779919950290505, lat: 45.278674949030098 },
      { lng: -75.775089606993703, lat: 45.280642140942497 },
      { lng: -75.774449224101303, lat: 45.280881051748899 },
      { lng: -75.772399004910696, lat: 45.281722903602699 },
      { lng: -75.771297462742197, lat: 45.282138823698098 },
      { lng: -75.770234016493305, lat: 45.282563982552503 },
      { lng: -75.767133156169194, lat: 45.283812965668197 },
      { lng: -75.764685732406406, lat: 45.284796109693303 },
      { lng: -75.762661305223205, lat: 45.2855929556261 },
      { lng: -75.759111521688993, lat: 45.287027805469997 },
      { lng: -75.758277348811504, lat: 45.287454339718302 },
      { lng: -75.757288658757005, lat: 45.287996840042297 },
      { lng: -75.757031838403094, lat: 45.288139150100498 },
      { lng: -75.755516840594197, lat: 45.288957182032597 },
      { lng: -75.752851344874202, lat: 45.290010648186801 },
      { lng: -75.752438199842203, lat: 45.290172863455098 },
      { lng: -75.7485454614189, lat: 45.291701181464703 },
      { lng: -75.739826493767595, lat: 45.2951457193316 },
      { lng: -75.741528163446304, lat: 45.293107464135502 },
      { lng: -75.744615654748699, lat: 45.289223201058299 },
      { lng: -75.746951952410299, lat: 45.286000562676897 },
      { lng: -75.751854164437106, lat: 45.279556433716699 },
      { lng: -75.755261151267405, lat: 45.274769416120598 },
      { lng: -75.758134474401203, lat: 45.271645279561298 },
      { lng: -75.760331324577194, lat: 45.268659545111603 },
    ];
    const locations = JSON.parse(JSON.stringify(data));

    return (
      <Map google={this.props.google}
        className={'map'}
        zoom={14}
        initialCenter={{
          lat: 45.4215,
          lng: -75.6972
        }}>
        <Polygon
          paths={oldBarrHavenWest}
          strokeColor="#0000FF"
          strokeOpacity={0.8}
          strokeWeight={2}
          fillColor="#0000FF"
          fillOpacity={0.35} />
        {/* {Object.entries(locations).forEach(([key, item]) => (

          <Polygon
            paths={item.coordinates}
            strokeColor="#0000FF"
            strokeOpacity={0.8}
            strokeWeight={2}
            fillColor="#0000FF"
            fillOpacity={0.35}>
            <InfoWindow>
              <div>
                <h1>{key}</h1>
              </div>
            </InfoWindow>
          </Polygon>

          ))} */}
          {
            locations.map((item) => (
              <Polygon
                paths={item.coordinates}
                strokeColor="#0000FF"
                strokeOpacity={0.8}
                strokeWeight={2}
                fillColor="#0000FF"
                fillOpacity={0.35}>
              </Polygon>
            ))
          }

      </Map>

    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB4GCrFrx_ah_E1AQDeqIjIyWO2RAJvLjU'
})(MapContainer);