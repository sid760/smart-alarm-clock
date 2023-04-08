
import React from 'react';
import { ImageBackground,StyleSheet,View,Image, Button } from 'react-native';

function WelcomeScreen({navigation} )
{   
    
    return(
    <ImageBackground style={styles.background} 
    source ={require("../assets/Background.jpg")}>
    <Image style={styles.logo} source={require('../assets/logo.png')}></Image>
     <Button style={styles.button} title='Lets Start' onPress={()=>navigation.navigate('SecondScreen')}>
     </Button>
    </ImageBackground>
        )
};

const styles = StyleSheet.create({
background:{ 
    flex:1,
    justifyContent:'flex-end',
    alignItems:'center',


},
/*EnterButton:{
    justifyContent:'center',
    width:'30%',
    height:'40%',
    backgroundColor:'#86d4e0',
    
},*/

logo:{
    width:100,
    height:100,
    position:'absolute',
    top:70,
},
button:{
    width:30,
    height:20,
    backgroundColor:'#ff0000'
    
    
}
});

export default WelcomeScreen;  