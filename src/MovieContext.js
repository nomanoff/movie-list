import React, { useState, createContext } from "react";
export const MovieContext = createContext();

export function MoviesProvider({ children }) {
  const [movies, setMovies] = useState([
    {
      name: "Avengers",
      price: "20$",
      id: 1,
    },
    {
      name: "Spider-man",
      price: "10$",
      id: 2,
    },
    {
      name: "Iron Man 3",
      price: "22$",
      id: 3,
    },
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {children}
    </MovieContext.Provider>
  );
}
