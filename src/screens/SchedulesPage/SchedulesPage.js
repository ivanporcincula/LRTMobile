import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';


const SchedulesPage = ({ route }) => {
  const { station, etaText } = route.params;
  const etaTexts = etaText.split('\n');

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={require('../../../assets/train-station.png')}
          style={styles.stationIcon}
        />
        <Text style={styles.headerText}>{station} Train Schedules</Text>
      </View>
      <View style={styles.cardsContainer}>
        {etaTexts.map((schedule, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.scheduleItem}>
              <Image source={require('../../../assets/clock.png')} style={styles.clockIcon} />
              <Text style={styles.scheduleText}>{schedule}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Align container to the top
    backgroundColor: '#F4F4F4',
    padding: 15,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#333',
  },
  stationIcon: {
    width: 32,
    height: 32,
  },
  cardsContainer: {
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 19,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 15,
  },
  scheduleItem: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  clockIcon: {
    width: 20,
    height: 20,
    marginRight: 3,
  },
  scheduleText: {
    fontSize: 16,
    color: '#555',
  },
});

export default SchedulesPage;
