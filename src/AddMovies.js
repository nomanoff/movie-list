import React, { useContext } from "react";
import styled from "styled-components";
import { MovieContext } from "./MovieContext";

function AddMovies() {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <form>
      <label>Movie:</label>
      <input></input>
      <label>Price</label>
      <input></input>

      <button>Add</button>
    </form>
  );
}

export default AddMovies;
