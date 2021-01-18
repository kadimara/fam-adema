import React from "react";
import { bool, func } from "prop-types";
import { StyledBurger } from "./burger.styled";

interface BurgerProps {
    open: boolean;
    setOpen: Function;
}

export const Burger: React.FC<BurgerProps> = ({ open, setOpen }) => {
    return (
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </StyledBurger>
    );
};
