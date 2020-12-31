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
    transition: all 0.2s ease-in-out;
    a {
        font-size: 18px;
        color: #444;
        text-decoration: none;
    }
    &:hover {
        a {
            color: #555;
        }
    }
`;
const NavMenu = (props) => {
    return (
        <div>

        </div>
    )
}

export default NavMenu;
