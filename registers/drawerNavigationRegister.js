import React from 'react';
import {View} from 'react-native';

import HomeScreen from '../screens/HomeScreen';

const About = () => <View/>;

export default [
  {
    name: 'Home',
    icon: 'home-variant-outline',
    component: HomeScreen,
  },
  {
    name: 'About',
    icon: 'information-outline',
    component: About,
  },
];
