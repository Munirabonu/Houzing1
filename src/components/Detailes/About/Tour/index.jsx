import React from "react";
import { Container, Input, Line1, Title } from "./style";

export const Tour = () => {
  return (
  <Container>
    <Title>Schedule A Tour</Title>
    <Line1>
      <Input type="date" placeholder="Data"/>
      <Input type="time" placeholder="10:00"/>
    </Line1>
    <Line1>
      <Input />
      <Input />
      <Input />
    </Line1>
    <Input />
  </Container>
  )
};

export default Tour;
