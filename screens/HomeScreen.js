import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Header, Icon, Divider} from 'react-native-elements';
import {View, ScrollView, TouchableOpacity, StyleSheet, Text} from 'react-native';

import MoreMenu from '../components/android/MoreMenu';
import BooksCarousel from '../components/android/home/BooksCarousel';

export default function HomeScreen() {
  const {openDrawer} = useNavigation();
  const styles = StyleSheet.create({
    brand: {fontSize: 20},
  });
  return (
    <View style={{flex: 1}}>
      <Header
        placement="left"
        backgroundColor="#fff"
        centerComponent={<Text style={styles.brand}>Summerbook</Text>}
        leftComponent={(
          <TouchableOpacity onPress={() => openDrawer()}>
            <Icon
              name="menu"
              type="material-community"
            />
          </TouchableOpacity>
        )}
        rightComponent={<MoreMenu/>}
      />
      <Divider/>
      <ScrollView>
        <BooksCarousel/>
      </ScrollView>
    </View>
  );
}
