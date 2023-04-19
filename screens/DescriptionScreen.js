import { useContext } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import TextList from "../components/TextList";
import { ColorContext } from "../store/context/ColorContext";
import { createStyle } from "../utils";

function DescriptionScreen({ route }) {
  const mealData = route.params;
  const { categoryColor } = useContext(ColorContext);

  return (
    <View style={styles.screen}>
      <View style={{ flexDirection: "row" }}>
        <View style={[styles.foodView, { backgroundColor: categoryColor }]}>
          <Image style={styles.foodImage} source={{ uri: mealData.imageUrl }} />
        </View>
        {mealData.isGlutenFree ? (
          <Image
            style={styles.glutenCertified}
            source={require("../assets/gluten-free.png")}
          />
        ) : null}
      </View>
      <ScrollView>
        <Text style={styles.subtitle}>Ingredients</Text>
        <TextList
          style={styles.ingredientsView}
          itemStyle={styles.ingredient}
          data={mealData.ingredients}
        />
        <Text style={styles.subtitle}>Steps</Text>
        <TextList
          style={styles.stepsView}
          itemStyle={styles.step}
          data={mealData.steps}
        />
      </ScrollView>
    </View>
  );
}

const styles = createStyle({
  screen: {
    flex: 1,
    flexDirection: "column",
    margin: 20,
  },
  foodView: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 200,
    padding: "3%",
    marginBottom: 25,
  },
  foodImage: {
    width: "98%",
    height: "98%",
  },
  subtitle: {
    backgroundColor: "brown",
    fontSize: 20,
    fontWeight: "900",
    color: "white",
    textAlign: "center",
    marginBottom: 7,
  },
  ingredientsView: {
    marginBottom: 25,
    alignItems: "center",
  },
  ingredient: {
    backgroundColor: "#8AFF8A",
    fontWeight: "bold",
    textDecorationLine: "underline",
    fontSize: 16,
  },
  stepsView: {
    padding: 20,
    backgroundColor: "#ddd492",
    borderRadius: 10,
  },
  step: {
    fontSize: 16,
    margin: 4,
    padding: 8,
    backgroundColor: "#c9a",
    borderRadius: 20,
    borderWidth: 1,
  },
});

export default DescriptionScreen;
