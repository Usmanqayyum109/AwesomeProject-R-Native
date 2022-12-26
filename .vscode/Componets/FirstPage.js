import React from "react";
import { ImageBackground, StyleSheet,Text,  View } from "react-native";
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';

// import { Icon } from "react-native-vector-icons/icon";

const image = { uri: "https://cdn.apk-cloud.com/detail/screenshot/UFdCE1cfYsYc6zM0GQu6GuuemSyBxFNF3s2E50sCtHaufcn9mwnvaUz0tjCN3IrCNzKu=h900.png" };

// const icon = <FontAwesome5Pro name={'git'} size = {100} color = "red" />;

const Page = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <View style = {styles.dis}>
        <View><Text style = {styles.div}>مشتق افعال  </Text></View>
        {/* {icon} */}
        {/* <Icon name="rocket" size={30} color="#900" /> */}
        {/* <FontAwesome5 name={'comments'} size = {100} color = 'red' /> */}
        {/* <FontAwesome5 name={'git'} brand /> */}
        <View><Text style = {styles.div}>مشتق مشتقات اسم</Text></View>
        <View><Text style = {styles.div}>امتحانات اسم</Text></View>
        <View><Text style = {styles.div}>امتحانات فعل</Text></View>
        <View><Text style = {styles.div}>ریکارڈ امتحانات</Text></View>
        <View><Text style = {styles.div}>دیگر پراجیکٹس</Text></View>
    
    </View>
    </ImageBackground>
   
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },

  div: {
    width: 120,
    height: 110,
    backgroundColor: "#91d8f5",
    marginTop:5,
    marginRight:4,
    marginLeft:4,
    opacity:0.5,
    textAlign:"center",
    fontSize:25,
    fontWeight:"bold",
    color: "#0909FF",
    fontFamily:"jameel noori nastaleeq regular",
    

    
  },
  dis: {
    display:"flex",
    flexWrap:"wrap",
    flexDirection:"row",
    marginBottom:-540
    
    
  }
//   text: {
//     color: "white",
//     fontSize: 42,
//     lineHeight: 84,
//     fontWeight: "bold",
//     textAlign: "center",
//     backgroundColor: "#000000c0"
//   }
});

export default Page;