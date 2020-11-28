import React, {Fragment} from 'react';
import {Header, Text, Divider} from 'react-native-elements';
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
      initialRouteName="DrawerNavigation"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        header: ({scene, navigation}) => (
          <Fragment>
            <Header
              placement="left"
              backgroundColor="#fff"
              centerComponent={() => <Text h4>{scene.route.name}</Text>}
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
