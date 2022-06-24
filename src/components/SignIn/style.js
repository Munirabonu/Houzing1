import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: calc(100vh - 64px);
`;
const Wrapper =styled.div`
  background: #FFFFFF;
  border: 1px solid #E6E9EC;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  width: 580px;
  height: 376px;
  padding:50px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Title =styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #0D263B;
`

const Label =styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #0D263B;
`
const Input =styled.input`
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 2px solid #E6E9EC;
  font-size: 14px;
  margin-top: 10px;
`
const Link =styled.a`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-decoration-line: underline;
  color: #0061DF;
  margin-left: auto;
`
const  Remember=styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Error=styled.p`
  color: red;
  font-size: 14px;
`




export { Container,Wrapper,Input,Remember,Link,Label,Title,Error };
