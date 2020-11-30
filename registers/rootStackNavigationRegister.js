import React from 'react';

import MainDrawerNavigation from '../navigations/MainDrawerNavigation';
import SettingsStackNavigation from '../navigations/SettingsStackNavigation';

import WelcomeScreen from '../screens/RootStack/WelcomeScreen';
import LoginScreen from '../screens/RootStack/LoginScreen';
import RegisterScreen from '../screens/RootStack/RegisterScreen';
import DetailScreen from '../screens/RootStack/DetailScreen';
import ReadingScreen from '../screens/RootStack/ReadingScreen';

import TopHeader from '../components/android/TopHeader';

export default [
  {
    name: 'Welcome',
    component: WelcomeScreen,
    options: {},
  },
  {
    name: 'Login',
    component: LoginScreen,
    options: {},
  },
  {
    name: 'Register',
    component: RegisterScreen,
    options: {},
  },
  {
    name: 'MainDrawer',
    component: MainDrawerNavigation,
    options: {},
  },
  {
    name: 'SettingsStack',
    component: SettingsStackNavigation,
    options: {},
  },
  {
    name: 'Detail',
    component: DetailScreen,
    options: {
      headerShown: true,
      gestureEnabled: true,
      gestureDirection: 'horizontal',
      header: ({scene, navigation}) => (
        <TopHeader
          navigation={navigation}
          hasActions={true}
          actions={[
            {icon: 'bookmark-plus-outline'},
            {icon: 'share-variant'},
            {icon: 'heart-outline'},
          ]}
        />
      ),
    },
  },
  {
    name: 'Reading',
    component: ReadingScreen,
    options: {
      headerShown: true,
      header: ({scene, navigation}) => (
        <TopHeader
          navigation={navigation}
          hasActions={false}
        />
      ),
    },
  },
];
