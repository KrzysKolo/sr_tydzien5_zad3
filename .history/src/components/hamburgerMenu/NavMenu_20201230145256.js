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
const variants = {
    show: {
        transform: "translateX(0)",
        opacity: 1,
    },
    hide: {
        transform: "translateX(5em)",
        opacity: 0,
    },
}
const NavMenu = ({ isOpen }) => {
    return (
        <NavMenuContainer>
            <NavList>
                <NavLink
                initial={false}
                animate={isOpen ? "show" : "hide"}
                variants={{
                    show: {
                        ...variants.show,
                        transition: { delay: 0.3, duration: 0.2},
                        },
                    hide: {
                        ...variants.hide,
                        transition: { delay: 1, duration: 0.05 },
                        },
                    }}
                >
                    <a href="#">wdwedw</a>
                </NavLink>



            </NavList>
        </NavMenuContainer>

    )
}

export default NavMenu;
