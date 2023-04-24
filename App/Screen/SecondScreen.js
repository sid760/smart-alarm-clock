import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, ImageBackground } from 'react-native';

function SecondScreen({ navigation }) {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

  return (
    <ImageBackground source={require('../assets/anim.jpg')} resizeMode='cover' style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.text}>Enter the following details </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your Train number"
            placeholderTextColor={'white'}
            onChangeText={text => setInput1(text)}
            value={input1}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Station"
            placeholderTextColor={'white'}
            onChangeText={text => setInput2(text)}
            value={input2}
          />
          <TextInput
            style={styles.input}
            placeholder="Buffer"
            placeholderTextColor={'white'}
            onChangeText={text => setInput3(text)}
            value={input3}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  
    
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%',
    marginTop:100,
    display: 'flex',
   flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center'
  },
  input: {
    height: 40,
    marginVertical: 10,
    borderWidth: 2,
    borderRadius: 15,
    padding: 10,
    borderColor: 'white',
    width: 200,
    color: 'white',
    alignSelf: 'stretch', // Stretch the text input boxes to fill the width of the parent container
  },
  text: {
    color: 'white',
    fontWeight: '900',
    fontSize: 20,
    marginTop: -200, // Adjust this value to control the margin from the top
  },
});

export default SecondScreen;
