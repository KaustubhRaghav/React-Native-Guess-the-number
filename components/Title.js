import { Text } from "react-native";

const Title = ({
  titleTxt,
  fontSize,
  fontWeight,
  color,
  textAlign,
  borderWidth,
  borderColor,
  padding,
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
