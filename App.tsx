import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Dashboard from './src/screens/Dashboard';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import BottomTab from './src/components/BottomTab';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Dashboard />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
