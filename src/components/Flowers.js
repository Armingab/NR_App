import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { GET_FLOWERS, SEARCH_FLOWERS, AUTHORIZATION } from "../utils/common";
import SearchBar from "./SearchBar";
import FlowerItem from "./FlowerItem";

class Flowers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flowers: [],
      error: ""
    };
  }

  getFlowers = () => {
    return fetch(GET_FLOWERS, { AUTHORIZATION })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          flowers: responseJson
        });
      })
      .catch(error => {
        this.setState({
          error
        });
      });
  };

  searchFlowers = flower => {
    return fetch(
      SEARCH_FLOWERS + flower,
      { AUTHORIZATION }
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          flowers: responseJson
        });
      })
      .catch(error => {
        this.setState({
          error
        });
      });
  };

  renderFlower = ({ item, index }) => {
    return <FlowerItem data={item} openDetails={this.openDetails} />;
  };

  componentDidMount() {
    this.getFlowers();
  }

  openDetails = () => {
    this.props.navigation.navigate("Details", {});
  };

  render() {
    const { flowers } = this.state.flowers;
    return (
      <View style={styles.container}>
        <SearchBar searchFlowers={this.searchFlowers} />
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderFlower}
          onRefresh={this.getFlowers}
          data={flowers}
          numColumns={2}
          refreshing={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  }
});

export default Flowers;
