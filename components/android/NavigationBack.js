import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

export default function NavigationBack({goBack}) {
  return (
    <TouchableOpacity onPress={() => goBack()}>
      <Icon
        name="arrow-left"
        type="material-community"
      />
    </TouchableOpacity>
  );
}
