import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const NumberContainer = ({ guessNum }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{guessNum}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 36,
    fontWeight: "bold",
  },
});

export default NumberContainer;
