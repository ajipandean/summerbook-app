import React, {useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Text, Avatar, ThemeConsumer} from 'react-native-elements';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import EmptyState from '../../components/android/EmptyState';

export default function ProfileScreen() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'collection', title: 'Koleksi saya'},
    {key: 'comments', title: 'Komentar'},
  ]);
  const styles = StyleSheet.create({
    avatar: {
      width: 80,
      height: 80,
      marginRight: 16,
    },
    box: {
      backgroundColor: 'white',
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: '#e0e0e0',
      marginTop: 8,
    },
  });
  const renderScene = SceneMap({
    collection: () => <EmptyState field="Koleksi" type="collection"/>,
    comments: () => <EmptyState field="Komentar" type="comments"/>,
  });
  return (
    <ThemeConsumer>
      {({theme}) => (
        <View style={{flex: 1}}>
          <View style={[styles.box, {
            padding: 16,
            flexDirection: 'row',
          }]}>
            <Avatar
              rounded
              style={styles.avatar}
              source={{uri: 'https://i.pinimg.com/236x/ae/2b/f1/ae2bf1b23b3f664b0b2626fb531071a8.jpg'}}
            />
            <View style={{flex: 1}}>
              <Text h4 h4Style={{marginBottom: 4}}>Pandean Mertayasa</Text>
              <Text style={{marginBottom: 8, color: '#888'}}>@ajipandean23</Text>
              <Text style={{marginBottom: 4}}>https://ajipandean.github.com</Text>
              <Text>Jalan Sukma Kesuma Nomor 80. Banjar Tebesaya 80571</Text>
            </View>
          </View>
          <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{width: Dimensions.get('window').width}}
            renderTabBar={(props) => (
              <TabBar
                {...props}
                activeColor={theme.colors.primary}
                inactiveColor="#888"
                style={{
                  backgroundColor: 'transparent',
                  elevation: 0,
                  borderBottomWidth: 1,
                  borderColor: '#e0e0e0',
                }}
                indicatorStyle={{backgroundColor: theme.colors.primary}}
              />
            )}
          />
        </View>
      )}
    </ThemeConsumer>
  );
}
