import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import Button from "../Generic/Button";
import {
  activeStyle,
  Container,
  Logo,
  NavbarBody,
  NavbarWrapper,
  Wrapper,
} from "./style";

export const Navbar = () => {
  const navigate = useNavigate();

  const gotoLogin = () => {
    navigate("/login");
  };
  return (
    <Wrapper className="nocopy">
      <Container>
        <NavbarWrapper>
          <Logo onClick={() => navigate("/home")}>
            <Logo.Icon />
            <Logo.Title>Houzing</Logo.Title>
          </Logo>
          <NavbarBody>
            {navbar.map((value) => {
              return (
                !value.hidden && (
                  <NavLink style={activeStyle} key={value.id} to={value.path}>
                    {value.title}
                  </NavLink>
                )
              );
            })}
          </NavbarBody>
          <Logo>
            <Button onClick={gotoLogin} width={"120px"}>
              Login
            </Button>
          </Logo>
        </NavbarWrapper>
      </Container>
      {/* Barcha ma'lumotlar navbarni tagidan joylashishi uchun Outlet shu yerda ishlatilishi kerak */}
      <Outlet />
    </Wrapper>
  );
};

export default Navbar;
