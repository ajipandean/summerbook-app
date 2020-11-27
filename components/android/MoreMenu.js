import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {ListItem, BottomSheet, Icon} from 'react-native-elements';

export default function MoreMenu() {
  const [visible, setVisible] = useState(false);
  const items = [
    {title: 'Send feedback', bottomDivider: false},
    {title: 'Rate Summerbook', bottomDivider: true},
    {
      title: 'Close',
      bottomDivider: false,
      onPress: () => setVisible(false),
    },
  ];
  return (
    <>
      <TouchableOpacity onPress={() => setVisible(!visible)}>
        <Icon
          name="dots-horizontal"
          type="material-community"
        />
      </TouchableOpacity>
      <BottomSheet
        isVisible={visible}
        modalProps={{
          statusBarTranslucent: true,
        }}
      >
        {items.map((item, i) => (
          <ListItem
            key={i}
            bottomDivider={item.bottomDivider}
            onPress={item.onPress}
          >
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>
    </>
  );
}
