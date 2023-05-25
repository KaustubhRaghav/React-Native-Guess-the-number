import { useState, useEffect, useMemo } from "react";
import { View, StyleSheet, Alert } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import { generateRandomNum } from "../utils/generateRandomNum";
import InstructionText from "../components/ui/InstructionText";

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
      <Title titleTxt="Opponent's Guess" />
      <NumberContainer guessNum={currGuess} />
      <Card>
        <InstructionText
          text="Higher or lower?"
          customStyle={styles.instructionText}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              btnText="+"
              onPressFxn={() => nextGuessHandler("higher")}
            />
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              btnText="-"
              onPressFxn={() => nextGuessHandler("lower")}
            />
          </View>
        </View>
      </Card>
      <View>{/* LOG ROUNDS */}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default GameScreen;
