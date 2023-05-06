import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import img7 from '../../assets/images/img7.jpg';
import CustomButton from '../components/CustomButton';

const LastPage = () => {
  const [date, setDate] = useState('');

  const handleLogin = () => {
    // handle login logic here
    console.log(`Date: ${date}`);
  };

  return (
    <ImageBackground source={img7} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>
         Your workouts start on Nov 21,2023 for 3 times a week, Good Luck Mike!{' '}
        </Text>
        <CustomButton text="Let's Start" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  title: {
    fontSize: 30,
    margin: 20,
    marginTop: 200,
    color: '#fff',
    textAlign: 'center',
  },
  
});

export default LastPage;
