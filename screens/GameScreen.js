import { useState, useEffect, useMemo } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import { generateRandomNum } from "../utils/generateRandomNum";

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ inputNum, setGameIsOver }) => {
  const initialGuess = useMemo(
    () => generateRandomNum(minBoundary, maxBoundary, inputNum),
    [inputNum]
  );
  const [currGuess, setCurrGuess] = useState(initialGuess);

  useEffect(() => {
    if (currGuess === inputNum) {
      setGameIsOver(true);
    }
  }, [currGuess, inputNum, setGameIsOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currGuess < inputNum) ||
      (direction === "higher" && currGuess > inputNum)
    ) {
      Alert.alert("Don't lie!!", "You know that this is wrong...", [
        {
          text: "Sorry!!",
          style: "Cancel",
        },
      ]);
    } else {
      if (direction === "lower") {
        maxBoundary = currGuess;
      } else {
        minBoundary = currGuess + 1;
      }
      let nextGuess = generateRandomNum(minBoundary, maxBoundary, currGuess);
      setCurrGuess(nextGuess);
    }
  };

  return (
    <View style={styles.container}>
      <Title
        titleTxt="Opponent's Guess"
        fontSize={26}
        fontWeight="bold"
        color="white"
        textAlign="center"
        borderWidth={2}
        borderColor="white"
        padding={12}
      />
      <NumberContainer guessNum={currGuess} />
      <View>
        <Text>Higher or lower?</Text>
        <View style={styles.btnContainer}>
          <PrimaryButton
            btnText="+"
            onPressFxn={() => nextGuessHandler("higher")}
          />
          <PrimaryButton
            btnText="-"
            onPressFxn={() => nextGuessHandler("lower")}
          />
        </View>
        <View>{/* LOG ROUNDS */}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  btnContainer: {
    flexDirection: "row",
  },
});

export default GameScreen;
