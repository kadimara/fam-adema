import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Burger } from '../components/burger/burger';
import { Menu } from '../components/menu/menu';
import { GlobalStyles } from '../styles/global';
import { Theme } from '../styles/theme';
import { FaReadme, FaUtensils } from 'react-icons/fa';

interface ContainerProps {
    varient: 'begin' | 'center' | 'end';
}

const Container = styled.div<ContainerProps>`
    text-align: ${(props) => props.varient};
`;

export default function Home() {
    const [open, setOpen] = useState(false);
    return (
        <ThemeProvider theme={Theme}>
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
                        <a>
                            <FaReadme />
                            &nbsp;Stripverhaal
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            <FaUtensils />
                            &nbsp;Recepten
                        </a>
                    </Link>
                </Menu>
            </div>
        </ThemeProvider>
    );
}
