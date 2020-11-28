import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ListItem} from 'react-native-elements';

const lists = [
  {
    section: 'App',
    items: [
      {
        title: 'About',
        icon: 'information-outline',
        onPress: () => {},
        bottomDivider: true,
      },
      {
        title: 'Terms of service',
        icon: null,
        onPress: () => {},
        bottomDivider: true,
      },
      {
        title: 'Privacy policy',
        icon: null,
        onPress: () => {},
        bottomDivider: false,
      },
    ],
  },
  {
    items: [
      {
        title: 'Rate Summerbook',
        icon: null,
        onPress: () => {},
        bottomDivider: true,
      },
      {
        title: 'Send feedback',
        icon: null,
        onPress: () => {},
        bottomDivider: false,
      },
    ],
  },
];

export default function SettingsScreen() {
  const styles = StyleSheet.create({
    list_container: {
      marginTop: 8,
      borderColor: '#e0e0e0',
      borderTopWidth: 1,
      borderBottomWidth: 1,
    },
  });
  return (
    <View style={{flex: 1}}>
      {lists.map((list, i) => (
        <View
          key={i}
          style={styles.list_container}
        >
          {list.items.map((item, i) => (
            <ListItem
              key={i}
              bottomDivider={item.bottomDivider}
              onPress={() => {}}
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
