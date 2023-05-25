import { Text } from "react-native";

const Title = ({
  titleTxt,
  fontSize = 26,
  fontWeight = "bold",
  color = "white",
  textAlign = "center",
  borderWidth = 2,
  borderColor = "white",
  padding = 12,
}) => {
  return (
    <Text
      style={{
        fontSize,
        fontWeight,
        color,
        textAlign,
        borderWidth,
        borderColor,
        padding,
      }}
    >
      {titleTxt}
    </Text>
  );
};

export default Title;
