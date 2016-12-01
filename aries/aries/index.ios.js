/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


var DynamicCountdown = require('./reactDynamicCountdown');


console.log( 'this is dynamic countdown' );
console.log( DynamicCountdown );
console.log( DynamicCountdown.DynamicCountdown );



// Styles here for now 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


var val = 10;



class Countdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countdownNumber: val
        };
    }
    render() {
        return( 
                <View style={styles.container}>
                <Text> yo </Text>
                <DynamicCountdown secondsRemaining="10" />

            </View>

        )
    }
}

AppRegistry.registerComponent('aries', function() { return Countdown });
