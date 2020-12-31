import React, { useState } from 'react';
import styled from 'styled-components';
import MenuToggle from './MenuToggle';
import NavMenu from './NavMenu';
import { motion } from 'framer-motion';

const HamburgerMenuContainer = styled.div`
    display: flex;
`;

const HamburgerIcon = styled.div`
    color: ${({ reverseColor }) => reverseColor ? "#000" : "#fff"};
    cursor: pointer;
    z-index: 99;
    transition: all 0.25s ease-in-out;
`;

const MenuContainer = styled(motion.div)`
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
    transform: translateX(4em);
    user-select: none;
    padding: 1rem 2.5rem;

`;

const TopContainer = styled.div`
    display: flex;
    width: 100%;
`;

const IconContainer = styled.div`
    font-size: 15px;
    color: #555;
    padding-right: 5px;
`;

const LogginButton = styled(motion.button)`
    border: 0;
    background: transparent;
    color: #555;
    font-size: 13px;
    font-weight: 700;
    transition: all .25s ease-in-out;
`;
const menuTransition = { type: "spring", duration: 1, stiffness: 33, delay: 0.1 }
const menuVariants = {
    open: {
        transform: "translateX(3%)",
    },
    closed: {
        transform: "translateX(103%)",
    },
}

const HanburgerMenu = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <HamburgerMenuContainer>
            <HamburgerIcon>
                <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
            </HamburgerIcon>

            <MenuContainer
            initial={false}
            animate={isOpen ? "open" : "closed"}
            variants={menuVariants}
            transition={menuTransition}>
                <NavMenu isOpen={isOpen} />
            </MenuContainer>

        </HamburgerMenuContainer>
    )
}

export default HanburgerMenu;
