import React, { useState } from 'react';
import styled from 'styled-components';
import MenuToggle from './MenuToggle';

const HamburgerMenuContainer = styled.div`
    display: flex;
`;

const HamburgerIcon = styled.div`
    color: ${({ reverseColor }) => reverseColor ? "#000" : "#fff"};
    cursor: pointer;
    z-index: 99;
    transition: all 0.25s ease-in-out;
`;

const MenuContainer = styled.div`
    height: 100%;
    min-width: 300px;
    width: 100%;
    max-width: 44%;
    background-color: #fff;
    box-shadow: -2px 0 2px rgba(15, 15, 15, 0.3);
    z-index: 90;
    position: fixed;
    top: 0;
    right: 0;
    user-select: none;
    padding: 1rem 2.5rem;

`;

const HanburgerMenu = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <HamburgerMenuContainer>
            <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
            <MenuContainer />

        </HamburgerMenuContainer>
    )
}

export default HanburgerMenu;
