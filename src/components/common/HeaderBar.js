import React from "react";
import { Text, View, StyleSheet, Image, Platform } from "react-native";

const HeaderBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerMenu} />
      <Image
        source={require("../../../assets/img/lotus.png")}
        style={styles.headerImage}
      />
      <Text style={styles.headerTitle}>FlowerSpot</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
  },

  headerTitle: {
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'ubuntu', 
    fontSize: 25,
    color: "#e09186",
    textAlign: "center",
  },

  headerImage: {
    marginRight: 10,
  }
});

export default HeaderBar;
