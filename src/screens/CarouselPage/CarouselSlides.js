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
    title: 'Train Schedule',
    description:
      'Find the Estimated Time of Arrival of the trains to each station.',
    image: require('../../../assets/lrt-schedule.png'),
    onButtonPress: (navigation) => {

      // ADD LOGIC HERE
    },
  },
];
