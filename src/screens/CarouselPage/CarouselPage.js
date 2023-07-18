import React, { useState, useRef } from 'react';
import { View, StyleSheet, FlatList, Animated, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import slides from './CarouselSlides';

import CarouselPageItem from './CarouselPageItem';
import CarouselPaginator from './CarouselPaginator';

export default CarouselPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const slidesRef = useRef(null);
  const navigation = useNavigation();

  const handleNext = () => {
    slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
  };

  const handleGoToMenu = () => {
    navigation.navigate('Menu');
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
        <FlatList
          data={slides}
          renderItem={({ item, index }) => (
<CarouselPageItem item={item} isLastItem={index === slides.length - 1} navigation={navigation} />
          )}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
            useNativeDriver: false,
          })}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      <CarouselPaginator data={slides} scrollX={scrollX} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
