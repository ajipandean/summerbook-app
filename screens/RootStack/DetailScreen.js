import React from 'react';
import {Text, Image, Button} from 'react-native-elements';
import {View, StyleSheet, ScrollView} from 'react-native';

import InfoBox from '../../components/android/detail/InfoBox';
import SummariesBox from '../../components/android/detail/SummariesBox';

export default function DetailScreen() {
  const styles = StyleSheet.create({
    box: {
      backgroundColor: 'white',
      padding: 16,
      marginTop: 8,
      borderColor: '#e0e0e0',
      borderTopWidth: 1,
      borderBottomWidth: 1,
    },
    cover: {
      width: 130,
      height: 200,
      borderRadius: 8,
      resizeMode: 'cover',
      marginBottom: 16,
    },
    title: {
      fontSize: 20,
      marginBottom: 4,
      textAlign: 'center',
    },
    author: {
      color: '#888',
      fontSize: 12,
      marginBottom: 8,
      textAlign: 'center',
    },
    desc: {
      textAlign: 'center',
      color: '#888',
      marginBottom: 16,
    },
    button: {
      width: '100%',
    },
  });
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View style={[styles.box, {alignItems: 'center'}]}>
          <Image
            style={styles.cover}
            source={{uri: 'https://damonza.com/wp-content/uploads/portfolio/fiction/Water%20&%20Flame%2006.jpg'}}
          />
          <Text h4 h4Style={styles.title}>Water Shame Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
          <Text style={styles.author}>oleh Alenjandra Vega P. E. Padilla</Text>
          <Text style={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, in.</Text>
          <Button
            title="Beli di Gramedia"
            containerStyle={styles.button}
            icon={{
              name: 'cart-outline',
              size: 24,
              color: 'white',
              type: 'material-community',
            }}
          />
        </View>
        <InfoBox
          head="Apa yang dibahas dalam buku ini?"
          body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis nesciunt rem, error dicta id fuga temporibus ipsa porro molestiae. Error quisquam tempore aliquam quibusdam modi, at adipisci repudiandae, repellendus nemo, fuga voluptates commodi culpa atque blanditiis. Quos soluta veniam sed non eveniet, quis nostrum pariatur qui similique ratione, expedita doloribus."
        />
        <InfoBox
          head="Untuk siapa buku ini?"
          body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis nesciunt rem, error dicta id fuga temporibus ipsa porro molestiae. Error quisquam tempore aliquam quibusdam modi, at adipisci repudiandae, repellendus nemo, fuga voluptates commodi culpa atque blanditiis. Quos soluta veniam sed non eveniet, quis nostrum pariatur qui similique ratione, expedita doloribus."
        />
        <InfoBox
          head="Tentang penulis buku ini"
          body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis nesciunt rem, error dicta id fuga temporibus ipsa porro molestiae. Error quisquam tempore aliquam quibusdam modi, at adipisci repudiandae, repellendus nemo, fuga voluptates commodi culpa atque blanditiis. Quos soluta veniam sed non eveniet, quis nostrum pariatur qui similique ratione, expedita doloribus."
        />
        <SummariesBox/>
      </ScrollView>
    </View>
  );
}
