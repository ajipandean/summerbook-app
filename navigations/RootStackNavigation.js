import React, {useEffect, useReducer, useMemo} from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {ToastAndroid} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AuthContext from '../context/AuthContext';
import firebase from '../firebase.config';
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
      dispatch({type: 'RESTORE_TOKEN', uid});
    }
    bootstrapAsync();
  }, []);
  const authContext = useMemo(() => ({
    async login({email, password}) {
      try {
        const data = await firebase.auth().signInWithEmailAndPassword(email, password);
        const uid = data.user.uid;
        await AsyncStorage.setItem('uid', uid);
        dispatch({type: 'LOGIN', uid});
      } catch (err) {
        ToastAndroid.show(err.message, ToastAndroid.LONG);
      }
    },
    async logout() {
      try {
        await AsyncStorage.removeItem('uid');
        dispatch({type: 'LOGOUT'});
      } catch (err) {
        console.error(err);
      }
    },
  }));
  return (
    <AuthContext.Provider value={authContext}>
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
    </AuthContext.Provider>
  );
}
