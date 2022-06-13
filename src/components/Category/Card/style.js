import styled from "styled-components";
import img from '../../../assets/imgs/uy1.png'
const Container = styled.div`
width: 280px;
height: 350px;
box-shadow: 0px 20px 38px rgba(0, 0, 0, 0.06), 0px 7px 46px rgba(0, 0, 0, 0.06), 0px 8px 15px rgba(0, 0, 0, 0.06);
border-radius: 3px;
position: relative;
`;

const Title = styled.div`
    position: absolute;
    top: 50%;
    left: 40%;
    z-index: 1;
    font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 28px;
/* identical to box height, or 156% */
color: #FFFFFF;

`

const Image = styled.img``

export { Container, Image, Title };
