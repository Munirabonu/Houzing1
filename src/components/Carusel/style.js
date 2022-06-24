import { Carousel } from "antd";
import styled from "styled-components";
import carousel1 from "../../assets/imgs/carousel1.png";
import  {ReactComponent as arrow}  from '../../assets/icons/arrow.svg';
const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;
const CarouselWrap = styled(Carousel)`
  height: fit-content;
`
const Wrap = styled.div`
`
const Card = styled.div`
  `
const Content = styled.div`
  color: white;
  font-size: 40px;
  width:100%;
  height: 75vh;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${carousel1});
  background-size: cover;
  /* position: relative; */
  /* &::after{
    content: "";
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.65);
    position: absolute;
  } */
`;
const Icon = styled.div``;
Icon.Right = styled(arrow)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000000;
  opacity: 0.2;
  position: absolute;
  top: 50%;
  right: ${({left})=>left?"95%":"5%"};
  transform: ${({left})=>left&&"rotate(180deg)"};
  width: 45px;
  height: 45px;
  color: white;
  z-index: 999;
  padding: 12px;
  border-radius: 50%;
  cursor: pointer;
  :hover {
    opacity: 0.97;
  }
  & path {
    /* fill: #0d263b; */
  }
`


export { Container, Card, Content, Wrap, CarouselWrap,Icon };

// .ant-card