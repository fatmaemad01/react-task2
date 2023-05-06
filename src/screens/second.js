import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import img5 from '../../assets/images/img5.jpg';
import CustomButton from '../components/CustomButton';

const SecondPage = () => {
  const [date, setDate] = useState('');

  const handleLogin = () => {
    // handle login logic here
    console.log(`Date: ${date}`);
  };

  return (
    <ImageBackground source={img5} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>
         When do you want to start ?{' '}
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Nov 20,2023"
          placeholderTextColor="#a6a6a6"
          value={date}
          onChangeText={setDate}
        />
        <CustomButton text="Continue" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    //   alignItems: 'center'
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
  input: {
    width: '50%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 18,
    color: '#fff',
    textAlign:'center'
  },

  text: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
  },
});

export default SecondPage;
