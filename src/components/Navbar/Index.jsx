import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { navbar } from '../../utils/navbar.js'
import { activeStyle, Container, Logo, NavbarBody, NavbarWrapper, Wrapper } from './style.js'
export default function Navbar() {
  const navigate=useNavigate();
console.log(navbar);

  return (
    <Wrapper>
      <Container>
        <NavbarWrapper>
          <Logo>
            <h1>salom</h1>
            <Logo.Title>Houzing</Logo.Title>
          </Logo>
          <NavbarBody>
            {navbar.map((value) => {
              return (
                <NavLink key={value.id}>
                {value.title}
                </NavLink>
              );
            })}
            <h1>salom</h1>
          </NavbarBody>
        </NavbarWrapper>
      </Container>
    </Wrapper>
  )
}
