import React, {useState, useContext, useEffect} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Text, Avatar, ThemeConsumer, Button} from 'react-native-elements';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import AuthContext from '../../context/AuthContext';
import firebase from '../../firebase.config';
import EmptyState from '../../components/android/EmptyState';

const defaultAvatar = 'https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-picture-default-avatar-photo-placeholder-profile-picture-eps-file-easy-to-edit-125707135.jpg';

export default function ProfileScreen() {
  const [index, setIndex] = useState(0);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [routes] = useState([
    {key: 'collection', title: 'Koleksi saya'},
    {key: 'comments', title: 'Komentar'},
  ]);
  const {logout} = useContext(AuthContext);
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);
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
  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }
  return (
    <ThemeConsumer>
      {({theme}) => (
        <View style={{flex: 1}}>
          {user ? (
            <>
              <View style={[styles.box, {
                padding: 16,
                flexDirection: 'row',
              }]}>
                <Avatar
                  rounded
                  style={styles.avatar}
                  source={{uri: user.photoURL || defaultAvatar}}
                />
                <View style={{flex: 1}}>
                  <Text h4 h4Style={{marginBottom: 4}}>{user.displayName || 'Anonymus'}</Text>
                  <Text style={{marginBottom: 16, color: '#888'}}>{user.email}</Text>
                  <Button
                    loading={loading}
                    title="Logout"
                    buttonStyle={{backgroundColor: '#f5f5f5'}}
                    loadingStyle={{color: '#888'}}
                    titleStyle={{color: '#888'}}
                    onPress={handleLogout}
                  />
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
            </>
          ) : (
            <>
              <Text>No one has logged in yet</Text>
            </>
          )}
        </View>
      )}
    </ThemeConsumer>
  );
}
