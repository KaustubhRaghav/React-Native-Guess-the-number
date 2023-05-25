import { Text, StyleSheet } from "react-native";

const Title = ({ titleTxt }) => {
  return <Text style={styles.titleText}>{titleTxt}</Text>;
};

const styles = StyleSheet.create({
  titleText: {
    fontFamily: "open-sans-bold",
    fontSize: 26,
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
  },
});

export default Title;
