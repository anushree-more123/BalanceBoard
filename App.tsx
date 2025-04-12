import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Dashboard from './src/screens/Dashboard';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainTabNavigator from './src/navigation/MainTabNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {PaperProvider, Provider} from 'react-native-paper';

// const App = () => {
//   return (
//     <SafeAreaProvider>
//       <SafeAreaView style={styles.container}>
//         <Dashboard />
//       </SafeAreaView>
//     </SafeAreaProvider>
//   );
// };
const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <MainTabNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
