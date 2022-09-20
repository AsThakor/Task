import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text ,StyleSheet, SafeAreaView,StatusBar,Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {fonts,fontSizes} from "../../assets/fonts/fonts";
import TopTabBar from '../Navigator/topTab';

const Home = () => {
  return (
    <>
      <SafeAreaView style={styles.container} >
        <View>
        <Image
              source={require('../../assets/images/header.png')}
              style={styles.headerImage} />
        </View>
        <View style={styles.portfolio}>
        <LinearGradient colors={["rgba(46, 32, 219, 0.988)","#E432C1"]}  style={{borderBottomStartRadius:20,borderBottomEndRadius:20}}>
           <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:25,marginBottom:8}}>
            <View style={styles.portfolioText}>
            <Text style={styles.text}>CHANGE</Text>
            <Text style={styles.subText}>11%</Text>
            </View>
            <Image source={require("../../assets/images/uparrow.png")} style={styles.uparrow}/>
            <View>
                <Text style={styles.text}>24H</Text>
                <Text style={styles.text}>+25495$</Text>
            </View>
            <View style={styles.portfolioText}>
            <Text style={styles.text}>$0.9</Text>
            <View style={{height:20,width:30,borderWidth:1,borderColor:"21FFAA",borderRadius:5}}>
            <Text style={styles.text}>Yes</Text>
            </View>
            </View>
            <View style={styles.portfolioText}>
            <Text style={styles.text}>$0.89</Text>
            <Text style={styles.text}>No</Text>
            </View>
            </View>
        </LinearGradient>
        </View>
        <TopTabBar />
      </SafeAreaView>
      <ExpoStatusBar style='auto' backgroundColor='#eee'/>
      </>
  );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        marginTop: StatusBar.currentHeight  
    },
    headerImage:{
        height:300,
        width:"100%"
    },
    portfolio:{
        height:85,
        width:"100%",
        borderBottomStartRadius:20,
        borderBottomEndRadius:20
    },
    portfolioText:{
        flexDirection:"column",
        justifyContent:"space-around",
        marginBottom:5
    },
    uparrow:{
        height:26,
        width:20
    },
    text:{
        fontFamily:fonts.body,
        fontSize:12,
        color:"#FFFFFF"
    },
    subText:{
        fontFamily:fonts.monospace,
        fontSize:fontSizes.h4,
        color:"#FFFFFF"
    }
})

export default Home;