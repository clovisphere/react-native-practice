import { DefaultTheme, NavigationContainer, ThemeProvider } from '@react-navigation/native';
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../reducers/peopleReducer';
import Navigation from './Navigation';

const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
  }
}

class App extends Component {
  render() {
    return (
      <>
      <StatusBar backgroundColor='#f5f5f5' barStyle='dark-content' />
      <Provider store={store}>
        <NavigationContainer >
          <Navigation />
        </NavigationContainer>
      </Provider>
      </>
    );
  }
}

export default App;