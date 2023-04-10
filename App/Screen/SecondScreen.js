import React from 'react';
import{View ,Image, SafeAreaView, Button,StyleSheet,Text,ImageBackground} from 'react-native';
import LottieView from 'lottie-react-native';
function SecondScreen({navigation}){
    return(
        <View style={styles.container}>
        
        <LottieView
       
          style={styles.animation}
          source={require('../assets/Anime.json')}
          autoPlay
          loop={true}
          speed={0.3}
        
        />
        </View>
    )
};

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    
        
      },
      animation: {
        width: '100%',
        height: '100%',
    
        }
    });
export default SecondScreen;