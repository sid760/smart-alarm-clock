import React from 'react';
import{view ,Image, SafeAreaView, Button,StyleSheet,Text,ImageBackground} from 'react-native';

function SecondScreen({navigation}){
    return(
        <ImageBackground style={styles.background} 
    source ={require("../assets/Background.jpg")}></ImageBackground>
    )
};

const styles = StyleSheet.create({
    
      background:{ 
        flex:1,
        
        }
    });
export default SecondScreen;