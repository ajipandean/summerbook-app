import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import {ListItem} from 'react-native-elements';

export default function SettingsScreen() {
  const {navigate} = useNavigation();
  const styles = StyleSheet.create({
    list_container: {
      marginTop: 8,
      borderColor: '#e0e0e0',
      borderTopWidth: 1,
      borderBottomWidth: 1,
    },
  });
  const lists = [
    [
      {
        title: 'Tentang',
        icon: 'information-outline',
        onPress: () => navigate('SettingsStack', {screen: 'About'}),
        bottomDivider: false,
      },
    ],
    [
      {
        title: 'Kirim feedback',
        icon: null,
        onPress: () => {},
        bottomDivider: true,
      },
      {
        title: 'Beri peringkat di Google Play',
        icon: null,
        onPress: () => {},
        bottomDivider: false,
      },
    ],
  ];
  return (
    <View style={{flex: 1}}>
      {lists.map((items, i) => (
        <View
          key={i}
          style={styles.list_container}
        >
          {items.map((item, i) => (
            <ListItem
              key={i}
              bottomDivider={item.bottomDivider}
              onPress={item.onPress}
              containerStyle={{paddingVertical: 8}}
            >
              <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron
                size={24}
                color="#888"
              />
            </ListItem>
          ))}
        </View>
      ))}
    </View>
  );
}
