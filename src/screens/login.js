import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import img3 from '../../assets/images/img3.jpg';
import CustomButton from '../components/CustomButton';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic here
    console.log('Username:', username);
    console.log('Password:', password);

    // ...
  };

  return (
    <ImageBackground source={img3} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome Back !</Text>
        <TextInput
          style={styles.input}
          placeholder="example@gmail.com"
          placeholderTextColor="#a6a6a6"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#a6a6a6"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Text style={styles.text}>Have you forget your password ?</Text>
        <CustomButton text="Login" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    // alignItems: 'center'
  },
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  title: {
    fontSize: 32,
    marginTop: 140,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 18,
    color: '#fff',
  },

  text:{
    color:'#fff',
    fontSize:18,
    textAlign: 'center',
    marginTop: 50,
  }
});

export default LoginPage;
