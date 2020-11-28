import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

export default function DrawerToggle({navigation}) {
  return (
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
      <Icon
        name="menu"
        type="material-community"
      />
    </TouchableOpacity>
  );
}
