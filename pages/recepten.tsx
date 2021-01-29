import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Burger } from '../components/burger/burger';
import { Menu } from '../components/menu/menu';
import { GlobalStyles } from '../styles/global';
import { FaHome, FaList, FaUtensils } from 'react-icons/fa';
import { ComicTheme } from '../styles/comic-theme';
import { MenuItemStyled } from '../components/menu/menuitem.styled';
import { redirectToLogin } from '../lib/serversideprops';
import { Recipe } from '../components/recipe/recipe';

interface ContainerProps {}

const Container = styled.div<ContainerProps>`
    flex-direction: row;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    margin: 64px;
`;

export default function Home() {
    const [open, setOpen] = useState(false);
    return (
        <ThemeProvider theme={ComicTheme}>
            <GlobalStyles />
            <Head>
                <title>Family Adema</title>
            </Head>
            <Container>
                <GlobalStyles />
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
            </Container>
            <div>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open}>
                    <Link href="/">
                        <MenuItemStyled>
                            <FaHome />
                            &nbsp;Home
                        </MenuItemStyled>
                    </Link>
                    <Link href="/">
                        <MenuItemStyled>
                            <FaList />
                            &nbsp;boodschappen
                        </MenuItemStyled>
                    </Link>
                    <Link href="/recepten">
                        <MenuItemStyled active={true}>
                            <FaUtensils />
                            &nbsp;Recepten
                        </MenuItemStyled>
                    </Link>
                </Menu>
            </div>
        </ThemeProvider>
    );
}

export const getServerSideProps = redirectToLogin;
