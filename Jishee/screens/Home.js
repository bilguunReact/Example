import {
    View,
    Text,
    StyleSheet,
    Platform,
    ScrollView,
    SafeAreaView,
    StatusBar,
    Image,
    Pressable,
  } from "react-native";
  import React from "react";
  import Ionicons from "@expo/vector-icons/Ionicons";
  import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
  export default function App({ navigation }) {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollcontainer}>
          <View style={styles.greeting}>
            <Text style={styles.ungutext}>Ugluunii mend</Text>
            <View style={styles.greetingmessage}>
              {/* <Text style={styles.atext}>a</Text>
                <Text style={styles.btext}>b</Text>
                <Text style={styles.ctext}>c</Text> */}
              <Ionicons
                style={styles.unguIcon}
                name="md-checkmark-circle"
                size={32}
                color="blue"
              />
              <Image
                source={require("../../Jishee/assets/favicon.png")}
                style={styles.greetingAvatar}
              />
            </View>
          </View>
  
          <View style={styles.unguv0}>
            <Pressable
              onPress={() => {
                navigation.navigate("Detail");
              }}
            >
              <View style={styles.unguv1}>
                <Text style={styles.ungutext1}>tovch nom</Text>
                <FontAwesome5 name="caret-down" size={40} style={styles.Icon1} />
              </View>
            </Pressable>
            <View style={styles.unguv2}>
              <Text style={styles.ungutext1}>Tsahim</Text>
              <FontAwesome5 name="stop" size={30} style={styles.Icon1} />
            </View>
            <View style={styles.unguv3}>
              <Text style={styles.ungutext1}>Audio</Text>
              <FontAwesome5 name="caret-right" size={40} style={styles.Icon1} />
            </View>
            <View style={styles.unguv4}>
              <Text style={styles.ungutext1}>Pod</Text>
              <FontAwesome5 name="circle" size={40} style={styles.Icon1} />
            </View>
          </View>
  
          <Pressable
            onPress={() => {
              alert("DUUDLA");
            }}
          >
            <View style={styles.View2}>
              <Text style={styles.Text1}>kiki bolon gigi</Text>
              <Text style={styles.Text2}>Ene 7 honogiin ontsloh</Text>
              <Image
                source={require("../../Jishee/assets/favicon.png")}
                style={styles.BigImage}
              />
            </View>
          </Pressable>
  
          <View style={styles.View2}>
            <Text style={styles.Text1}>kiki bolon gigi</Text>
            <Text style={styles.Text2}>Ene 7 honogiin ontsloh</Text>
            <Image
              source={require("../../Jishee/assets/favicon.png")}
              style={styles.BigImage}
            />
          </View>
  
          <View style={styles.View2}>
            <Text style={styles.Text1}>kiki bolon gigi</Text>
            <Text style={styles.Text2}>Ene 7 honogiin ontsloh</Text>
            <Image
              source={require("../../Jishee/assets/favicon.png")}
              style={styles.BigImage}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 100,
      backgroundColor: "white",
    },
    scrollcontainer: {
      backgroundColor: "lightgrey",
    },
    greeting: {
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginTop: 10,
    },
    greetingmessage: {
      paddingRight: 20,
      flexDirection: "row",
      alignItems: "flex-end",
    },
    atext: {
      fontSize: 24,
    },
    btext: {
      fontSize: 24,
    },
    ctext: {
      fontSize: 24,
    },
    unguv0: {
      backgroundColor: "white",
      height: 250,
      // width: "100%",
      flexWrap: "wrap",
      flexDirection: "row",
      justifyContent: "space-around",
      marginHorizontal: 10,
  
      borderRadius: 24,
      marginTop: 20,
    },
    unguv1: {
      backgroundColor: "red",
      height: 90,
      width: 150,
      marginTop: 30,
      borderRadius: 24,
    },
    unguv2: {
      backgroundColor: "purple",
      height: 90,
      width: 150,
      marginTop: 30,
      borderRadius: 24,
    },
    unguv3: {
      backgroundColor: "yellow",
      height: 90,
      width: 150,
      marginTop: 10,
      borderRadius: 24,
    },
    unguv4: {
      backgroundColor: "blue",
      height: 90,
      width: 150,
      marginTop: 10,
      borderRadius: 24,
    },
    ungutext: {
      color: "black",
      fontSize: 24,
      fontWeight: "700",
      marginTop: 15,
      marginLeft: 15,
      paddingLeft: 10,
    },
    ungutext1: {
      color: "white",
      fontSize: 20,
      fontWeight: "700",
      marginTop: 15,
      marginLeft: 15,
      paddingLeft: 10,
    },
    unguIcon: {
      size: 20,
    },
    greetingAvatar: {
      width: 40,
      height: 40,
      borderRadius: 50,
      resizeMode: "cover",
    },
    Icon1: {
      marginLeft: 20,
      color: "white",
    },
  
    View2: {
      backgroundColor: "white",
      height: 450,
      // width: "100%",
      flexWrap: "wrap",
      flexDirection: "row",
      justifyContent: "space-around",
      marginHorizontal: 10,
      borderRadius: 24,
      marginTop: 20,
      overflow: "hidden",
    },
    Text1: {
      fontSize: 20,
      color: "lightgrey",
      // marginLeft: 30,
      marginRight: 200,
      marginTop: 10,
    },
    Text2: {
      fontWeight: "bold",
      fontSize: 30,
      marginVertical: 1,
    },
    BigImage: {
      width: "100%",
      height: "100%",
      resizeMode: "center",
    },
  });
  