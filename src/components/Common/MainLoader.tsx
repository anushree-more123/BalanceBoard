import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';

const MainLoader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.persianBlue} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainLoader;
