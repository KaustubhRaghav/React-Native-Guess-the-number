import { useState, useRef } from "react";
import { StyleSheet, TextInput, View, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
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
    <View style={styles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    justifyContent: "center",
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    marginVertical: 8,
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
