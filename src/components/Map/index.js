import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const style = {
    width: '30%',
    height: '30%'
  }

export class MapBox extends Component {

    render () {

        return (
            <Map 
                google={this.props.google} 
                style={style}
                zoom={5}
                initialCenter={{
                    lat: 34.0522,
                    lng: -118.2437
                }}
                onClick={this.onMapClicked}
            >

                
            </Map>
        );
    }
} 

export default GoogleApiWrapper({
    apiKey:('AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg')
})(MapBox)
