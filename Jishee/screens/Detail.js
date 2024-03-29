import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

export default function Detail({ navigation }) {
  const textWorkPressed = () => {
    navigation.navigate("B1");
  };
  return (
    <View style={styles.view1}>
      <Pressable
        onPress={() => {
          textWorkPressed();
        }}
      >
        <Text>Detail</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  view1: {
    justifyContent: "center",
    alignItems: "center",
    height: 600,
  },
});