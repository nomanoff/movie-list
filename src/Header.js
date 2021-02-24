import React, { useContext } from "react";
import styled from "styled-components";
import { MovieContext } from "./MovieContext";

function Header() {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <div>
      <h1>Your Movies: {movies.length}</h1>
    </div>
  );
}

export default Header;
