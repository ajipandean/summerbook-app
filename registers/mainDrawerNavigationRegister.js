import HomeScreen from '../screens/MainDrawer/HomeScreen';
import SettingsScreen from '../screens/MainDrawer/SettingsScreen';

export default [
  {
    name: 'Home',
    icon: 'home-variant-outline',
    component: HomeScreen,
    options: {
      title: 'Beranda',
    },
  },
  {
    name: 'Settings',
    icon: 'settings-outline',
    component: SettingsScreen,
    options: {
      title: 'Pengaturan',
    },
  },
];
