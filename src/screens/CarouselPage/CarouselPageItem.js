import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions, TouchableOpacity, Image } from 'react-native';

export default CarouselPageItem = ({ item, isLastItem, navigation }) => {
  const { width } = useWindowDimensions();

  const handleGoToMenu = () => {
    navigation.navigate('MenuPage');
  };

  return (
    <View style={[styles.container, { width }]}>
      <Image source={item.image} style={[styles.image, { width, resizeMode: 'contain' }]} />

      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        {isLastItem && (
          <TouchableOpacity style={styles.button} onPress={handleGoToMenu}>
            <Text style={styles.buttonText}>GET STARTED</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 0.35,
    justifyContent: 'center',
  },
  content: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
    marginTop: 25,
  },
  title: {
    fontWeight: '800',
    fontSize: 28,
    marginBottom: 25,
    color: '#493d8a',
    textAlign: 'center',
  },
  description: {
    fontWeight: '300',
    color: '#62656b',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 6,
    marginTop: 35,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
