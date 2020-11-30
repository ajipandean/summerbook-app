import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, ScrollView, Image, StyleSheet} from 'react-native';
import {Button, Input} from 'react-native-elements';

import bookReadingIllustration from '../../assets/illustrations/book_reading.png';

export default function LoginScreen() {
  const {navigate} = useNavigation();
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
            placeholder="ajikun@gmail.com"
            leftIcon={{
              name: 'at',
              type: 'material-community',
              color: '#888',
              style: {marginRight: 8},
            }}
          />
          <Input
            secureTextEntry
            label="Password"
            placeholder="******"
            inputContainerStyle={{width: '100%'}}
            leftIcon={{
              name: 'lock-outline',
              type: 'material-community',
              color: '#888',
              style: {marginRight: 8},
            }}
            rightIcon={{
              name: 'eye-outline',
              type: 'material-community',
              color: '#888',
              onPress: () => {},
            }}
          />
          <Button
            title="Login"
            onPress={() => navigate('MainDrawer', {screen: 'Home'})}
          />
        </View>
      </View>
    </ScrollView>
  );
}
