import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, ListItem} from 'react-native-elements';

const items = [
  {
    title: 'Ringkasan versi Aji Pandean',
    outline: 8,
    minutes: 4,
    onPress: () => {},
    bottomDivider: true,
  },
  {
    title: 'Ringkasan versi Ashiap mantuls',
    outline: 8,
    minutes: 4,
    onPress: () => {},
    bottomDivider: true,
  },
  {
    title: 'Ringkasan versi Kampuretto',
    outline: 8,
    minutes: 4,
    onPress: () => {},
    bottomDivider: false,
  },
];

export default function SummariesBox() {
  const styles = StyleSheet.create({
    container: {
      paddingTop: 16,
      paddingBottom: 8,
      marginTop: 8,
      borderColor: '#e0e0e0',
      borderTopWidth: 1,
      borderBottomWidth: 1,
      backgroundColor: 'white',
    },
    head: {
      fontSize: 18,
      marginHorizontal: 16,
      marginBottom: 8,
    },
  });
  return (
    <View style={styles.container}>
      <Text h4 h4Style={styles.head}>3 ringkasan</Text>
      <View>
        {items.map((item, i) => (
          <ListItem
            key={i}
            bottomDivider={item.bottomDivider}
            onPress={item.onPress}
            containerStyle={{paddingVertical: 8}}
          >
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
              <ListItem.Subtitle>{item.outline} outline &bull; {item.minutes} menit</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron
              size={24}
              color="#888"
            />
          </ListItem>
        ))}
      </View>
    </View>
  );
}
