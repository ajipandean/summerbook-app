import React from 'react';
import {View} from 'react-native';

import HomeScreen from '../screens/HomeScreen';

const Settings = () => <View/>;

export default [
  {
    name: 'Home',
    icon: 'home-variant-outline',
    component: HomeScreen,
    options: {},
  },
  {
    name: 'Settings',
    icon: 'settings-outline',
    component: Settings,
    options: {},
  },
];
