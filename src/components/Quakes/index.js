import React, { Component } from 'react';
import axios from 'axios';


export default class Quakes extends Component {
    state = {
        quake: []
    }

    componentDidMount () {
        let { quake } = this.state;
        axios.get(`http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson`)
            .then(({ data }) => {
                debugger
                console.log({ data })
                this.setState({ quake: data.features })
                debugger
            })
    }
    
    render () {
        let { quake } = this.state
        return (
            <ul className="quakeList">
                {quake.map((quake, i) => {
                    return<li key={i}>{quake.properties.title}</li>
                })}
            </ul>
        )
    }

}