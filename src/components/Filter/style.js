import styled from "styled-components";
import { ReactComponent as Home } from "../../assets/icons/homes.svg";
import { ReactComponent as Setting } from "../../assets/icons/advanced.svg";
import { ReactComponent as Search } from "../../assets/icons/search.svg";

const Container = styled.div`
  display: flex;
  max-width: var(--width);
  width: 80%;
  gap: 20px;
  margin: 10px auto;
`;

const Icon = styled.div`
  margin-right: 8px;
`;

Icon.Home = styled(Home)`
  margin-right: 8px;
  margin-top: 6px;
`;

Icon.Setting = styled(Setting)`
  margin-right: 8px;
`;

Icon.Search = styled(Search)`
  margin-right: 8px;
`;

const Advanced = styled.div`
  width: fit-content;
  height: fit-content;
  background: #ffffff;
  border-radius: 5px;
  padding: 10px;
`;

Advanced.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #0d263b;
`;

const Section = styled.div`
  display: flex;
  margin-bottom: 15px;
  justify-content: flex-end;
  gap: 0 20px;
`;

export { Container, Icon, Advanced, Section };
