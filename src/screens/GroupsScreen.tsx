import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {colors} from '../theme/colors';

const GroupsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Group Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
  },
});

export default GroupsScreen;
