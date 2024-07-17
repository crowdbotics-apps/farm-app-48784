import { Switch } from "react-native";
import { Text } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const SignUp = () => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}></ScrollView>
      <Text style={styles.GHJoPzUw}>
        {"Are you a consumer restaurant or a food producer?"}
      </Text>
    <Switch style={styles.skbJBgSx}></Switch></SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  GHJoPzUw: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  skbJBgSx: {
    width: 50,
    height: 25,
    position: "absolute",
    left: 0,
    backgroundColor: "#494141"
  }
});
export default SignUp;