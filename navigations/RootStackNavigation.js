import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import rootStackNavigationRegister from '../registers/rootStackNavigationRegister';

const Stack = createStackNavigator();

export default function RootStackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="MainDrawer"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerShown: false,
      }}
    >
      {rootStackNavigationRegister.map((s) => (
        <Stack.Screen
          key={s.name}
          name={s.name}
          component={s.component}
          options={s.options}
        />
      ))}
    </Stack.Navigator>
  );
}
