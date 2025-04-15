import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// @ts-ignore
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Dashboard from '../screens/Dashboard';
import GroupsScreen from '../screens/GroupsScreen';
import TeamScreen from '../screens/TeamScreen';
import SettingScreen from '../screens/SettingScreen';
import {colors} from '../theme/colors';

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
        tabBarActiveTintColor: colors.persianBlue,
        tabBarInactiveTintColor: colors.violet,
        headerShown: false,
      })}>
      <Tab.Screen name="Overview" component={Dashboard} />
      <Tab.Screen name="Groups" component={GroupsScreen} />
      <Tab.Screen name="Team" component={TeamScreen} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
