import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../constants/data";

function CategoriesScreen() {
  function renderCategoryItem({ item }) {
    return <CategoryGridTile {...item} />;
  }

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
