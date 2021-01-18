import React from 'react';
import { StyledMenu } from './menu.styled';

interface MenuProps {
    open: boolean;
}

export const Menu: React.FC<MenuProps> = ({ open, ...props }) => {
    return <StyledMenu open={open}>{props.children}</StyledMenu>;
};
