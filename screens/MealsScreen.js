import { Text, View } from "react-native";

function MealsScreen({ route }) {
  const { categoryId } = route.params;

  return (
    <View>
      <Text>{categoryId}</Text>
    </View>
  );
}

export default MealsScreen;
