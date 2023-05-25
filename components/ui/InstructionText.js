import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const InstructionText = ({ text, customStyle }) => {
  return <Text style={[styles.textStyle, customStyle]}>{text}</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    color: Colors.accent500,
    fontSize: 24,
    fontFamily: "open-sans",
  },
});

export default InstructionText;
