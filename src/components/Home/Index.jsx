import React from "react";
import HouseCard from "../Card";
import Carusel from "../Carusel";
import Filter from "../Filter";
import { Container } from "./style";

export const Home = () => {
  return (
    <Container>
      <Filter />
      <Carusel />
      <HouseCard />
    </Container>
  );
};

export default Home;
