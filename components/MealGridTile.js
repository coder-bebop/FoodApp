import { View, Pressable, Text, ImageBackground } from "react-native";
import { createStyle } from "../utils";
import { useNavigation } from "@react-navigation/native";

function MealGridTile(props) {
  const navigation = useNavigation();

  function navigateToDescriptionScreen() {
    navigation.navigate("Description", props);
  }

  return (
    <ImageBackground
      source={{ uri: props.imageUrl }}
      style={styles.tileImage}
      imageStyle={{ borderRadius: 10 }}
    >
      <Pressable
        style={styles.tilePressable}
        android_ripple={{ color: "white" }}
        onPress={navigateToDescriptionScreen}
      >
        <View style={styles.mealNameView}>
          <Text style={styles.mealNameText}>{props.title}</Text>
        </View>
        <View style={styles.durationView}>
          <Text style={styles.durationText}>{props.duration}m</Text>
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
  mealNameView: {
    marginTop: 50,
  },
  mealNameText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    textShadowColor: "#000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
  durationView: {
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
    borderRadius: 10,
    opacity: 0.88,
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
