'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
 
// var React = require('react-native');
// var {
//   StyleSheet,
//   View,
//   Text,
//   Component
// } = React;
 
var styles = StyleSheet.create({
  description: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#123456',
  }
});
 
class More extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          This could be your second tab ok man
        </Text>
      </View>
    );
  }
}
 
module.exports = More;