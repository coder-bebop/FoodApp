import { Text, View } from "react-native";

function TextList({ data, style, itemStyle }) {
  return (
    <View style={style}>
      {data.map((item) => (
        <Text key={item} style={itemStyle}>
          {item}
        </Text>
      ))}
    </View>
  );
}

export default TextList;
