import React from 'react';
import {Text} from 'react-native';

import MainDrawerNavigation from '../navigations/MainDrawerNavigation';

const Test = () => <Text>Ahisap</Text>;

export default [
  {
    name: 'Main',
    component: MainDrawerNavigation,
    options: {headerShown: false},
  },
  {
    name: 'About',
    component: Test,
    options: {},
  },
];
