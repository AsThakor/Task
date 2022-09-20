import React from 'react';
import { View, Text ,StyleSheet,ProgressBarAndroid, FlatList} from 'react-native';
import { fonts } from '../../assets/fonts/fonts';
import * as Progress from 'react-native-progress';
import { data } from '../../assets/data/data';

export default function News() {
  return (
    <View style={styles.expertWrapper}>
      <Text style={styles.expertText}>215 Expert Opinion</Text>
      <View style={styles.roundWrapper}>
          <View style={styles.round}>
              <Text style={styles.roundText}>12%</Text>
          </View>
          <View style={styles.progressBar}>
          <Progress.Bar progress={0.3} height={10} borderColor={"#D9D9D9"} color={"#E432C1"}  />
          <Progress.Bar progress={0.8} height={10} borderColor={"#D9D9D9"} color={"#687684"} />
          <Progress.Bar progress={0.1} height={10} borderColor={"#D9D9D9"} color={"#687684"} />
          </View>
          <View style={{flexDirection:"column",justifyContent:"space-between"}}>
            <Text style={{color:"#E432C1"}}>12% Buy Yes</Text>
            <Text style={{color:"#687684"}}>88% Buy No</Text>
            <Text style={{color:"#687684"}}>1% No Resolve</Text>
          </View>
     </View>
     <FlatList 
            data={data}
            renderItem={ ({item,index}) => (
              <View style={[styles.box,styles.shadowProp]}>
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.date}>{item.date}</Text>
                </View>
                <View style={{marginTop:3,}}>
                  <Text style={styles.description}>{item.description}</Text>
                </View>
              </View>
            )}
            horizontal={true}
          />
     </View>
  ); 
}

const styles= StyleSheet.create({
  expertWrapper:{
    marginTop:14,
    marginHorizontal:20
  },
  expertText:{
    fontFamily:fonts.body,
    fontSize:20,
    color:"#687684"
  },
  round:{
    height:65,
    width:65,
    borderWidth:1,
    borderRadius:40,
    borderColor: "rgba(201, 48, 197, 0.1)",
    justifyContent:"center",
    alignItems:"center"
  },
  roundWrapper:{
    marginTop:15,
    flexDirection:"row",
    justifyContent:"space-between"
  },
  roundText:{
    fontFamily:fonts.body,
    fontSize:15,
    color:"#E432C1",
    fontWeight:"bold"
  },
  progressBar:{
    flexDirection:"column",
    justifyContent:"space-between"
  },
  box:{
    marginTop:20,
    backgroundColor: 'white',  
    borderRadius: 8,  
    paddingVertical: 15,  
    paddingHorizontal: 15,  
    width:200, 
    marginVertical: 10,  
    marginLeft:10,
  },
  description:{
    fontFamily:fonts.heading,
    fontSize:10,
    fontWeight:"300px",
    color:"#000000"
  },
  title:{
    fontFamily:fonts.heading,
    fontSize:12,
    fontWeight:"bold",
    color:"#2E2E2E"
  },
  shadowProp: {  
    shadowOffset: {width: -2, height: 4},  
    shadowColor: '#171717',
    shadowOpacity: 0.2,  
    shadowRadius: 3
  },  
  date:{
    fontFamily:fonts.heading,
    fontWeight:"bold",
    fontSize:12,
    color:"#080808"
  }
})