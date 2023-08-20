import React, { useState, useEffect, useRef } from 'react';
import { View, Button, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import SchedulesPage from '../SchedulesPage/SchedulesPage';
// import firebase from 'firebase/app';
// import 'firebase/database';


// const firebaseConfig = {
//   databaseURL: 'https://lrtmobile-44e44-default-rtdb.firebaseio.com/',
//   type: "service_account",
//   project_id: "lrtmobile-44e44",
//   private_key_id: "4d65c5417bf5130fdf87fa0c07f166dc3ad525d1",
//   private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDUaRsC1DC1jTwp\n7AizqJqFqHeVHkEJXLuc2VTKvyxtDFiuwYzdcHY2B1Mwz36xKX3r69Tq91ZXK0Mo\nr2Mxzz+RrQaXmnOPJpkLn0P5uDNzJWWdFdPiE88HcHa5iVsiE2Jfl2KClAQHsxxZ\nTn9ztiilZI52vn7LpexwNw55BWMB0aadHTLR3kO+AeSHDwKGA1ft80vwlU5HZQjy\nEUbhq6nHzZ8rzePweMPTCEYB5QV81Wt4sB8uiks1/IiPY4kwUiWSIw+UdOmnjGUN\ngc7uOU0fyGq4aOZG8HHW+nYTkzPiTjOQBVbUc2M1lJUh5mmwPjfpOewW3pum1btf\nMzMvjMuFAgMBAAECggEARvVj0iKbsRLhDeotkAMbt9nrNPQZ6uxBOqk5089gon9U\n4vCCw/kNbIgu6OfwXXPMfrNWejYtcEpiEaXhv+KJzHsecCfnQeO1jfXjKfm4qldM\nZllD4ssWRthxuRKjULNkEiYLAS88V2wk5Mq99iRc2L/Kfe2ugw7HeUdTPOepRxIs\nNrfjoGbqFJZYZtDoMHbgC/WCzi47r0jAPVVAnRnOOO79+p2/2HWveQGh4PJQilWV\nT9LbdEQuqFyQGbRJSUm3R9wIsdaeANMtmKU1JILRzAVUT3uhtfHwJpMZklGy6Du4\nuj7pg3xvXHDfFF9mD6V0tA6xyAQWodBV+xfwJHNvEwKBgQDv9PdEjSvExQQnvECu\nq4GF3z8hmlE0/u+AmTUMSmdM+LdSkBC5lPRY8NDj1c6OEpolkMxqeRLK6BUpg/Rq\nRDAEUJdTwgrx3UMlbXTEb6HHk8sXbkBHIoqHk570kWteY5jYdSDCoQSqu35CATYo\nYuZZ7r7wjLucM0yEQCOFTn33cwKBgQDinKoaoMjk4fZ1bxmqUBdBrLLPzspz2cky\nDVFknfxQAhhdNIu6YJj0/i9IFxK/jZD1GkdBrwW6wEgmCFA45ECSXfk+WJ9HLKau\nn217MdJ32bMVM8RvHMdFBhbWVIVIEb16I3lQ97AZCHVD+gInReaEaP9oRqD+Y23n\nJ2k1osNDJwKBgQDg2ogqsK7nAEdYhMuH4ibJL92Uu2qFYq9Drk1Lax1Jv3bp4x4J\nCU+/WEomdV/NOhlAQmOLElFN2hSahpAuVB86q9piHl7rLg+RrvPQb1sGDbQuDJ4n\nCnMNgINfYjVeia3ciEVenEwnQPKbH0+EoMiCVXqPJxFW2atF8mRWsqrPiQKBgFJl\nLkByV7lJI8i9NbLEXkBl37pJcTlAZbRKPV79RqF8sYkqMuf4eYUS6vQmV43Iln1Y\nKbKLReUKRvF1Ml4NOCFABAEUTg2eAZkapL8XdXRYdpHt+a2A5D+HoEQcBT4YHTHM\nti6ncKMZfTHTNHc9JjzcxIkQrTbxxiM3JDz5SlAfAoGAB9o7n9BOEkZcKKBUOhRY\nSL7tV9TJ7ls+Ke/UkP0gOLUj5QgEYpNpVXDWkojC3V9+nt1g2vOSt4GcewBSTB73\nE0nqpAgjiVnjpjGHByLwwhxSGvjepX/dIVwSqsZypwMJvTIr6fQIY0hyA7ilMdme\na3KdAu94UCcDD3BUFV8DkLM=\n-----END PRIVATE KEY-----\n",
//   client_email: "firebase-adminsdk-85f23@lrtmobile-44e44.iam.gserviceaccount.com",
//   client_id: "116753384814282539969",
//   auth_uri: "https://accounts.google.com/o/oauth2/auth",
//   token_uri: "https://oauth2.googleapis.com/token",
//   auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
//   client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-85f23%40lrtmobile-44e44.iam.gserviceaccount.com",
//   universe_domain: "googleapis.com"
// };

// firebase.initializeApp(firebaseConfig);
// const database = firebase.database();

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

  // useEffect(() => {
  //   const trainRefs = ['Train1', 'Train2', 'Train3', 'Train4'];
  //   const unsubscribes = trainRefs.map((trainRef) => {
  //     const ref = firebase.database().ref(trainRef);
  //     ref.on('value', (snapshot) => {
  //       const data = snapshot.val();
  //       if (data) {
  //         setTrainData((prevTrainData) => {
  //           const updatedTrainData = prevTrainData.filter((train) => train.id !== data.ID);
  //           updatedTrainData.push(data);
  //           return updatedTrainData;
  //         });
  //       }
  //     });
  //     return () => ref.off();
  //   });

  //   return () => {
  //     unsubscribes.forEach((unsubscribe) => unsubscribe());
  //   };

  // }, []);

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
      <MapView ref={mapRef}
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
          marginBottom: 5,
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
        <Button title="Santolan Station" onPress={() => handleDestination('Santolan')} color="#9370DB" style={styles.button} />
        <Button title="Marikina-Pasig Station" onPress={() => handleDestination('Marikina-Pasig')} color="#9370DB" style={styles.button} />
        <Button title="Antipolo Station" onPress={() => handleDestination('Antipolo')} color="#9370DB" style={styles.button} />
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
