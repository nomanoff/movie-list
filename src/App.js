import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Movies from "./Movies";
import { MoviesProvider } from "./MovieContext";
import AddMovies from "./AddMovies";

const Container = styled.div`
  max-width: 1000px;
  width: 100%auto;
  height: 90vh;
  padding: 10px;
  margin: 0 auto;
  background-color: #eee;
  text-align: center;
`;

function App() {
  return (
    <Container>
      <MoviesProvider>
        <Header />
        <AddMovies />
        <Movies />
      </MoviesProvider>
    </Container>
  );
}

export default App;
