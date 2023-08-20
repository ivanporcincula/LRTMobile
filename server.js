const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');

const serviceAccount = require('/Users/Logiq/Documents/AppFiles/TrainTracker/keys.json');
const firebaseConfig = {
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://lrtmobile-44e44-default-rtdb.firebaseio.com/',
};

admin.initializeApp(firebaseConfig);

const app = express();
app.use(bodyParser.json());

const TRAINS = ['Train1', 'Train2', 'Train3', 'Train4'];


app.post('/webhook', (req, res) => {
    try {
        const receivedData = req.body; // Data sent by TTN's webhook

        const trainId = receivedData.id; // Assuming ID is in the payload
        if (trainId >= 1 && trainId <= TRAINS.length) {
            const trainDataRef = admin.database().ref(TRAINS[trainId - 1]);
            trainDataRef.set({
                id: receivedData.id,
                longitude: receivedData.longitude,
                latitude: receivedData.latitude,
                speed: receivedData.speed
            });

            console.log(`Data received and updated for ${TRAINS[trainId - 1]}:`, receivedData);
        } else {
            console.log('Invalid train ID:', trainId);
        }

        res.status(200).send('Data received successfully.');

    } catch (error) {
        console.error('Error processing webhook data:', error);
        res.status(500).send('Error processing data.');
    }
});

// Add a new GET endpoint to retrieve data for each train
app.get('/getTrainData/:trainId', async (req, res) => {
    try {
        const trainId = req.params.trainId;
        if (trainId >= 1 && trainId <= TRAINS.length) {
            const trainDataSnapshot = await admin.database().ref(TRAINS[trainId - 1]).once('value');
            const trainData = trainDataSnapshot.val();
            res.status(200).json(trainData);
        } else {
            res.status(400).send('Invalid train ID.');
        }
    } catch (error) {
        console.error('Error getting train data:', error);
        res.status(500).send('Error getting train data.');
    }
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
