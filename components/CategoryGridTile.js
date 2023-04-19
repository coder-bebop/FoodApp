import { View, Pressable, Text } from "react-native";
import { createStyle } from "../utils";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { ColorContext } from "../store/context/ColorContext";

function CategoryGridTile({ id, title, color }) {
  const navigation = useNavigation();
  const { changeCategoryColor } = useContext(ColorContext);

  function navigateToMealsScreen() {
    changeCategoryColor(color);

    navigation.navigate("Meals", {
      categoryId: id,
    });
  }

  return (
    <View style={[styles.tileView, { backgroundColor: color }]}>
      <Pressable
        style={styles.tilePressable}
        onPress={navigateToMealsScreen}
        android_ripple={{ color: "white" }}
      >
        <Text style={styles.tileText}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = createStyle({
  tileView: {
    overflow: "hidden",
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 12,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 2,
  },
  tilePressable: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    borderRadius: 8,
    padding: 16,
  },
  tileText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
});

export default CategoryGridTile;
