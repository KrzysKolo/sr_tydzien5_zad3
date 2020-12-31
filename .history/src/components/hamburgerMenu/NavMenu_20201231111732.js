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
const NavButton = styled.div`
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(219,219,219,0.1) 50%, rgba(255,255,255,1) 100%);
    text-align: center;
    line-height: 55px;
    border-bottom: 2px solid rgba(219, 219, 219, .4);
    color: rgb(179, 0, 112);
    font-size: 18px;
    margin-right: 30px;
    font-weight: 600;
    height: 55px;
    transition: all 0.25s ease-in-out;
    &:hover{
        background: linear-gradient(90deg, rgba(219,219,219,0.1) 0%, rgba(255,255,255,1)  50%, rgba(219,219,219,0.1) 100%);
        color: rgb(255, 0, 0);
    }
`;
const NavLink = styled(motion.li)`
    border-bottom: 2px solid rgba(219, 219, 219, .4);
    margin-right: 30px;
    font-weight: 600;
    height: 55px;
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
        background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(219,219,219,0.1) 50%, rgba(255,255,255,1) 100%);
        border-bottom: 2px solid rgba(219, 219, 219, .2);
        a {
            color: rgba(85, 85, 85, .8);
        }
    }
`;
const variants = {
    show: {
        transform: "translateX(0em)",
        opacity: 1,
    },
    hide: {
        transform: "translateX(5em)",
        opacity: 0,
    },
}
const NavMenu = ({ isOpen, toggle }) => {
    return (
        <NavMenuContainer>
            <NavList>
                <NavLink
                initial={false}
                animate={ isOpen ? "show" : "hide"}
                variants={{
                    show: {
                         ...variants.show,
                         transition: { delay: 0.3, duration: 0.2},
                        },
                    hide: {
                        ...variants.hide,
                        transition: { delay: 0.05, duration: 0.05 },
                        },
                    }}
    >
                    <a href="#">Home</a>
                </NavLink>
                <NavLink
                initial={false}
                animate={ isOpen ? "show" : "hide"}
                variants={{
                    show: {
                         ...variants.show,
                         transition: { delay: 0.4, duration: 0.2},
                        },
                    hide: {
                        ...variants.hide,
                        transition: { delay: 0.1, duration: 0.05 },
                        },
                    }}
    >
                    <a href="#">Products</a>
                </NavLink>
                <NavLink
                initial={false}
                animate={ isOpen ? "show" : "hide"}
                variants={{
                    show: {
                         ...variants.show,
                         transition: { delay: 0.5, duration: 0.2},
                        },
                    hide: {
                        ...variants.hide,
                        transition: { delay: 0.15, duration: 0.05 },
                        },
                    }}
    >
                    <a href="#">Aboute</a>
                </NavLink>
                <NavLink
                initial={false}
                animate={ isOpen ? "show" : "hide"}
                variants={{
                    show: {
                         ...variants.show,
                         transition: { delay: 0.6, duration: 0.2},
                        },
                    hide: {
                        ...variants.hide,
                        transition: { delay: 0.2, duration: 0.05 },
                        },
                    }}
    >
                    <a href="#">Contact</a>
                </NavLink>
                <NavButton onClick={toggle}>Close</NavButton>

            </NavList>
        </NavMenuContainer>

    )
}

export default NavMenu;
