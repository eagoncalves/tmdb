import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import Routes from './src/routes';
import store from './src/store';
import { Provider } from 'react-redux';

export default function App() {

  return (
    <>
       <Provider store={store}>
        <StatusBar 
              barStyle={'light-content'}
              hidden
          />
        <Routes />
      </Provider>
    </>
  );
}
