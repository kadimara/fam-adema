import styled from "styled-components";

interface StyledMenuProps {
    open: boolean;
}

export const StyledMenu = styled.nav<StyledMenuProps>`
    transform: ${(props) =>
        props.open ? "translateX(0)" : "translateX(-100%)"};
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.main};
    height: 100vh;
    align-items: flex-start;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    padding-top: 64px;

    ${(props) => (props.open ? "box-shadow: 0px 0px 10px #3c3c3c" : "")};
`;
