import { useContext } from "react";
import { FlatList } from "react-native";
import MealGridTile from "../components/MealGridTile";
import { MEALS } from "../constants/data";
import { FavoriteContext } from "../store/context/FavoriteMealContext";

function FavoritesScreen() {
  const { favoriteMeals } = useContext(FavoriteContext);

  function renderMealItem({ item }) {
    if (!favoriteMeals.includes(item.id)) {
      return;
    }

    return <MealGridTile {...item} />;
  }

  return (
    <FlatList
      data={MEALS}
      keyExtractor={({ id }) => id}
      renderItem={renderMealItem}
    />
  );
}

export default FavoritesScreen;
