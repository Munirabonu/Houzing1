import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 0 130px;
`;
const Title=styled.div`
  font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 28px;
color: #0D263B;
`
const Line1=styled.div`
  grid-template-columns: repeat(2,1fr);
  gap: 20px;

`
const Line2=styled.div`
  grid-template-columns: repeat(3,1fr);
  gap: 20px;
`
const Line3=styled.div`
  grid-template-columns: repeat(1,1fr);
  gap: 20px;
`

const Input=styled.div`
  border: none;
  border-bottom: 2px solid #E6E9EC;


`
const Textarea=styled.textarea`
  border: none;
  border-bottom: 2px solid #E6E9EC;
`
export { Container,Title,Line1,Line2,Line3,Input };
