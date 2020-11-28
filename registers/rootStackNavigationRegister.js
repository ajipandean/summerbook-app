import MainDrawerNavigation from '../navigations/MainDrawerNavigation';
import SettingsStackNavigation from '../navigations/SettingsStackNavigation';

import DetailScreen from '../screens/RootStack/DetailScreen';

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
      gestureResponseDistance: {
        horizontal: 130,
      },
    },
  },
];
