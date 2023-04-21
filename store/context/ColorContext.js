import { createContext, useState } from "react";

export const ColorContext = createContext({
  categoryColor: "",
  changeCategoryColor: (color) => {},
});

function ColorContextProvider({ children }) {
  const [categoryColor, setCategoryColor] = useState("#ffffff");

  function changeCategoryColor(color) {
    setCategoryColor(color);
  }

  const contextValue = {
    categoryColor: categoryColor,
    changeCategoryColor: changeCategoryColor,
  };

  return (
    <ColorContext.Provider value={contextValue}>
      {children}
    </ColorContext.Provider>
  );
}

export default ColorContextProvider;
