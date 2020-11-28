import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import {ListItem} from 'react-native-elements';

const lists = [
  {
    items: [
      {
        title: 'About',
        icon: 'information-outline',
        onPress: (navigate) => navigate('SettingsStack', {screen: 'About'}),
        bottomDivider: true,
      },
      {
        title: 'Terms of service',
        icon: null,
        onPress: (navigate) => navigate('SettingsStack', {screen: 'Terms of service'}),
        bottomDivider: true,
      },
      {
        title: 'Privacy policy',
        icon: null,
        onPress: (navigate) => navigate('SettingsStack', {screen: 'Privacy policy'}),
        bottomDivider: false,
      },
    ],
  },
  {
    items: [
      {
        title: 'Send feedback',
        icon: null,
        onPress: (navigate) => {},
        bottomDivider: true,
      },
      {
        title: 'Rate Summerbook on Google Play',
        icon: null,
        onPress: (navigate) => {},
        bottomDivider: false,
      },
    ],
  },
];

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
              onPress={() => item.onPress(navigate)}
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
