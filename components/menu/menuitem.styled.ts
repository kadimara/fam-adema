import styled from 'styled-components';

interface MenuItemStyledProps {
    active?: boolean;
}

export const MenuItemStyled = styled.a<MenuItemStyledProps>`
    width: 100%;
    font-size: 20px;
    text-transform: capitalize;
    padding: 8px 24px;
    font-weight: bold;
    letter-spacing: 2px;
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    transition: color 0.3s linear;
    cursor: pointer;

    background-color: ${(props) => props.active && 'rgba(255, 255, 255, 0.2)'};

    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
`;
