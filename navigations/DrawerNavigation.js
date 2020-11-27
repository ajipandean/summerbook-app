import React from 'react';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {createDrawerNavigator} from '@react-navigation/drawer';

import drawerNavigationRegister from '../registers/drawerNavigationRegister';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      intialRouteName="Home"
      drawerContentOptions={{
        labelStyle: {fontWeight: 'bold'},
        itemStyle: {
          marginVertical: 2,
          borderRadius: 8,
        },
      }}
    >
      {drawerNavigationRegister.map((s) => (
        <Drawer.Screen
          key={s.name}
          name={s.name}
          component={s.component}
          options={{
            drawerIcon: ({focused, size, color}) => (
              <MaterialCommunityIcons
                name={focused ? s.icon.active : s.icon.inactive}
                size={size}
                color={color}
              />
            ),
          }}
        />
      ))}
    </Drawer.Navigator>
  );
}
