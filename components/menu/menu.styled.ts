import styled from "styled-components";

interface StyledMenuProps {
    open: boolean;
}

export const StyledMenu = styled.nav<StyledMenuProps>`
    overflow: auto;
    transform: ${(props) =>
        props.open ? "translateX(0)" : "translateX(-100%)"};
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.main};
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    white-space: nowrap;
    padding-top: 64px;
    min-width: 200px;
    z-index: 9;

    ${(props) => (props.open ? "box-shadow: 0px 0px 10px #3c3c3c" : "")};

    @media (max-width: 575.98px) {
        width: 100%;
        text-align: center;
    }
`;
