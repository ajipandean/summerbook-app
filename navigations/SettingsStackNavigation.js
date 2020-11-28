import React, {Fragment} from 'react';
import {Header, Text, Divider} from 'react-native-elements';
import {createStackNavigator} from '@react-navigation/stack';

import NavigationBack from '../components/android/NavigationBack';
import settingsStackNavigationRegister from '../registers/settingsStackNavigationRegister';

const Stack = createStackNavigator();

export default function SettingsStackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({scene, navigation}) => (
          <Fragment>
            <Header
              placement="left"
              backgroundColor="#fff"
              centerComponent={() => <Text h4>{scene.descriptor.options.title}</Text>}
              leftComponent={() => <NavigationBack goBack={navigation.goBack}/>}
            />
            <Divider/>
          </Fragment>
        ),
      }}
    >
      {settingsStackNavigationRegister.map((s) => (
        <Stack.Screen
          key={s.name}
          name={s.name}
          component={s.component}
          options={{...s.options}}
        />
      ))}
    </Stack.Navigator>
  );
}
