import * as React from 'react';
import GoogleMapReact from 'google-map-react';
import { Coords } from 'google-map-react';

import Index from './examples/Index'

import './App.css';

class App extends React.Component {
  render() {
    const center: Coords = { lat: 35.650615, lng: 139.540694 }
    const zoom = 13;

    return (
      <Index>
        <GoogleMapReact
          center={center}
          zoom={zoom} >
        </GoogleMapReact>
      </Index>
    );
  }
}

export default App;
