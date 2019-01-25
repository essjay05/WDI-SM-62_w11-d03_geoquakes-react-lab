import React, { Component } from 'react';
import axios from 'axios';
import Quakes from './components/Quakes';
import Map from './components/Map';

class App extends Component {
  state = {
    quake: []
}

componentDidMount () {
    let { quake } = this.state;
    axios.get(`http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson`)
        .then(({ data }) => {
            console.log({ data })
            this.setState({ quake: data.features })
        })
}

  render() {
    let { quake } = this.state
    return (
      <div className="app">
        <div className="mapContainer">
          ...put Map Component here...
          <Map quake={quake}/>
        </div>
        <div className="quakeContainer">
          <h1>Earthquakes from the past week: </h1>
          <Quakes quake={quake}/>
        </div>
      </div>
    );
  }
}

export default App;
