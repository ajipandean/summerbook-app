import React from 'react';
import {View} from 'react-native';

import HomeScreen from '../screens/HomeScreen';

const About = () => <View/>;
const Settings = () => <View/>;

export default [
  {
    name: 'Home',
    icon: {
      active: 'home-variant',
      inactive: 'home-variant-outline',
    },
    component: HomeScreen,
  },
  {
    name: 'About',
    icon: {
      active: 'information',
      inactive: 'information-outline',
    },
    component: About,
  },
  {
    name: 'Settings',
    icon: {
      active: 'settings',
      inactive: 'settings-outline',
    },
    component: Settings,
  },
];
