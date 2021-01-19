import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";
import styled from "styled-components";
import { StyledMenu } from "./menu.styled";

interface MenuProps {
    open: boolean;
}

const MenuScrollable = styled.div`
    flex-direction: column;
    display: flex;
    overflow: auto;
    padding: 16px 0px;
`;

const MenuHeader = styled.div`
    min-height: 60px;
    display: flex;
    align-items: center;
    align-self: flex-end;
    width: 100%;
    justify-content: flex-end;
    border-bottom: 4px solid ${(props) => props.theme.colors.secondary};
`;

const StyledIcon = styled.div`
    font-size: 32px;
    color: ${(props) => props.theme.colors.white};
    margin-right: 16px;
    margin-top: 8px;
    cursor: pointer;
`;

export const Menu: React.FC<MenuProps> = ({ open, ...props }) => {
    return (
        <StyledMenu open={open}>
            <MenuHeader>
                <Link href={"/"}>
                    <StyledIcon>
                        <FaHome />
                    </StyledIcon>
                </Link>
            </MenuHeader>
            <MenuScrollable>{props.children}</MenuScrollable>
        </StyledMenu>
    );
};
