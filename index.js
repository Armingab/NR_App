import { YellowBox } from "react-native";
import { AppRegistry } from "react-native";
import App from "./App";

YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Method `jumpToIndex` is deprecated",
  "Module RCTImageLoader"
]);

AppRegistry.registerComponent("FlowersApp", () => App);
