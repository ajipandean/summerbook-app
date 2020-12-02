import React, {useState, useContext} from 'react';
import {View, ScrollView, Image, StyleSheet} from 'react-native';
import {Button, Input, Text} from 'react-native-elements';

import AuthContext from '../../context/AuthContext';
import bibliophileIllustration from '../../assets/illustrations/bibliophile.png';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const {register} = useContext(AuthContext);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: 36,
      paddingHorizontal: 16,
    },
    illustration: {
      width: '100%',
      height: 220,
      resizeMode: 'contain',
      marginBottom: 16,
    },
    title: {
      textAlign: 'center',
      marginBottom: 16,
    },
  });
  async function handleRegister() {
    setLoading(true);
    try {
      if (confirmPass !== password) {
        setError(true);
      } else {
        await register({email, password});
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <Image
          style={styles.illustration}
          source={bibliophileIllustration}
        />
        <View>
          <Text h4 h4Style={{
            marginLeft: 10,
            marginBottom: 16,
          }}>Register an account</Text>
          <Input
            autoFocus
            label="Email"
            value={email}
            onChangeText={(value) => setEmail(value)}
            placeholder="ajikun@gmail.com"
            leftIcon={{
              name: 'at',
              type: 'material-community',
              color: '#888',
              style: {marginRight: 8},
            }}
          />
          <Input
            secureTextEntry={!showPassword}
            label="Password"
            placeholder="******"
            value={password}
            onChangeText={(value) => setPassword(value)}
            inputContainerStyle={{width: '100%'}}
            leftIcon={{
              name: 'lock-outline',
              type: 'material-community',
              color: '#888',
              style: {marginRight: 8},
            }}
            rightIcon={{
              name: showPassword ? 'eye-outline' : 'eye-off-outline',
              type: 'material-community',
              color: '#888',
              onPress: () => setShowPassword(!showPassword),
            }}
          />
          <Input
            secureTextEntry={!showPassword}
            label="Confirm password"
            placeholder="******"
            value={confirmPass}
            onChangeText={(value) => setConfirmPass(value)}
            errorMessage={error ? 'Confirm password doesn\'t match' : null}
            inputContainerStyle={{width: '100%'}}
            leftIcon={{
              name: 'lock-outline',
              type: 'material-community',
              color: '#888',
              style: {marginRight: 8},
            }}
            rightIcon={{
              name: showPassword ? 'eye-outline' : 'eye-off-outline',
              type: 'material-community',
              color: '#888',
              onPress: () => setShowPassword(!showPassword),
            }}
          />
          <Button
            loading={loading}
            title="Register"
            containerStyle={{
              alignSelf: 'flex-end',
              width: 80,
              marginRight: 10,
            }}
            onPress={handleRegister}
          />
        </View>
      </View>
    </ScrollView>
  );
}
