import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import drawerNavigationRegister from '../registers/drawerNavigationRegister';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator intialRouteName="Home">
      {drawerNavigationRegister.map((s) => (
        <Drawer.Screen
          key={s.name}
          name={s.name}
          component={s.component}
        />
      ))}
    </Drawer.Navigator>
  );
}
