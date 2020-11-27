import React from 'react';
import {View} from 'react-native';

import HomeScreen from '../screens/HomeScreen';

const About = () => <View/>;
const Feedback = () => <View/>;

export default [
  {
    name: 'Home',
    component: HomeScreen,
  },
  {
    name: 'About',
    component: About,
  },
  {
    name: 'Feedback',
    component: Feedback,
  },
];
