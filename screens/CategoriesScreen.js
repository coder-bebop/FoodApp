import { useLayoutEffect } from "react";
import { FlatList, Pressable, Text } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../constants/data";

function CategoriesScreen({ navigation }) {
  function renderCategoryItem({ item }) {
    return <CategoryGridTile {...item} />;
  }

  function createFavoritesScreenButton() {
    function navigateToFavoritesScreen() {
      navigation.navigate("Favorites");
    }

    return (
      <Pressable
        onPress={navigateToFavoritesScreen}
        style={({ pressed }) => pressed & { oppacity: 0.7 }}
      >
        <Text style={{ fontSize: 20, fontWeight: "500", color: "white" }}>
          Favorites
        </Text>
      </Pressable>
    );
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: createFavoritesScreenButton,
    });
  });

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={({ id }) => id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
