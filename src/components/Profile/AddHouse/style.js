import styled from "styled-components";

const Container = styled.div`
  /* display: flex; */
  margin: 0 auto;
  width: 80vw;
`;
const Wrap = styled.div`
  border: 1px solid #E6E9EC;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  margin: 32px;
  padding: 30px;
  gap: 20px;
  display: grid;
`
const Title=styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #0D263B;
`
const Col = styled.div`
  display: grid;
  grid-template-columns:${({col2,col3,col4})=>col2?'repeat(2,1fr)':col3?"repeat(3,1fr)":col4?"repeat(4,1fr)":'repeat(1,1fr)'} ;
  gap: 30px 20px;
`
const Input=styled.input`
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  border: none;
  border-bottom: 2px solid #E6E9EC;
  outline: none;
  padding: 5px 0;
`
const TextArea=styled.textarea`
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  border: none;
  border-bottom: 2px solid #E6E9EC;
  outline: none;
  resize: none;
  height: 70px;
`

export { Container,Wrap,Col,Input,Title ,TextArea};
