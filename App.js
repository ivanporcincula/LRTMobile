import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CarouselPage from './src/screens/CarouselPage/CarouselPage';
import MenuPage from './src/screens/MenuPage/MenuPage';
import TrainPage from './src/screens/TrainPage/TrainPage';
import SchedulesListPage from './src/screens/SchedulesListPage/SchedulesListPage';
import SchedulesPage from './src/screens/SchedulesPage/SchedulesPage';

import { Text, View, StyleSheet, Image } from 'react-native';

const Stack = createStackNavigator();

function App() {
  const headerTitleStyle = {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20,
  };

  const headerStyle = {
    backgroundColor: '#7E57C2',
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF',
  };

  const trainPageHeaderTitle = () => {
    return (
      <View style={styles.headerTitleContainer}>
        <Image
          source={require('./assets/train-icon.png')}
          style={styles.headerImage}
        />
        <Text style={styles.headerTitleText}>Tracking System</Text>
      </View>
    );
  };

  const menuPageHeaderTitle = () => {
    return (
      <View style={styles.headerTitleContainer}>
        <Image
          source={require('./assets/menu-icon.png')}
          style={styles.headerImage}
        />
        <Text style={styles.headerTitleText}>Menu</Text>
      </View>
    );
  };

  const twitterPageHeaderTitle = () => {
    return (
      <View style={styles.headerTitleContainer}>
        <Image
          source={require('./assets/lrt-icon.png')}
          style={styles.headerImage}
        />
        <Text style={styles.headerTitleText}>Train Information and Schedules</Text>
      </View>
    );
  };

  const schedulesPageHeaderTitle = () => {
    return (
      <View style={styles.headerTitleContainer}>
        <Image
          source={require('./assets/lrt-icon.png')}
          style={styles.headerImage}
        />
        <Text style={styles.headerTitleText}>Train Schedules</Text>
      </View>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="CarouselPage"
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: headerStyle,
          headerTitleStyle: headerTitleStyle,
        }}
      >
        <Stack.Screen
          name="CarouselPage"
          component={CarouselPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MenuPage"
          component={MenuPage}
          options={{
            headerTitle: menuPageHeaderTitle,
            headerTintColor: '#FFFFFF',
            headerStyle: {
              backgroundColor: '#9370DB',
            },
          }} />
        <Stack.Screen
          name="TrainPage"
          component={TrainPage}
          options={{
            headerTitle: trainPageHeaderTitle,
            headerTintColor: '#FFFFFF',
            headerStyle: {
              backgroundColor: '#9370DB',
            },
          }}
        />
        <Stack.Screen
          name="SchedulesListPage"
          component={SchedulesListPage}
          options={{
            headerTitle: twitterPageHeaderTitle,
            headerTintColor: '#FFFFFF',
            headerStyle: {
              backgroundColor: '#9370DB',
            },
          }}
        />
        <Stack.Screen
          name="SchedulesPage"
          component={SchedulesPage}
          options={{
            headerTitle: schedulesPageHeaderTitle,
            headerTintColor: '#FFFFFF',
            headerStyle: {
              backgroundColor: '#9370DB',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  headerTitleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerTitleText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default App;
