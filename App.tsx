import React from 'react';
import MainTabNavigator from './src/navigation/MainTabNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {PaperProvider} from 'react-native-paper';
import store from './src/store/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <MainTabNavigator />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

export default App;
