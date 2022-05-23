import styled from "styled-components";

const Wrapper = styled.div`
    display:flex;
`
const NavbarWrapper = styled.div`
    display: flex;
    height: 64px;
    max-width: var(--width);
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    width: 100VW;
    color: #fff;
`
const Container =styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--primaryColor);
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select:none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`
const activeStyle=({isActive}) =>{
    return {
        color:isActive?"#00fff5":"white",
        TextDecoration:"none"
    }
}
const Logo =styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`
 Logo.Title =styled('div')`
    margin-left: 11px;

`
const NavbarBody =styled.div`

`




















export { Wrapper,NavbarWrapper,Container,Logo,NavbarBody,activeStyle }