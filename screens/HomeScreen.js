import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Header, Icon, Divider} from 'react-native-elements';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';

export default function HomeScreen() {
  const {openDrawer} = useNavigation();
  const styles = StyleSheet.create({
    brand: {fontSize: 20},
  });
  return (
    <View>
      <Header
        placement="left"
        backgroundColor="#fff"
        centerComponent={() => <Text style={styles.brand}>Summerbook</Text>}
        leftComponent={() => (
          <TouchableOpacity onPress={() => openDrawer()}>
            <Icon
              name="menu"
              type="material-community"
            />
          </TouchableOpacity>
        )}
        rightComponent={() => (
          <Icon
            name="dots-horizontal"
            type="material-community"
          />
        )}
      />
      <Divider/>
    </View>
  );
}
