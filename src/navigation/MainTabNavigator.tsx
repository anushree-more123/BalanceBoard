import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import OverviewComp from '../components/OverviewComp';
// @ts-ignore
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Dashboard from '../screens/Dashboard';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName = '';
          if (route.name === 'Overview') iconName = 'chart-areaspline-variant';
          else if (route.name === 'Groups') iconName = 'folder-outline';
          else if (route.name === 'Team') iconName = 'account-group-outline';
          else if (route.name === 'Settings') iconName = 'cog-outline';
          return <Icon name={iconName} color={color} size={size} />;
        },
        tabBarActiveTintColor: '#2F3BAD',
        tabBarInactiveTintColor: '#A0ADBC',
        headerShown: false,
      })}>
      <Tab.Screen name="Overview" component={Dashboard} />
      <Tab.Screen name="Groups" component={OverviewComp} />
      <Tab.Screen name="Team" component={OverviewComp} />
      <Tab.Screen name="Settings" component={OverviewComp} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
