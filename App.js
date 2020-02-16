import React, { useState, useEffect } from 'react';
import { StatusBar, ActivityIndicator } from 'react-native';
import Routes from './src/routes';
import store from './src/store';
import { Provider } from 'react-redux';
import * as Font from 'expo-font';

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(()=> {
    async function loadFonts() {
      await Font.loadAsync({
        'OpenSans': require('./src/assets/fonts/OpenSans.ttf'),
        'OpenSans-Bold': require('./src/assets/fonts/OpenSans-Bold.ttf')
      })
      setFontLoaded(true);
    }

    loadFonts();
  }, [])

  const _renderApp = () => (
      <>
        <StatusBar 
          barStyle={'light-content'}
          hidden
        />
        <Routes />
      </>
  )

  const _renderActivityIndicator = () => (
    <ActivityIndicator size='large'/>
  )

  return (
    <>
       <Provider store={store}>
        { fontLoaded ? _renderApp() : _renderActivityIndicator() }
      </Provider>
    </>
  );
}
