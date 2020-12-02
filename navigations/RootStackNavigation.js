import React, {useEffect, useReducer} from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import appStackNavigationRegister from '../registers/appStackNavigationRegister';
import authStackNavigationRegister from '../registers/authStackNavigationRegister';

const Stack = createStackNavigator();

export default function RootStackNavigation() {
  const [state, dispatch] = useReducer(
      (prevState, action) => {
        switch (action.type) {
          case 'RESTORE_TOKEN':
          case 'LOGIN':
            return {
              ...prevState,
              uid: action.uid,
              isLogout: false,
            };
          case 'LOGOUT':
            return {
              ...prevState,
              uid: null,
              isLogout: true,
            };
        }
      },
      {isLogout: false, uid: null},
  );
  useEffect(() => {
    async function bootstrapAsync() {
      let uid;
      try {
        uid = await AsyncStorage.getItem('uid');
      } catch (err) {
        console.error(err);
        uid = null;
      }
      dispatch({type: 'LOGOUT', uid});
    }
    bootstrapAsync();
  }, []);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      {state.uid === null ? (
        <>
          {authStackNavigationRegister.map((s) => (
            <Stack.Screen
              key={s.name}
              name={s.name}
              component={s.component}
              options={s.options}
            />
          ))}
        </>
      ) : (
        <>
          {appStackNavigationRegister.map((s) => (
            <Stack.Screen
              key={s.name}
              name={s.name}
              component={s.component}
              options={s.options}
            />
          ))}
        </>
      )}
    </Stack.Navigator>
  );
}
