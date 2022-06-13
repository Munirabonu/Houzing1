import React from "react";
import { Container, Image, Title } from "./style";
import img from '../../../assets/imgs/uy1.png'

export const Card = ({title}) => {
return <Container>
  <Title>{title}</Title>
  <Image src={img}/>
</Container>;
};

export default Card;
