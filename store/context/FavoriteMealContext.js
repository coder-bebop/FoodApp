import { createContext, useState } from "react";

export const FavoriteContext = createContext({
  favoriteMeals: [],
  setFavoriteMeal: (id) => {},
});

function FavoriteContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  function addOrRemove(id) {
    setFavoriteMealIds((mealIds) => {
      if (!mealIds.includes(id)) {
        return [...mealIds, id];
      }

      return mealIds.filter((meal) => meal !== id);
    });
  }

  const contextValue = {
    favoriteMeals: favoriteMealIds,
    setFavoriteMeal: addOrRemove,
  };

  return (
    <FavoriteContext.Provider value={contextValue}>
      {children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteContextProvider;
