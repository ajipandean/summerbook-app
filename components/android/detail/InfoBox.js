import React from 'react';
import {Text} from 'react-native-elements';
import {View, StyleSheet} from 'react-native';

export default function InfoBox({head, body}) {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      borderColor: '#e0e0e0',
      borderTopWidth: 1,
      borderBottomWidth: 1,
      marginTop: 8,
      padding: 16,
    },
    head: {
      fontSize: 18,
      marginBottom: 8,
    },
    body: {
      lineHeight: 20,
    },
  });
  return (
    <View style={styles.container}>
      <Text h4 h4Style={styles.head}>{head}</Text>
      <Text style={styles.body}>{body}</Text>
    </View>
  );
}
