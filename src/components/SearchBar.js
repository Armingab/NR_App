import React from "react";
import { StackNavigator } from "react-navigation";
import { TextInput, StyleSheet, View, Image, TouchableOpacity, Platform } from "react-native";
import { COLOR_LIGHT_GRAY } from "../utils/common";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flower: ""
    };
  }

  render() {
    const { input, searchIcon } = styles;
    const { flower } = this.state;
    return (
      <View>
        <TextInput
          onChangeText={flower => this.setState({ flower })}
          onSubmitEditing={() => this.props.searchFlowers(flower)}
          onTouchCancel={() => this.setState({ flower: '' })}
          value={flower}
          placeholder="Looking for something specific?"
          style={input}
          underlineColorAndroid="transparent"
        />
        <TouchableOpacity 
        style={styles.searchTouchable}
        onPress={() => this.props.searchFlowers(flower)}>
        <Image
          source={require("../../assets/img/pl_icon_search.png")}
          style={searchIcon}
          onPress={() => this.props.searchFlowers(flower)}
        />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  input: {
    height: 55,
    borderWidth: 2,
    borderRadius: 6,
    borderColor: COLOR_LIGHT_GRAY,
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'ubuntu-light', 
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    paddingLeft: 20
  },

  searchIcon: {
    height: 30,
    width: 30,
  },

  searchTouchable: {
    height: 100,
    width: 100,
    position: "absolute", 
    left: Platform.OS === 'ios' ? 310 : 350,
    top: 33,
    marginBottom: 20, 
  }
});

export default SearchBar;
