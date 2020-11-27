import React, {useRef} from 'react';
import {ListItem} from 'react-native-elements';
import {View, Image, Text, StyleSheet, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';

export default function BooksSlider() {
  const carouselRef = useRef(null);
  const windowWidth = Dimensions.get('window').width;
  const images = [
    'https://marketplace.canva.com/EAD7YH8bebE/1/0/251w/canva-white-bold-text-thriller-mystery-book-cover-CejxvxrTCyg.jpg',
    'https://cdn.cp.adobe.io/content/2/rendition/283104a5-039b-40e3-bdaa-f7b1d28d5cc8/artwork/edc5bfda-4444-4807-875d-b73825d353ff/version/0/format/jpg/dimension/width/size/300',
    'https://marketplace.canva.com/EAD7YHrjZYY/1/0/251w/canva-blue-illustrated-stars-children%27s-book-cover-NEr4a_2BWkE.jpg',
    'https://damonza.com/wp-content/uploads/portfolio/fiction/Water%20&%20Flame%2006.jpg',
    'https://ecs7.tokopedia.net/img/cache/700/product-1/2018/9/28/4162462/4162462_9cfd138f-abc2-4f4e-9c12-b5abeb037b9a.jpg',
  ];
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: '#e0e0e0',
      marginTop: 8,
      paddingTop: 16,
      paddingBottom: 8,
    },
    image_container: {
      borderRadius: 8,
      width: 130,
      height: 200,
      overflow: 'hidden',
    },
    carousel_image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    book_detail: {
      paddingHorizontal: 16,
      paddingTop: 16,
      paddingBottom: 8,
    },
    book_title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    book_author: {color: '#888'},
    list_label: {
      marginHorizontal: 16,
      textTransform: 'uppercase',
      fontSize: 12,
      color: '#888',
    },
  });
  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        data={images}
        sliderWidth={windowWidth}
        itemWidth={140}
        itemHeight={200}
        inactiveSlideScale={0.9}
        inactiveSlideOpacity={0.5}
        containerCustomStyle={{paddingHorizontal: 16}}
        activeSlideAlignment="start"
        activeAnimationType="spring"
        renderItem={({item}) => (
          <View style={styles.image_container}>
            <Image
              style={styles.carousel_image}
              source={{uri: item}}
            />
          </View>
        )}
      />
      <View style={styles.book_detail}>
        <Text style={styles.book_title}>Don&apos;t Go There</Text>
        <Text style={styles.book_author}>by Juliana Silva</Text>
      </View>
      <View>
        {[1, 2, 3].map((i) => (
          <ListItem
            key={i}
            onPress={() => {}}
            containerStyle={{paddingVertical: 8}}
          >
            <ListItem.Content>
              <ListItem.Title>Summarised by Aji Pandean</ListItem.Title>
              <ListItem.Subtitle>8 outlines &bull; 5 mins &bull; 456 likes</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron
              size={24}
              color="#888"
            />
          </ListItem>
        ))}
      </View>
    </View>
  );
}
