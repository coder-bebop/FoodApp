import { View, Pressable, Text, ImageBackground } from "react-native";
import { createStyle } from "../utils";

function MealGridTile({ title, image }) {
  return (
    <ImageBackground source={{ uri: image }} style={styles.tileImage}>
      <View style={styles.tileView}>
        <Pressable
          style={styles.tilePressable}
          android_ripple={{ color: "white" }}
        >
          <Text style={styles.tileText}>{title}</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}

const styles = createStyle({
  tileImage: {
    flex: 1,
    height: 150,
    borderRadius: 8,
    margin: 20,
  },
  tileView: {
    flex: 1,
    height: 150,
    borderRadius: 8,
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
    textShadowColor: "#000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default MealGridTile;
