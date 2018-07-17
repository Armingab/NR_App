import React from "react";
import { StackNavigator, TabNavigator } from "react-navigation";
import { Image, StyleSheet } from "react-native";

import Home from "../components/Home";
import Details from "../components/Details";
import Sightings from "../components/Sightings";
import Flowers from "../components/Flowers";
import Comments from "../components/Comments";
import Favourites from "../components/Favourites";
import HeaderBar from "../components/common/HeaderBar";

import {
  COLOR_WHITE,
  COLOR_BLACK,
  COLOR_TRANSPARENT,
  COLOR_GRAY,
  COLOR_DARK_GRAY
} from "../utils/common";

const Router = StackNavigator(
  {
    Details: {
      screen: Details
    },
    Home: {
      screen: TabNavigator(
        {
          Flowers: {
            screen: Flowers
          },

          Sightings: {
            screen: Sightings
          },

          Favourites: {
            screen: Favourites
          },

          Comments: {
            screen: Comments
          }
        },
        {
          navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({  }) => {
              const { routeName } = navigation.state;
              let icon, width, height;
              switch (routeName) {
                case "Flowers":
                  icon = require("../../assets/img/favorites_icons.png");
                  return (
                    <Image source={icon} style={{ width: 40, height: 40 }} />
                  );
                case "Comments":
                  icon = require("../../assets/img/comment_icon.png");
                  return (
                    <Image source={icon} style={{ width: 40, height: 40 }} />
                  );
                case "Sightings":
                  icon = require("../../assets/img/new_sighting_icon.png");
                  return (
                    <Image source={icon} style={{ width: 40, height: 40 }} />
                  );
                case "Favourites":
                  icon = require("../../assets/img/sighting_list_icon.png");
                  return (
                    <Image source={icon} style={{ width: 40, height: 40 }} />
                  );

                default:
                  break;
              }
            }
          }),

          tabBarOptions: {
            showIcon: true,
            showLabel: false,
            style: {
              backgroundColor: COLOR_WHITE,
              shadowColor: COLOR_GRAY,
            },
            iconStyle: {
              width: 47,
              height: 47
            }
          },
          tabBarPosition: "bottom",
          swipeEnabled: false
        }
      )
    }
  },
  {
    navigationOptions: {
      gesturesEnabled: false,
      headerTitle: <HeaderBar />
    },
    initialRouteName: "Home"
  }
);

export default Router;
