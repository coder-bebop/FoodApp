import { useContext } from "react";
import { View, FlatList, Text } from "react-native";
import MealGridTile from "../components/MealGridTile";
import { MEALS } from "../constants/data";
import { FavoriteContext } from "../store/context/FavoriteContext";
import { createStyle } from "../utils";

function FavoritesScreen() {
  const { favoriteMeals } = useContext(FavoriteContext);

  function renderMealItem({ item }) {
    if (!favoriteMeals.includes(item.id)) {
      return;
    }

    return <MealGridTile {...item} />;
  }

  return favoriteMeals.length === 0 ? (
    <View style={styles.defaultMessageView}>
      <Text style={styles.defaultMessageText}>
        You haven't chosen any favorites
      </Text>
    </View>
  ) : (
    <FlatList
      data={MEALS}
      keyExtractor={({ id }) => id}
      renderItem={renderMealItem}
    />
  );
}

const styles = createStyle({
  defaultMessageView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  defaultMessageText: { fontSize: 20, textAlign: "center" },
});

export default FavoritesScreen;
