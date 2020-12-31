import React from 'react';
import styled from 'styled-components';

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
    return (
        <HamburgerMenuContainer>
            <HamburgerIcon>
                Icon
            </HamburgerIcon>
            <MenuContainer>
                Menu
            </MenuContainer>
        </HamburgerMenuContainer>
    )
}

export default HanburgerMenu;
