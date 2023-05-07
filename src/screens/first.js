import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  Image,
} from 'react-native';
import img4 from '../../assets/images/img4.jpg';
import CustomButton from '../components/CustomButton';

const FirstPage = () => {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    // handle login logic here
    console.log(`Username: ${username}`);
  };

  return (
    <ImageBackground source={img4} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>
          It's great that you'r here! First thing first, what should we call you
          ?{' '}
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Your Name ?"
          placeholderTextColor="#a6a6a6"
          value={username}
          onChangeText={setUsername}
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
    width: '100%',
    height: 50,
    borderBottomWidth:1,
    borderBottomColor: '#a6a6a6',
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 18,
    color: '#fff',
  },

  text: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
  },
});

export default FirstPage;
