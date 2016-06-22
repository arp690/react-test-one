'use strict'

var React = require('react-native');

var {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} = React;

var CoreIndex = React.createClass ({

  render() {
    return (
      <View style={style.container}>
        <Text style={style.heading}>This is my GreetingApp</Text>
      </View>
    );

  }
});

const style = StyleSheet.create({
  container:{
    backgroundColor: '#F5FCFF',
    paddingTop: 40,
    padding: 10,
    alignItems: 'center',
    flex: 1,
  },
  heading: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
    color: '#0000CC'
  },

});

module.exports = CoreIndex;
