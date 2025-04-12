import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import OverviewComp from './OverviewComp';
import {StyleSheet, View} from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTabComp = () => {
  return (
    <View style={styles.bottomNav}>
      <FontAwesome5 name="home" size={20} color="#4F46E5" />
      <FontAwesome5 name="users" size={20} color="#9CA3AF" />
      <FontAwesome5 name="layer-group" size={20} color="#9CA3AF" />
      <FontAwesome5 name="cog" size={20} color="#9CA3AF" />
    </View>
  );
};
const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    backgroundColor: '#fff',
    borderTopColor: '#E5E7EB',
    borderTopWidth: 1,
    marginTop: 20,
  },
});
export default BottomTabComp;
