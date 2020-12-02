import React, {useState, useContext} from 'react';
import {View, ScrollView, Image, StyleSheet} from 'react-native';
import {Button, Input} from 'react-native-elements';

import AuthContext from '../../context/AuthContext';
import bookReadingIllustration from '../../assets/illustrations/book_reading.png';

export default function LoginScreen() {
  const {login} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
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
  async function handleLogin() {
    setLoading(true);
    try {
      await login({email, password});
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <Image
          style={styles.illustration}
          source={bookReadingIllustration}
        />
        <View>
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
          <Button
            loading={loading}
            title="Login"
            containerStyle={{
              alignSelf: 'flex-end',
              width: 80,
              marginRight: 10,
            }}
            onPress={handleLogin}
          />
        </View>
      </View>
    </ScrollView>
  );
}
