import { FlatList, Text, View } from "react-native";
import MealGridTile from "../components/MealGridTile";
import { MEALS } from "../constants/data";

function MealsScreen({ navigation, route }) {
  const { categoryId } = route.params;
  const displayedMeals = MEALS.filter(({ categoryIds }) =>
    categoryIds.some((id) => id === categoryId)
  );

  function renderMealItem({ item }) {
    function handleNavigation() {
      navigation.navigate("Description", item);
    }

    return <MealGridTile {...item} callback={handleNavigation} />;
  }

  return (
    <FlatList
      data={displayedMeals}
      keyExtractor={(meal) => meal.id}
      renderItem={renderMealItem}
      numColumns={2}
    />
  );
}

export default MealsScreen;
