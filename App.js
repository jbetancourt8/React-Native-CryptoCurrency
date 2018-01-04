import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import Store from './src/utils/Store';
import { HomeScreen } from './src';


export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <View style={{ flex: 1, backgroundColor: '#393939'}}>
          <HomeScreen />
        </View>
      </Provider>
    );
  }
}