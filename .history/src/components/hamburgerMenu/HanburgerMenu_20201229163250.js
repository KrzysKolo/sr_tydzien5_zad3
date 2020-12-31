import React from 'react';
import styled from 'styled-components';

const HamburgermenuContainer = styled.div`
    display: flex;
`;

const HamburgerIcon = styled.div`
    color: ${({ reverseColor }) => reverseColor ? "#000" : "#fff"};
    cursor: pointer;
    z-index: 99;
    transition: all 0.25s ease-in-out;
`;

const HanburgerMenu = (props) => {
    return (
        <div>

        </div>
    )
}

export default HanburgerMenu;
