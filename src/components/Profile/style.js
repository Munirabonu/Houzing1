import styled from "styled-components";
const Container = styled.div`
  width: 80vw;
  margin: 50px auto;
`;
const WrapTitle = styled.div`
  display: flex;
justify-content: space-between;
`
const Table = styled.div`
  padding: 30px;
  border: 1px solid #E6E9EC;
box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
border-radius: 3px;
  `
Table.List = styled.div`
  display: grid;
  grid-template-columns: 35% 15% 10% 10% 10%;
  align-items: center;
  align-self: center;
  align-content: center;
  gap: 50px; 
  margin-bottom: 16px;
  /* height: fit-content; */
  height:${({ title }) => title ? 'fit-content' : "113px"};
`
const Title = styled.div`
font-weight: 600;
font-size: 18px;
line-height: 28px;
color: #0D263B;
`
const TableData = styled.div`
  font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #696969;
`
const Icons = styled.div`
  display: flex;
  justify-content: space-evenly;
`
Icons.edit = styled.img`
  width: 15px;
  margin-right: 20px;
`
Icons.delete = styled.img`
  width: 15px;
`
export { Container, Table, Title, TableData, WrapTitle, Icons };
