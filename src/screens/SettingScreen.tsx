import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {colors} from '../theme/colors';
import Header from '../components/Common/Header';

const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.compContainer}>
        <Text style={styles.text}>Setting Screen</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.ghostWhite, padding: 16},
  compContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
  },
});

export default SettingScreen;
