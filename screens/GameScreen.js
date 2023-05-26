import { useState, useEffect, useMemo } from "react";
import { View, StyleSheet, Alert, Text, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import { generateRandomNum } from "../utils/generateRandomNum";
import InstructionText from "../components/ui/InstructionText";
import GuessLogItem from "../components/game/GuessLogItem";

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ inputNum, setGameIsOver, setNumOfGuesses }) => {
  const initialGuess = useMemo(
    () => generateRandomNum(minBoundary, maxBoundary, inputNum),
    [inputNum]
  );
  const [currGuess, setCurrGuess] = useState(initialGuess);
  const [guessLogs, setGuessLogs] = useState([initialGuess]);

  useEffect(() => {
    if (currGuess === inputNum) {
      minBoundary = 1;
      maxBoundary = 100;
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
      setNumOfGuesses((prevCount) => prevCount + 1);
      setGuessLogs((prevState) => [nextGuess, ...prevState]);
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
            <PrimaryButton onPressFxn={() => nextGuessHandler("higher")}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPressFxn={() => nextGuessHandler("lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={guessLogs}
          renderItem={({ item, index }) => (
            <GuessLogItem guess={item} roundNum={guessLogs.length - index} />
          )}
          keyExtractor={(item) => item}
        />
      </View>
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
  listContainer: {
    marginHorizontal: 24,
    flex: 1,
    marginBottom: 24,
  },
});

export default GameScreen;
