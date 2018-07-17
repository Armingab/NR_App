import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Platform
} from "react-native";
import { COLOR_WHITE, COLOR_BLACK_TRANSPARENT } from "../utils/common";

const FlowerItem = props => {
  const imageUrl = props.data.profile_picture.slice(2);
  const { flowerImage, container, textContainer, latinText, sightingsText, flowerText } = styles;
  return (
    <View style={container}>
      <TouchableOpacity onPress={() => props.openDetails()}>
        <ImageBackground
          source={{ uri: `https://${imageUrl}` }}
          style={flowerImage}
        >
          <View style={textContainer}>
            <Text style={flowerText}>{props.data.name}</Text>
            <Text style={[flowerText, latinText]}>{props.data.latin_name}</Text>
            <Text style={[flowerText, sightingsText]}>127 sightings</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20
  },

  flowerImage: {
    height: 203,
    width: 160,
    borderRadius: 1,
    marginBottom: 5
  },

  textContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: 70,
    marginBottom: 40
  },

  flowerText: {
    fontSize: 18,
    color: COLOR_WHITE,
    textAlign: "center",
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'ubuntu', 
  },

  latinText: {
    fontSize: 16,
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'ubuntu-medium', 
  },

  sightingsText: {
    fontSize: 16,
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'ubuntu', 
    marginTop: 25,
    borderRadius: 10
  }
});
export default FlowerItem;
