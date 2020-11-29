import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import ViewPager from '@react-native-community/viewpager';

export default function ReadingScreen() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    page: {
      padding: 16,
    },
    placeholder: {
      fontSize: 12,
      color: '#888',
    },
    title: {
      marginBottom: 8,
      lineHeight: 28,
    },
    body: {
      fontSize: 18,
      lineHeight: 24,
    },
  });
  return (
    <View style={styles.container}>
      <ViewPager
        style={{flex: 1}}
        initialPage={0}
      >
        {[1, 2, 3].map((i) => (
          <ScrollView key={i}>
            <View style={styles.page}>
              <Text h4 h4Style={styles.title}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores eius, incidunt autem!</Text>
              <Text style={styles.body}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis ipsa iusto impedit consequatur, nobis consectetur numquam molestiae aspernatur adipisci reiciendis maiores provident laudantium magni distinctio ea fuga nihil eius veniam nostrum nemo laboriosam maxime, ad voluptate. Fuga dolores, culpa quae facilis labore qui cumque, aliquam autem necessitatibus, quasi incidunt sed error, accusantium suscipit distinctio possimus. Sit voluptatum nulla ullam quos optio qui ipsam maiores nesciunt, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis incidunt quisquam aliquam perspiciatis nesciunt aperiam sit optio, magnam tenetur cum iure vitae itaque minima ex minus quidem. Tempora repudiandae, reiciendis atque aut accusamus sint itaque ratione, nesciunt cum rem natus hic adipisci voluptate ipsum laudantium quaerat commodi nihil amet inventore! quas. Laboriosam vitae asperiores quae vero deleniti dolore ad, quidem magnam aliquid distinctio. Saepe provident natus dignissimos consequuntur architecto consectetur repellat blanditiis? Mollitia sint delectus officia optio, tempore unde itaque dolores provident hic possimus ratione!</Text>
            </View>
          </ScrollView>
        ))}
      </ViewPager>
    </View>
  );
}
