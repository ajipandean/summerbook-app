import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, ScrollView} from 'react-native';

import BooksCarousel from '../../components/android/home/BooksCarousel';

export default function HomeScreen() {
  const {navigate} = useNavigation();
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <BooksCarousel navigate={navigate}/>
      </ScrollView>
    </View>
  );
}
