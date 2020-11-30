import HomeScreen from '../screens/MainDrawer/HomeScreen';
import SettingsScreen from '../screens/MainDrawer/SettingsScreen';
import ProfileScreen from '../screens/MainDrawer/ProfileScreen';

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
    name: 'Profile',
    icon: 'account-circle-outline',
    component: ProfileScreen,
    options: {
      title: 'Profil',
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
