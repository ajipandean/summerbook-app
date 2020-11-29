import MainDrawerNavigation from '../navigations/MainDrawerNavigation';
import SettingsStackNavigation from '../navigations/SettingsStackNavigation';

import DetailScreen from '../screens/RootStack/DetailScreen';
import ReadingScreen from '../screens/RootStack/ReadingScreen';

export default [
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
