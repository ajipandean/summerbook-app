import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import rootStackNavigationRegister from '../registers/rootStackNavigationRegister';

const Stack = createStackNavigator();

export default function RootStackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="DrawerNavigation"
      screenOptions={{headerShown: false}}
    >
      {rootStackNavigationRegister.map((s) => (
        <Stack.Screen
          key={s.name}
          name={s.name}
          component={s.component}
        />
      ))}
    </Stack.Navigator>
  );
}
