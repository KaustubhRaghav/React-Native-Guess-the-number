import { View, Image, StyleSheet, Text } from "react-native";

import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen = ({ inputNum, numOfRounds, onStartNewGame }) => {
  return (
    <View style={styles.rootContainer}>
      <Title titleTxt="GAME OVER!!!" />
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{numOfRounds}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlight}>{inputNum}</Text>.
      </Text>
      <PrimaryButton onPressFxn={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    paddingHorizontal: 24,
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    margin: 36,
    borderRadius: 150,
    borderWidth: 3,
    overflow: "hidden",
    borderColor: Colors.primary800,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});

export default GameOverScreen;
