import { View, Text, StyleSheet } from "react-native";
import Title from "../components/Title";

const GameScreen = ({ inputNum }) => {
  return (
    <View style={styles.container}>
      <Title
        titleTxt="Opponent's Guess"
        fontSize={26}
        fontWeight="bold"
        color="#ddb52f"
        textAlign="center"
        borderWidth={2}
        borderColor="#ddb52f"
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
