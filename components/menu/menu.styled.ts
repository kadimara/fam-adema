import styled from 'styled-components';

interface StyledMenuProps {
    open: boolean;
}

export const StyledMenu = styled.nav<StyledMenuProps>`
    transform: ${(props) =>
        props.open ? 'translateX(0)' : 'translateX(-100%)'};
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.white};
    height: 100vh;
    align-items: flex-start;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    padding-top: 64px;

    a {
        font-size: 24px;
        text-transform: uppercase;
        margin: 16px;
        font-weight: bold;
        letter-spacing: 2px;
        color: ${({ theme }) => theme.colors.dark};
        text-decoration: none;
        transition: color 0.3s linear;
        border-bottom: 4px solid transparent;

        &:hover {
            border-color: ${({ theme }) => theme.colors.main};
        }
    }
`;
