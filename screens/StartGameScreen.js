import { useState, useRef } from "react";
import { StyleSheet, TextInput, View, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import Colors from "../constants/colors";

const StartGameScreen = ({ setInputNum }) => {
  const [myNum, setMyNum] = useState("");
  const textInputEle = useRef(null);

  const handleTextInput = (enteredData) => {
    setMyNum(enteredData);
  };

  const handleResetBtn = () => {
    setMyNum("");
  };

  const handleTextInputReset = () => {
    setMyNum("");
    textInputEle.current.focus();
  };

  const handleConfirmBtn = () => {
    const enteredNum = +myNum;

    if (
      !!enteredNum &&
      Number.isInteger(enteredNum) &&
      enteredNum >= 1 &&
      enteredNum <= 99
    ) {
      setInputNum(enteredNum);
    } else {
      textInputEle.current.blur();
      Alert.alert("Invalid number!!", "Enter a number between 1 and 99.", [
        {
          text: "Okay",
          style: "destructive",
          onPress: handleTextInputReset,
        },
      ]);
    }
  };

  return (
    <View style={styles.rootContainer}>
      <Title titleTxt="Guess My Number !!" />
      <Card>
        <InstructionText text="Enter a Number" />
        <TextInput
          style={styles.numberInput}
          keyboardType="number-pad"
          maxLength={2}
          selectionColor={Colors.accent300}
          value={myNum}
          onChangeText={handleTextInput}
          ref={textInputEle}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton btnText="Reset" onPressFxn={handleResetBtn} />
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton btnText="Confirm" onPressFxn={handleConfirmBtn} />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    marginTop: 5,
    marginBottom: 8,
    fontSize: 32,
    fontWeight: "bold",
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
