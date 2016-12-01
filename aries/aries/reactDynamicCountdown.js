'use strict';


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import heartrate_ts from './heartrateSignal';

//utility functions

Array.prototype.sum = Array.prototype.sum || function() {
  return this.reduce(function(sum, a) { return sum + Number(a) }, 0);
}
Array.prototype.average = Array.prototype.average || function() {
  return this.sum() / (this.length || 1);
}

class DynamicCountdown extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            secondsRemaining: 0,
            heartRate: 88,
            countdownRate: 80,
            lastFewHeartRates : [],
            countdownNumberStart : 5
        }
    }
    convertToMillisecondIntervals( bpm ) {
        var millisecondIntervals = 60000/bpm;    
        return millisecondIntervals;
    }
    // sampleHeartRate() {
    //     if ( this.state.lastFewHeartRates.length > 1 ) { // change this to 5 later
    //         this.countdownRate = ( this.lastFewHeartRates.average() ) / 2; 
    //         this.state.lastFewHeartRates = [];
    //     } 
    //     this.lastFewHeartRates.push( this.heartRate )
    // }
    tick(){


        this.setState({secondsRemaining: this.state.secondsRemaining - 1});

        if (this.state.secondsRemaining <= 0) {
            clearInterval(this.interval);
        }
    }
    componentDidMount(){
        console.log( 'in component did mount' );
        //this.getInitialState();
        this.setState({ secondsRemaining: this.props.secondsRemaining });
        
        console.log( 'convert to millisecond intervals');
        
        var i = this.convertToMillisecondIntervals( this.state.countdownRate )
        
        console.log( 'countdown rate: ' );
        console.log( i );

        this.interval = setInterval(this.tick.bind(this), i );
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    render(){
        return (
                <Text>Seconds Remaining: {this.state.secondsRemaining}</Text>
        );
    }
}

module.exports = DynamicCountdown;

//export default DynamicCountdown
