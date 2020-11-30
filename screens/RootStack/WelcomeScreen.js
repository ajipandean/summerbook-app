import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, StyleSheet, Image} from 'react-native';
import {Text, SocialIcon, ThemeConsumer} from 'react-native-elements';

import bookLoverIllustration from '../../assets/illustrations/book_lover.png';

export default function WelcomeScreen() {
  const {navigate} = useNavigation();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
    },
    illustration: {
      width: '80%',
      height: 240,
      resizeMode: 'cover',
      marginBottom: 16,
    },
    title: {marginBottom: 16},
  });
  return (
    <ThemeConsumer>
      {({theme}) => (
        <View style={styles.container}>
          <Image
            style={styles.illustration}
            source={bookLoverIllustration}
          />
          <View>
            <Text h3 h3Style={styles.title}>Welcome to Summerbook</Text>
            <SocialIcon
              button
              type="envelope"
              underlayColor={theme.colors.primary}
              style={{backgroundColor: theme.colors.primary}}
              title="Login with Email"
              onPress={() => navigate('Login')}
            />
            <SocialIcon
              button
              type="google"
              title="Login with Google"
              onPress={() => {}}
            />
            <Text
              style={{
                marginTop: 20,
                textAlign: 'center',
                color: '#888',
              }}
              onPress={() => navigate('Register')}
            >
              Don&apos;t have an account? Register here
            </Text>
          </View>
        </View>
      )}
    </ThemeConsumer>
  );
}
