import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

export default function HeaderActions() {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
    },
    action: {
      marginLeft: 16,
    },
  });
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {}}
        style={styles.action}
      >
        <Icon
          name="download"
          type="material-community"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {}}
        style={styles.action}
      >
        <Icon
          name="share-variant"
          type="material-community"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {}}
        style={styles.action}
      >
        <Icon
          name="bookmark-outline"
          type="material-community"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {}}
        style={styles.action}
      >
        <Icon
          name="heart-outline"
          type="material-community"
        />
      </TouchableOpacity>
    </View>
  );
}
