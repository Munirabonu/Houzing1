import styled from "styled-components";

const Container = styled.div`
  display: flex;
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
export { Container,Property,Grid,TextArea,Location,Button,Document, ImgWrap,Label, Title,Input, Img, Icons, Info, PriceWrap, Price, Descrpition, Form, WrapDes };

