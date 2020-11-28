import React, {Fragment} from 'react';
import {Divider, Header} from 'react-native-elements';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import NavigationBack from '../components/android/NavigationBack';
import rootStackNavigationRegister from '../registers/rootStackNavigationRegister';

const Stack = createStackNavigator();

export default function RootStackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="MainDrawer"
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        header: ({scene, navigation}) => (
          <Fragment>
            <Header
              placement="left"
              backgroundColor="#fff"
              leftComponent={() => <NavigationBack goBack={navigation.goBack}/>}
            />
            <Divider/>
          </Fragment>
        ),
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
