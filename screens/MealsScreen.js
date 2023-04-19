import { FlatList, Text, View } from "react-native";
import MealGridTile from "../components/MealGridTile";
import { MEALS } from "../constants/data";

function MealsScreen({ route }) {
  const { categoryId } = route.params;
  const displayedMeals = MEALS.filter(({ categoryIds }) =>
    categoryIds.some((id) => id === categoryId)
  );

  function renderMealItem({ item }) {
    return <MealGridTile {...item} />;
  }

  return (
    <FlatList
      data={displayedMeals}
      keyExtractor={(meal) => meal.id}
      renderItem={renderMealItem}
    />
  );
}

export default MealsScreen;
