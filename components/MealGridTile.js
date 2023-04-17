import { View, Pressable, Text, ImageBackground } from "react-native";
import { createStyle } from "../utils";

function MealGridTile({ title, imageUrl, duration, callback }) {
  return (
    <ImageBackground
      source={{ uri: imageUrl }}
      style={styles.tileImage}
      imageStyle={{ borderRadius: 10 }}
    >
      <Pressable
        style={styles.tilePressable}
        android_ripple={{ color: "white" }}
        onPress={callback}
      >
        <Text style={styles.mealNameText}>{title}</Text>
        <View style={styles.durationView}>
          <Text style={styles.durationText}>{duration}</Text>
        </View>
      </Pressable>
    </ImageBackground>
  );
}

const styles = createStyle({
  tileImage: {
    flex: 1,
    height: 150,
    borderRadius: 50,
    margin: 20,
  },
  tilePressable: {
    borderRadius: 8,
    justifyContent: "space-between",
    padding: 5,
    height: "100%",
    width: "100%",
  },
  mealNameText: {
    alignSelf: "center",
    textShadowColor: "#000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  durationView: {
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
    borderRadius: 10,
    opacity: 0.85,
    width: "16%",
    height: "13%",
    margin: 7,
  },
  durationText: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default MealGridTile;
