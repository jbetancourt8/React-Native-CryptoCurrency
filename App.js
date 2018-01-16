import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Navigator from './src/utils/routes';
import Store from './src/utils/store';


export default App = () => (
  <Provider store={Store}>
    <Navigator onNavigationStateChange={null} />
  </Provider>
);
