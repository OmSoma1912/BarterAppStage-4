import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class SettingsScreen extends Component{
  render(){
    return(
      <View style = {{alignItems : 'center', flex : 1}}>
        <Text style = {{fontSize : 35}}>Settings Screen</Text>
      </View>
    )
  }
}


