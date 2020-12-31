import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    z-index: 99;
    cursor: pointer;
`;

const Path = (props) => (
    <motion.path fill="transparent" strokeLinecap="round" strokeWidth="3" {...props} />
)
const transition = { duration: 0.3 };
const MenuToggle = ({ toogle, isOpen }) => {
    return (
        <Button onClick={toogle}>
            <svg width="23" height="23" viewBox="0 0 23 23">
                <Path animate={isOpen ? "open" : "closed"} initial={false} variants={{
                    closed: {d: "H 2 2.5 L 20 2.5", stroke "hsl(0, 0%, 100%)"},
                    open: {d: "H 3 16.5 L 17 2.5", stroke "hsl(0, 0%, 18%)"},
                }} transition={transition} />
            </svg>

        </Button>
    )
}

export default MenuToggle;
