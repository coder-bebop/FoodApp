import { View, Pressable, Text, ImageBackground } from "react-native";
import { createStyle } from "../utils";

function MealGridTile({ title, image, duration }) {
  return (
    <ImageBackground source={{ uri: image }} style={styles.tileImage}>
      <View style={styles.tileView}>
        <Pressable
          style={styles.tilePressable}
          android_ripple={{ color: "white" }}
        >
          <Text style={styles.mealNameText}>{title}</Text>
        </Pressable>
      </View>
      <View style={styles.durationView}>
        <Text style={styles.durationText}>{duration}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = createStyle({
  tileImage: {
    flex: 1,
    height: 150,
    borderRadius: 20,
    margin: 20,
  },
  tileView: {
    flex: 1,
    height: 150,
    borderRadius: 20,
  },
  tilePressable: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    borderRadius: 8,
    padding: 16,
  },
  mealNameText: {
    textShadowColor: "#000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  durationView: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
    borderRadius: 10,
    opacity: 0.6,
    width: "15%",
    height: "12%",
    margin: 7,
  },
  durationText: {
    fontSize: 13,
    fontWeight: "bold",
  },
});

export default MealGridTile;
