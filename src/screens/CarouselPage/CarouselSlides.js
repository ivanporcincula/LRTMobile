import { useNavigation } from '@react-navigation/native';

export default [
        {
          id: '1',
          title: 'Real-Time Train Location',
          description:
            'View the real-time location of trains on the LRT-2 Line. Know the exact positions of Antipolo Station, Marikina-Pasig Station, and Santolan Station.',
          image: require('../../../assets/train-icon.png'),
        },
        {
          id: '2',
          title: 'LORA-Based System',
          description:
            'Our app utilizes LORAWAN technology to track train speed and location. Sensor nodes installed on the trains gather data, which is then transmitted to a LoRa gateway and stored in a secure database.',
          image: require('../../../assets/pent.png'),
        },
        {
          id: '3',
          title: 'Real-Time Announcements',
          description:
            'Stay updated with the latest announcements from the official LRT-2 Twitter account. Get important news, alerts, and notifications directly in the app.',
          image: require('../../../assets/lrt-icon.png'),
          onButtonPress: (navigation) => {

                        // ADD LOGIC HERE
        },
        },
      ];
      