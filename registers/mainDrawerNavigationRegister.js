import React from 'react';
import {View} from 'react-native';

import HomeScreen from '../screens/HomeScreen';

const About = () => <View/>;
const Settings = () => <View/>;

export default [
  {
    name: 'Home',
    icon: 'home-variant-outline',
    component: HomeScreen,
    options: {},
  },
  {
    name: 'About',
    icon: 'information-outline',
    component: About,
    options: {},
  },
  {
    name: 'Settings',
    icon: 'settings-outline',
    component: Settings,
    options: {},
  },
];
