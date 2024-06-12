import React, { createContext, useState } from 'react';

export const FavContext = createContext();

export const FavProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFav = (product) => {
    setFavorites([...favorites, product]);
  };

  const removeFromFav = (productId) => {
    setFavorites(favorites.filter(item => item.id !== productId));
  };

  return (
    <FavContext.Provider value={{ favorites, addToFav, removeFromFav }}>
      {children}
    </FavContext.Provider>
  );
};
