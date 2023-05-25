import { View, Text, Pressable, StyleSheet, Platform } from "react-native";
import Colors from "../../constants/colors";

const PrimaryButton = ({ children, onPressFxn }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPressFxn}
        android_ripple={{
          color: Colors.primary600,
        }}
        style={({ pressed }) =>
          Platform.OS === "ios" && pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: Colors.primary500,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
