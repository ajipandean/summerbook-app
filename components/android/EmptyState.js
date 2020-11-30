import React from 'react';
import {View, Image} from 'react-native';
import {Text} from 'react-native-elements';

export default function EmptyState({field, type}) {
  const images = {
    collection: require('../../assets/illustrations/book_shelves.png'),
    comments: require('../../assets/illustrations/annotation.png'),
  };
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    }}>
      <Image
        style={{
          width: '100%',
          height: 140,
          resizeMode: 'contain',
        }}
        source={images[type]}
      />
      <Text h4 h4Style={{textAlign: 'center'}}>Belum ada {field}</Text>
    </View>
  );
}
