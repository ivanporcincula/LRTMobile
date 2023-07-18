import React, { useState, useEffect, useRef  } from 'react';
import { View, Button, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import SchedulesPage from '../SchedulesPage/SchedulesPage';

const stationCoordinates = [
  { latitude: 14.6248, longitude: 121.1213 }, // Antipolo Station
  { latitude: 14.62039, longitude: 121.10014 }, // Marikina-Pasig Station
  { latitude: 14.6184, longitude: 121.09111 }, // LANDMARK CLOSE TO SANTOLAN STATION (PAJARON)
  { latitude: 14.61988, longitude: 121.08848 }, // LANDMARK CLOSE TO SANTOLAN STATION (BCEO)
  { latitude: 14.62211, longitude: 121.08596 }, // Santolan Station
];

const TrainPage = ({ navigation }) => {
  const mapRef = useRef(null); // Create a ref for the MapView
  const doubleClickRef = useRef(false); // Create a ref to track double clicks
  const [showSchedules, setShowSchedules] = useState(false);

  // Initial Train values
  const [trainData, setTrainData] = useState([
    {
      // Train 1
      id: 1, 
      latitude: 14.61988,
      longitude: 121.08848,
      speed: 35,

      // add trains here
    },
    
  ]);

  const [selectedStation, setSelectedStation] = useState(null);

  useEffect(() => {
    // Simulating real-time updates every second
    const interval = setInterval(() => {
      // Update the trainData with new latitude and longitude values
      setTrainData((prevTrainData) => {
        const updatedTrainData = prevTrainData.map((train) => {
          const newLatitude = train.latitude + Math.random() * 0.001; // Replace with Updated Latitude
          const newLongitude = train.longitude + Math.random() * 0.001; // Replace with Updated Longitude

          return {
            ...train,
            latitude: newLatitude,
            longitude: newLongitude,
          };
        });
        return updatedTrainData;
      });
    }, 1000); // Update Train Positon every 1000ms 

    return () => {
      clearInterval(interval);
    };
  }, []);

  const calculateRegion = () => {
    const minLat = Math.min(...stationCoordinates.map((coord) => coord.latitude));
    const maxLat = Math.max(...stationCoordinates.map((coord) => coord.latitude));
    const minLng = Math.min(...stationCoordinates.map((coord) => coord.longitude));
    const maxLng = Math.max(...stationCoordinates.map((coord) => coord.longitude));

    const centerLat = (minLat + maxLat) / 2;
    const centerLng = (minLng + maxLng) / 2;
    const latDelta = maxLat - minLat + 0.02;
    const lngDelta = maxLng - minLng + 0.02;

    return {
      latitude: centerLat,
      longitude: centerLng,
      latitudeDelta: latDelta,
      longitudeDelta: lngDelta,
    };
  };

  const initialRegion = calculateRegion();

  const handleDestination = (station) => {
    if (doubleClickRef.current) {
      // Double-click detected, zoom out to default view
      mapRef.current.animateToRegion(initialRegion, 500); // Adjust the duration as needed
      setSelectedStation(null); // Clear the selected station
      doubleClickRef.current = false; // Reset double click flag
      return;
    }
  
    doubleClickRef.current = true; // Set double click flag
  
    setSelectedStation(station);
  
    let region;
    if (station === 'Antipolo') {
      const antipoloCoord = stationCoordinates[0];
      const marikinaPasigCoord = stationCoordinates[1];
  
      const centerLat = (antipoloCoord.latitude + marikinaPasigCoord.latitude) / 2;
      const centerLng = (antipoloCoord.longitude + marikinaPasigCoord.longitude) / 2;
      const latDelta = Math.abs(antipoloCoord.latitude - marikinaPasigCoord.latitude) + 0.007;
      const lngDelta = Math.abs(antipoloCoord.longitude - marikinaPasigCoord.longitude) + 0.007;
  
      region = {
        latitude: centerLat,
        longitude: centerLng,
        latitudeDelta: latDelta,
        longitudeDelta: lngDelta,
      };
    } else if (station === 'Marikina-Pasig') {
      const marikinaPasigCoord = stationCoordinates[1];
      region = {
        latitude: marikinaPasigCoord.latitude,
        longitude: marikinaPasigCoord.longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.015,
      };
    } else if (station === 'Santolan') {
      const santolanCoord = stationCoordinates[4];
      region = {
        latitude: santolanCoord.latitude,
        longitude: santolanCoord.longitude,
        latitudeDelta: 0.036,
        longitudeDelta: 0.0001,
      };
    }
  
    mapRef.current.animateToRegion(region, 500); // Adjust the duration as needed
  
    setTimeout(() => {
      doubleClickRef.current = false; // Reset double click flag after 500ms
    }, 500);
  };
  

  const getEtaText = () => {
    if (selectedStation) {
      // Calculate ETA logic goes here
      const eta = 5; // Replace with your actual ETA calculation
      return `ETA to ${selectedStation} Station is ${eta} minutes`;
    }
    return '';
  };
  const navigateToSchedulesPage = () => {

    navigation.navigate('SchedulesPage', { station: selectedStation });
  };
  return (
    <View style={{ flex: 1 }}>
      <MapView   ref={mapRef}
 style={{ flex: 1 }} region={initialRegion} zoomEnabled={false} scrollEnabled={false}>
        <Polyline
          coordinates={stationCoordinates}
          strokeColor="#9370DB" // Line color
          strokeWidth={5} // Line width
        />

        {trainData.map((train) => (
          <Marker
            key={train.id}
            coordinate={{
              latitude: train.latitude,
              longitude: train.longitude,
            }}
            title={`Train ${train.id}`}
            description={`Speed: ${train.speed} km/h`}
          />
        ))}

        <Marker coordinate={stationCoordinates[0]} title="Antipolo Station" style={{ width: 50, height: 50 }}>
          <Image
            source={require('../../../assets/train-station.png')}
            style={{ width: 50, height: 50, resizeMode: 'contain' }}
          />
        </Marker>

        <Marker coordinate={stationCoordinates[1]} title="Marikina-Pasig Station" style={{ width: 50, height: 50 }}>
          <Image
            source={require('../../../assets/train-station.png')}
            style={{ width: 50, height: 50, resizeMode: 'contain' }}
          />
        </Marker>

        <Marker coordinate={stationCoordinates[4]} title="Santolan Station" style={{ width: 50, height: 50 }}>
          <Image
            source={require('../../../assets/train-station.png')}
            style={{ width: 50, height: 50, resizeMode: 'contain' }}
          />
        </Marker>
      </MapView>
      <View
      style={{
        position: 'absolute',
        top: 10,
        right: 10,
        padding: 10,
        backgroundColor: '#9370DB',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 3,
      }}
    >
      <Text style={{ color: '#fff', fontWeight: 'bold' }}>{getEtaText()}</Text>
    </View>

    {selectedStation && (
    <View
      style={{
        position: 'absolute',
        top: 55,
        right: 10,
        padding: 10,
        backgroundColor: '#9370DB',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 3,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
  <TouchableOpacity onPress={navigateToSchedulesPage}>

      <Text style={{ color: '#fff', fontWeight: 'bold' }}>View {selectedStation} Train Schedules </Text>
   
      </TouchableOpacity>

   </View>
)}

{showSchedules && (
      <SchedulesPage selectedStation={selectedStation} />
    )}

      <View
        style={{
          flexDirection: 'column',
          paddingTop: 5,
          paddingRight: 10,
          paddingLeft: 10,
          paddingBottom: 15,
          marginTop: 5,
          marginBottom:5,
          marginRight: 10,
          marginLeft: 10,
          justifyContent: 'space-around',
          backgroundColor: '#CCCCFF',
          borderRadius: 10,
          borderWidth: 2,
          borderColor: '#9370DB',
          shadowColor: '#000',
          shadowOffset: { width: 1, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 2,
        }}
      >
     <Text style={styles.stationText}>Select your Station:</Text>
        <Button title="Santolan Station" onPress={() => handleDestination('Santolan')} color="#9370DB" style={styles.button}/>
        <Button title="Marikina-Pasig Station" onPress={() => handleDestination('Marikina-Pasig')} color="#9370DB" style={styles.button}/>
        <Button title="Antipolo Station" onPress={() => handleDestination('Antipolo')} color="#9370DB" style={styles.button}/>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  stationTextContainer: {
    alignItems: 'center',
  },
  stationText: {
    color: '#51414F',
    fontSize: 14,
    textShadowColor: '#000',
    textShadowRadius: 1,
    justifyContent: 'center',
    marginBottom: 6,
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10, // Add marginBottom to create space below the buttons
  },
  button: {
    backgroundColor: '#9370DB',
    width: 200,
    height: 40,
    borderRadius: 20,
    marginBottom: 10, // Add marginBottom to create space below each button
  },
});
export default TrainPage;
