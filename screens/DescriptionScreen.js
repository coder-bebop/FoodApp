import { useContext, useLayoutEffect } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import IconButton from "../components/IconButton";
import TextList from "../components/TextList";
import { ColorContext } from "../store/context/ColorContext";
import { FavoriteContext } from "../store/context/FavoriteContext";
import { createStyle } from "../utils";
import Toast from "react-native-root-toast";

function DescriptionScreen({ navigation, route }) {
  const mealData = route.params;
  const { categoryColor } = useContext(ColorContext);
  const { setFavoriteMeal } = useContext(FavoriteContext);
  const addedToast = "Added to favorites";
  const removedToast = "Removed from favorites";

  function showToast(message) {
    Toast.show(message, { duration: Toast.durations.SHORT });
  }

  function createFavoriteButton() {
    function favoriteButtonCallback() {
      const wasAdded = setFavoriteMeal(mealData.id);

      showToast(wasAdded ? addedToast : removedToast);
    }

    return (
      <IconButton icon="star" color="white" callback={favoriteButtonCallback} />
    );
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: createFavoriteButton,
    });
  });

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
    padding: 3,
    fontWeight: "900",
    color: "white",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
    textShadowColor: "#000",
    textShadowOffset: { width: 1.5, height: 1.5 },
    textShadowRadius: 1.5,
  },
  ingredientsView: {
    marginBottom: 28,
    alignItems: "center",
  },
  ingredient: {
    backgroundColor: "#8AFF8A",
    fontWeight: "bold",
    textDecorationLine: "underline",
    fontSize: 16,
  },
  stepsView: {
    padding: 10,
  },
  step: {
    backgroundColor: "#c9a",
    borderRadius: 20,
    borderWidth: 1,
    fontSize: 16,
    margin: 3,
    padding: 3,
    textAlign: "center",
  },
});

export default DescriptionScreen;
