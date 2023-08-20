// SchedulesScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SchedulesPage = ({ route }) => {
  const { station } = route.params;

  // Sample data for different trains and their ETAs
  const trainSchedules = {
    'Antipolo': [
      { trainId: 1, eta: 50 },
      { trainId: 2, eta: 55 },
      { trainId: 3, eta: 25 },
      { trainId: 4, eta: 35 },
      // Add more schedules for Antipolo Station
    ],
    'Marikina-Pasig': [
      { trainId: 1, eta: 30 },
      { trainId: 2, eta: 35 },
      { trainId: 3, eta: 25 },
      { trainId: 4, eta: 45 },
      // Add more schedules for Marikina-Pasig Station
    ],
    'Santolan': [
      { trainId: 1, eta: 10 },
      { trainId: 2, eta: 15 },
      { trainId: 3, eta: 25 },
      { trainId: 4, eta: 35 },

      // Add more schedules for Santolan Station
    ],
  };

  const stationSchedules = trainSchedules[station];

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{station} Train Schedules</Text>
      {stationSchedules.map((schedule) => (
        <Text key={schedule.trainId} style={styles.scheduleText}>
          Train {schedule.trainId}: ETA To {station} Station: {schedule.eta} minutes
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF', // Set your desired background color here
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scheduleText: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default SchedulesPage;
