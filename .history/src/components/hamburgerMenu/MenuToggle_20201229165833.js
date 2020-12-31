import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    z-index: 99;
    cursor: pointer;
`;

const MenuToggle = ({ toogle, isOpen }) => {
    return (
        <Button onClick={toogle}>

        </Button>
    )
}

export default MenuToggle;
