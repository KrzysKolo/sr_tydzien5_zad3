import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const NavMenuContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;
const NavList = styled.ul`
    padding: 0 0.8em;
    width: 100%;
    display: flex;
    flex-direction: column;
`;
const NavLink = styled(motion.li)`
    font-weight: 600;
    height: 35px;
    display: flex;
    align-items: center;
    cursor: pointer;

    a {
        font-size: 18px;
        color: #444;
        text-decoration: none;
        transition: all 0.2s ease-in-out;
    }
    &:hover {
        a {
            color: #555;
        }
    }
`;
const NavMenu = (props) => {
    return (
        <NavList>
            <NavLink>
                <a href="#">Home</a>
            </NavLink>

        </NavList>
    )
}

export default NavMenu;
