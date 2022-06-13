import styled from "styled-components";

const Container = styled.div`
  
`;

const Title=styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #0D263B;
  margin: 20px 0;
`
const Grid =styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  row-gap: 20px;
`
const Flex=styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;

`
const Text=styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
`

const Input =styled.input`
  border: none;
  border-bottom: 2px solid #E6E9EC;
  outline: none;
  padding: 10px 20px;
  width: 430px;
  margin-right: 20px;
`



export { Container,Title,Grid,Text,Flex,Input };
