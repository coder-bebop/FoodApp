import { createContext, useState } from "react";

export const FavoriteContext = createContext({
  favoriteMeals: [],
  setFavoriteMeal: (id) => {},
});

function FavoriteContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  function addOrRemove(id) {
    let wasAdded;

    setFavoriteMealIds((mealIds) => {
      if (!mealIds.includes(id)) {
        wasAdded = true;
        return [...mealIds, id];
      }

      wasAdded = false;
      return mealIds.filter((meal) => meal !== id);
    });

    return wasAdded;
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
