import Link from 'next/link';
import React from 'react';
import { FaHome } from 'react-icons/fa';
import styled from 'styled-components';
import { StyledMenu } from './menu.styled';

interface MenuProps {
    open: boolean;
}

export const Menu: React.FC<MenuProps> = ({ open, ...props }) => {
    return <StyledMenu open={open}>{props.children}</StyledMenu>;
};
