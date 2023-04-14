import { FlatList, Text, View } from "react-native";
import MealGridTile from "../components/MealGridTile";
import { MEALS } from "../constants/data";

function MealsScreen({ route }) {
  const { categoryId } = route.params;
  const displayedMeals = MEALS.filter(({ categoryIds }) =>
    categoryIds.some((id) => id === categoryId)
  );

  function renderMealItem({ item }) {
    return (
      <MealGridTile
        title={item.title}
        image={item.imageUrl}
        duration={item.duration}
      />
    );
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
