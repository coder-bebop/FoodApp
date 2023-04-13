import { View, Pressable, Text } from "react-native";
import { createStyle } from "../utils";

function CategoryGridTile({ title, color, callback }) {
  return (
    <View style={[styles.tileView, { backgroundColor: color }]}>
      <Pressable
        style={styles.tilePressable}
        onPress={callback}
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
    elevation: 4,
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
