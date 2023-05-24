import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [inputNum, setInputNum] = useState(null);

  let currScreen = <StartGameScreen setInputNum={setInputNum} />;

  if (inputNum) {
    currScreen = <GameScreen inputNum={inputNum} />;
  }

  return (
    <LinearGradient style={styles.rootScreen} colors={["#4e0329", "#ddb52f"]}>
      <ImageBackground
        source={require("./assets/images/bg_img.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.bgImgStyle}
      >
        <SafeAreaView style={styles.rootScreen}>{currScreen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  bgImgStyle: {
    opacity: 0.15,
  },
});
