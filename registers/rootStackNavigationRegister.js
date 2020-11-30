import MainDrawerNavigation from '../navigations/MainDrawerNavigation';
import SettingsStackNavigation from '../navigations/SettingsStackNavigation';

import WelcomeScreen from '../screens/RootStack/WelcomeScreen';
import LoginScreen from '../screens/RootStack/LoginScreen';
import RegisterScreen from '../screens/RootStack/RegisterScreen';
import DetailScreen from '../screens/RootStack/DetailScreen';
import ReadingScreen from '../screens/RootStack/ReadingScreen';

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
    },
  },
  {
    name: 'Reading',
    component: ReadingScreen,
    options: {
      headerShown: true,
    },
  },
];
