import React from 'react';
import styled from 'styled-components';
import HamburgerMenu from './../../components/hamburgerMenu/HamburgerMenu';

const NavbarContainer = styled.div`
    width: 100vw;
    height: 55px;
    border-bottom: 1px solid #fff;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    padding: 0 1.5rem;
`;
const Navbar = () => {
    return (
        <NavbarContainer>
            <HamburgerMenu />
        </NavbarContainer>
    )
}

export default Navbar;
