import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet , ImageBackground } from 'react-native';
import CheckBox from 'react-native-checkbox';
import img2 from '../../assets/images/img2.jpg';
import CustomButton from '../components/CustomButton';

const SignPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const [terms, setTerms] = useState(false);

  const handleSign = () => {
    // Perform login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Privacy Policy:', privacyPolicy);
    console.log('Terms:', terms);
    // ...
  };

  return (
    <ImageBackground source={img2} style={styles.background}>
    <View style={styles.container}>
    <Text style={styles.title}>Add your details below to setup an account</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#a6a6a6"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#a6a6a6"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <CheckBox
        label="I'v read the Privacy Policy"
        checked={privacyPolicy}
        onChange={(checked) => setPrivacyPolicy(checked)}

      />
      <CheckBox
        label="I Accept the terms & conditions"
        checked={privacyPolicy}
        onChange={(checked) => setPrivacyPolicy(checked)}

      />
    <CustomButton text="Create Account" />
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
      backgroundColor: 'rgba(0,0,0,0.5)'
    },
        title: {
      fontSize: 32,
      marginTop: 120,
      color: '#fff',
      textAlign:'center',
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
      color: '#fff'
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
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold'
    },

});

export default SignPage;
