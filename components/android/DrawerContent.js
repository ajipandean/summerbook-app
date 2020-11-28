import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {View, StyleSheet} from 'react-native';
import {Text, Divider} from 'react-native-elements';

export default function DrawerContent(props) {
  const styles = StyleSheet.create({
    header: {
      height: 52,
      justifyContent: 'center',
      padding: 12,
    },
    divider: {marginBottom: 12},
  });
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Text h4>Summerbook</Text>
      </View>
      <Divider style={styles.divider}/>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
