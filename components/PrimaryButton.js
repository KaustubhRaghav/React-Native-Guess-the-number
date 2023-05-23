import { View, Text, Pressable, StyleSheet, Platform } from "react-native";

const PrimaryButton = ({ btnText }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={() => {}}
        android_ripple={{
          color: "#640233",
        }}
        style={({ pressed }) =>
          Platform.OS === "ios" && pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
      >
        <Text style={styles.buttonText}>{btnText}</Text>
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
    backgroundColor: "#72063c",
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
