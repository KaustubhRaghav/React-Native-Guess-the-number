import { View, Text, StyleSheet } from "react-native";
import Title from "../components/Title";
import Colors from "../constants/colors";

const GameScreen = ({ inputNum }) => {
  return (
    <View style={styles.container}>
      <Title
        titleTxt="Opponent's Guess"
        fontSize={26}
        fontWeight="bold"
        color={Colors.accent500}
        textAlign="center"
        borderWidth={2}
        borderColor={Colors.accent500}
        padding={12}
      />
      {/* GUESS */}
      <View>
        <Text>Higher or lower?</Text>
        {/* + - */}
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
});

export default GameScreen;
