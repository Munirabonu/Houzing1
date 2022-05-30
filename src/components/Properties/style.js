import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Wrapper =styled.div`
  margin: 60px 0;
`;
const Body =styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
  gap: 20px;
  grid-template-rows: auto;
  width: 80%;
  margin: 0 auto;
  max-width: var(--width);
  background-color: aliceblue;
`;







export { Container,Wrapper,Body };
