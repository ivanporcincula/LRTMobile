import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const MenuPage = ({ navigation }) => {
  const navigateToMenuPage = () => {
    navigation.navigate('TrainPage');
  };

  const navigateToTwitterPage = () => {
    navigation.navigate('TwitterPage');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome to the Train Tracking Demo</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={[styles.buttonBox, styles.buttonBoxMargin]}>
          <TouchableOpacity style={styles.button} onPress={navigateToTwitterPage}>
            <ImageBackground
              source={require('../../../assets/lrt-icon.png')}
              style={styles.buttonImage}
            >
            </ImageBackground>
          </TouchableOpacity>
          <Text style={styles.buttonText}>LRT-2 Announcements</Text>
        </View>
        <View style={styles.buttonBox}>
          <TouchableOpacity style={styles.button} onPress={navigateToMenuPage}>
            <ImageBackground
              source={require('../../../assets/train-icon.png')}
              style={styles.buttonImage}
            >
            </ImageBackground>
          </TouchableOpacity>
          <Text style={styles.buttonText}>Train Tracking System</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Explore and Enjoy!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9370DB',
  },
  header: {
    marginBottom: 40,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  buttonBox: {
    alignItems: 'center',
  },
  buttonBoxMargin: {
    marginRight: 20,
  },
  button: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  buttonImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
  },
  footer: {
    marginTop: 40,
  },
  footerText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
});

export default MenuPage;
