import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../constants/data";

function CategoriesScreen({ navigation }) {
  function CategoryItem({ item }) {
    function handleNavigation() {
      navigation.navigate("Meals", {
        categoryId: item.id,
      });
    }

    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        callback={handleNavigation}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={({ id }) => id}
      renderItem={CategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
