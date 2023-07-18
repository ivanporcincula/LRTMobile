import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TwitterPage = () => {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTweets();
  }, []);

  const fetchTweets = async () => {
    try {
      // Replace with your own Twitter API credentials
      const bearerToken = decodeURIComponent('AAAAAAAAAAAAAAAAAAAAABq9oQEAAAAAMynxVZf60%2FcT%2BwfFXBaF65K1e30%3DKyZaVevbYJzlvfgHx0yFMwS6zB9oAvdH4PWQnhR923Yt5LNR1b');
  
      const response = await fetch(
        'https://api.twitter.com/2/users/by/username/OfficialLRTA/tweets',
        {
          headers: {
            Authorization: 'Bearer ' + bearerToken,
            'Content-Type': 'application/json',
          },
        }
      );
  
      if (response.ok) {
        const data = await response.json();
        setTweets(data);
      } else {
        console.log('Error retrieving tweets:', response.status);
      }
    } catch (error) {
      console.log('Error retrieving tweets:', error);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading tweets...</Text>
      ) : (
        tweets.map(tweet => (
          <View key={tweet.id} style={styles.tweetContainer}>
            <Text>{tweet.text}</Text>
          </View>
        ))
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tweetContainer: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
});

export default TwitterPage;
