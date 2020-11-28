import React, {useRef} from 'react';
import {ListItem} from 'react-native-elements';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

export default function BooksSlider({navigate}) {
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
      marginBottom: 4,
      fontWeight: 'bold',
    },
    book_author: {
      color: '#888',
      marginBottom: 8,
      fontSize: 12,
    },
    book_desc: {
      color: '#888',
      lineHeight: 22,
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
          <TouchableOpacity
            onPress={() => navigate('Detail')}
            style={styles.image_container}
          >
            <Image
              style={styles.carousel_image}
              source={{uri: item}}
            />
          </TouchableOpacity>
        )}
      />
      <View style={styles.book_detail}>
        <Text style={styles.book_title}>Don&apos;t Go There</Text>
        <Text style={styles.book_author}>oleh Juliana Silva</Text>
        <Text style={styles.book_desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus delectus voluptatibus sed iste, tempora obcaecati blanditiis quae earum incidunt optio non iure libero tenetur. Odit.</Text>
      </View>
      <View>
        {[true, true, false].map((b, i) => (
          <ListItem
            key={i}
            onPress={() => {}}
            bottomDivider={b}
            containerStyle={{paddingVertical: 8}}
          >
            <ListItem.Content>
              <ListItem.Title>Rangkuman versi Aji Pandean</ListItem.Title>
              <ListItem.Subtitle>8 outline &bull; 5 menit</ListItem.Subtitle>
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
