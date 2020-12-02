import WelcomeScreen from '../screens/RootStack/WelcomeScreen';
import LoginScreen from '../screens/RootStack/LoginScreen';
import RegisterScreen from '../screens/RootStack/RegisterScreen';

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
];
