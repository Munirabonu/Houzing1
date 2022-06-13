import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as bed } from '../../assets/icons/bed.svg';
import { ReactComponent as love } from '../../assets/icons/love.svg';
const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;
const Img = styled.div`
  width: 100%;
  height: 70vh;
  background-color: azure;
`
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
Title.IconCon = styled.div`
display: flex;
gap: 20px;
`

const WrapDes = styled.div`
  display: flex;
  gap:30px;
`
const Info = styled.div``;

Info.Title = styled.div`
  font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
color: #0D263B;

`
Info.Text = styled.div`
  display: flex;
  white-space: nowrap;
  overflow: hidden;
  color: #696969;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  
`
const Icons = styled.div`
`;

Icons.Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
  height: 45px;
  gap: 10px;
`

Icons.Bed = styled(bed)`
  cursor: pointer;
  width: 35px;
  height: 35px;
  padding: 10px;
  background: #f6f8f9;
  border-radius:50% ;
`;
Icons.Love = styled(love)`
  width: 35px;
  height: 35px;
  padding: 10px;
  background: #f6f8f9;
  border-radius:50% ;

  cursor: pointer;
  :active{
    transform: scale(0.97)
  }
`
const PriceWrap = styled.div`
  display: flex;
  justify-content: space-between;
align-items: center;
  margin: 20px 0;
`
const Price = styled.div`

`
Price.small = styled.small`
  font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 20px;
text-decoration-line: line-through;
color: #696969;

`
Price.text = styled.span`
  font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 32px;
letter-spacing: -0.02em;
color: #0D263B;
`
const Descrpition = styled.div`
  width: 100%;
  position: relative;
  `
Descrpition.text = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%);
  position: absolute;
  z-index: -4;
color: #696969;
`
Descrpition.Link = styled.div`
 font-weight: 400;
font-size: 14px;
line-height: 20px;
text-decoration-line: underline;
color: #0061DF;
`

const Form = styled.div`
  border: 1px solid #E6E9EC;
  border-radius: 3px;
  width: 500px;
  padding: 20px;

`
const ImgWrap = styled.div`  
  display: flex;
`
ImgWrap.Img = styled.img`
  width: 52px;
height: 52px;
border-radius: 50%;
`
ImgWrap.Text = styled.div`
  text-align: center;
  small {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
  }
  p {
    font-weight: 600;
font-size: 16px;
line-height: 24px;
color: #0D263B;
margin:0;
  }
`
const Input =styled.input`
  border: none;
  padding: 5px 0;
  margin: 10px 0;
  border-bottom: 1px solid #E6E9EC;
  outline: none;
  width: 100%;
`
const Label=styled.div`
  font-weight: 600;
font-size: 14px;
line-height: 20px;
color: #0D263B;
`
const TextArea=styled.textarea`
  border: none;
  clip-path: none;
  width: 100%;
`
const Button=styled.button`
  background: #0061DF;
border-radius: 2px;
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #FFFFFF;
width: 100%;
height: 44px;
border: none;
`
const Document =styled.div` 
  border-bottom: 2px solid #E6E9EC;
`
const Location =styled.div`
margin: 40px 0;
`

Location.Title=styled.div`
font-weight: 600;
font-size: 18px;
line-height: 28px;
color: #0D263B;
margin-bottom: 24px;
`

Location.grid=styled.div`
font-family: 'Montserrat';
font-style: normal;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 24px 180px;
  justify-content: space-between;
`
Location.name=styled.div`
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  color: #0D263B;
  span {
    font-weight: 400;
    color: #696969;
  }
`

Location.value=styled.div`
  font-size: 14px;
  line-height: 20px;
`
const Property=styled(Location)``
const Grid=styled.div`
  grid-template-columns: repeat(4,1fr);
  display:grid;
`

export { Container,Property,Grid,TextArea,Location,Button,Document, ImgWrap,Label, Title,Input, Img, Icons, Info, PriceWrap, Price, Descrpition, Form, WrapDes };
