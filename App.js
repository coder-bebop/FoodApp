import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import { CategoriesScreen, DescriptionScreen, MealsScreen } from "./screens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ColorContextProvider from "./store/context/ColorContext";
import FavoriteContextProvider from "./store/context/FavoriteMealContext";
import FavoritesScreen from "./screens/FavoritesScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        <ColorContextProvider>
          <FavoriteContextProvider>
            <NavigationContainer>
              <Stack.Navigator
                initialRouteName="Categories"
                screenOptions={{
                  headerStyle: { backgroundColor: "#DC143C" },
                  headerTintColor: "white",
                  contentStyle: { backgroundColor: "#FFFF8A" },
                }}
              >
                <Stack.Screen name="Categories" component={CategoriesScreen} />
                <Stack.Screen name="Meals" component={MealsScreen} />
                <Stack.Screen
                  name="Description"
                  component={DescriptionScreen}
                />
                <Stack.Screen name="Favorites" component={FavoritesScreen} />
              </Stack.Navigator>
            </NavigationContainer>
          </FavoriteContextProvider>
        </ColorContextProvider>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
