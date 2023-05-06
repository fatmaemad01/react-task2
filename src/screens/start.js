import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,ImageBackground, Image } from 'react-native';
import background from '../../assets/images/background.jpg';
import logo from '../../assets/images/logo.png';



const Start = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // handle login logic here
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <ImageBackground source={background} style={styles.background}>
    <View style={styles.container}>
    <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>Make Your Self Stronger than your excuses </Text>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={handleLogin}>
        <Text style={styles.buttonText}>or Login</Text>
      </TouchableOpacity>
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
      backgroundColor: 'rgba(0,0,0,0.5)'
    },
    logoContainer: {
      alignItems: 'center',
      marginBottom: 50
    },
    logo: {
      width: 100,
      height: 100
    },
    title: {
      fontSize: 32,
      margin: 20,
      color: '#fff',
      textAlign: 'center'
    },
   
    button: {
      width: '100%',
      height: 50,
      backgroundColor: '#e79115',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      // marginHorizontal:80,
      marginTop: 220
    },
    button2: {
      marginTop:20,
    },
    buttonText: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold'
    }
  });
  
export default Start;
