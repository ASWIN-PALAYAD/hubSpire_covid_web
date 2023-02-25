import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
display: flex;
justify-content: center;
    
`
const NavItem = styled.ul`
 display: flex;
 
    
`
const Item = styled.li`
list-style: none;
margin-left: 20px;
font-size: 15px;
font-weight: 400;
color: white;
margin-top: 30px;
    
`

const NavBar = () => {
  return (
    <Container>
        <NavItem>
            <Item>HOME</Item>
            <Item>VACCINE REGISTRATION</Item>
            <Item>ABOUT</Item>
            <Item>CONTACT</Item>
            <Item>SIGN UP</Item>
        </NavItem>

    </Container>
  )
}

export default NavBar