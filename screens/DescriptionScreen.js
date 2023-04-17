import { View, Text, Image, FlatList } from "react-native";
import { createStyle } from "../utils";

function DescriptionScreen({ route }) {
  const mealData = route.params;

  return (
    <View style={styles.screen}>
      <View style={{ flexDirection: "row" }}>
        <Image style={styles.foodImage} source={{ uri: mealData.imageUrl }} />
        {mealData.isGlutenFree ? (
          <Image
            style={styles.glutenCertified}
            source={require("../assets/gluten-free.png")}
          />
        ) : null}
      </View>
      <FlatList
        data={mealData.ingredients}
        renderItem={({ item }) => (
          <Text style={styles.ingredient}>- {item}</Text>
        )}
      />
      <FlatList
        data={mealData.steps}
        renderItem={({ item, index }) => (
          <Text style={styles.step}>
            {index + 1}. {item}
          </Text>
        )}
      />
    </View>
  );
}

const styles = createStyle({
  screen: {
    flex: 1,
    flexDirection: "column",
    margin: 20,
  },
  foodImage: {
    borderWidth: 1000,
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  ingredient: {
    fontWeight: "bold",
  },
  step: {
    fontSize: 16,
  },
});

export default DescriptionScreen;
