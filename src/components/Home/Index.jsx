import React from "react";
import Carusel from "../Carusel";
import Category from "../Category";
import Filter from "../Filter";
import Recommended from "../Recommended";
import { Container } from "./style";

export const Home = () => {
  return (
    <Container>
      <Filter />
      <Carusel />
      <Recommended />
      <Category />
    </Container>
  );
};

export default Home;
