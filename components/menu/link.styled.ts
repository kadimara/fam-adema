import styled from "styled-components";

interface LinkStyledProps {
    active?: boolean;
}

export const LinkStyled = styled.a<LinkStyledProps>`
    font-size: 24px;
    text-transform: uppercase;
    margin: 16px;
    font-weight: bold;
    letter-spacing: 2px;
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    transition: color 0.3s linear;
    border-bottom: 4px solid;
    cursor: pointer;

    border-color: ${(props) =>
        props.active ? props.theme.colors.secondary : "transparent"};

    &:hover {
        border-color: ${({ theme }) => theme.colors.secondary};
    }
`;
