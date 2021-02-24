import React, { useContext } from "react";
import styled from "styled-components";
import { MovieContext } from "./MovieContext";

const StyledCard = styled.div`
  width: 300px;
  height: 50px;
  display: flex;
  margin: 1rem;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border: 2px solid #ddd;
`;

function Movies() {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      {movies.map((movie) => {
        return (
          <StyledCard key={movie.id}>
            <h2>{movie.name}</h2>
            <p>{movie.price}</p>
            <p>{movies.length}</p>
          </StyledCard>
        );
      })}
    </div>
  );
}

export default Movies;
