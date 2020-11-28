import React, {Fragment} from 'react';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Header, Divider, Text} from 'react-native-elements';

import DrawerToggle from '../components/android/DrawerToggle';
import DrawerContent from '../components/android/DrawerContent';
import mainDrawerNavigationRegister from '../registers/mainDrawerNavigationRegister';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      intialRouteName="Home"
      drawerContent={(props) => <DrawerContent {...props}/>}
      overlayColor={0}
      drawerType="slide"
      screenOptions={{
        headerShown: true,
        header: ({scene}) => (
          <Fragment>
            <Header
              placement="left"
              backgroundColor="#fff"
              centerComponent={() => <Text h4>{scene.route.name}</Text>}
              leftComponent={() => <DrawerToggle navigation={scene.descriptor.navigation}/>}
            />
            <Divider/>
          </Fragment>
        ),
      }}
      drawerStyle={{
        borderRightWidth: 1,
        borderColor: '#e0e0e0',
      }}
      drawerContentOptions={{
        labelStyle: {fontWeight: 'bold'},
        itemStyle: {marginVertical: 0},
      }}
    >
      {mainDrawerNavigationRegister.map((s) => (
        <Drawer.Screen
          key={s.name}
          name={s.name}
          component={s.component}
          options={{
            ...s.options,
            drawerIcon: ({size, color}) => (
              <MaterialCommunityIcons
                name={s.icon}
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
