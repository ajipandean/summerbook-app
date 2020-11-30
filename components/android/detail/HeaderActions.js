import React from 'react';
import {Icon} from 'react-native-elements';
import {View, TouchableOpacity} from 'react-native';

export default function HeaderActions({actions}) {
  return (
    <View style={{flexDirection: 'row'}}>
      {actions.map((a, i) => (
        <TouchableOpacity
          key={i}
          style={{marginLeft: 16}}
          onPress={() => {}}
        >
          <Icon
            name={a.icon}
            type="material-community"
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}
