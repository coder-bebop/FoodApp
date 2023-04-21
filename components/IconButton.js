import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createStyle } from "../utils";

function IconButton({ icon, callback, color }) {
  return (
    <Pressable
      onPress={callback}
      style={({ pressed }) => pressed && styles.pressed}
      android_ripple={{ color: "white" }}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
}

const styles = createStyle({
  pressed: {
    opacity: 0.7,
  },
});

export default IconButton;
