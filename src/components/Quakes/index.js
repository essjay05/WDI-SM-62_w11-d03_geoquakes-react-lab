import React, { Component } from 'react';
import axios from 'axios';


export default class Quakes extends Component {
    state = {
        quake: []
    }
    render () {
        let { quake } = this.state
        return (
            <h1>Earthquakes LIST</h1>
        )
    }

}