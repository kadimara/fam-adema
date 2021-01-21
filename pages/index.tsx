import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Burger } from '../components/burger/burger';
import { Menu } from '../components/menu/menu';
import { GlobalStyles } from '../styles/global';
import { FaReadme, FaUtensils } from 'react-icons/fa';
import { getAllChaptersData } from '../lib/comic/chapters';
import { ComicTheme } from '../styles/comic-theme';
import { MenuItemStyled } from '../components/menu/menuitem.styled';
import { redirectToLogin } from '../lib/serversideprops';

interface ContainerProps {
    varient: 'begin' | 'center' | 'end';
}

const Container = styled.div<ContainerProps>`
    text-align: ${(props) => props.varient};
`;

export default function Home({ allChaptersData }) {
    const [open, setOpen] = useState(false);
    return (
        <ThemeProvider theme={ComicTheme}>
            <GlobalStyles />
            <Head>
                <title>Family Adema</title>
            </Head>
            <Container varient="center">
                <GlobalStyles />
                <h1>Hello, world!</h1>
            </Container>
            <div>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open}>
                    <Link href="/">
                        <MenuItemStyled>
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
