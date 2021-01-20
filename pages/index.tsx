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

interface ContainerProps {
    varient: 'begin' | 'center' | 'end';
}

const Container = styled.div<ContainerProps>`
    text-align: ${(props) => props.varient};
`;

export async function getStaticProps() {
    const allChaptersData = getAllChaptersData();
    return {
        props: {
            allChaptersData,
        },
    };
}

function Post() {
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify({ title: 'React POST Request Example' }),
    };

    return fetch('/api/user', requestOptions).then((res) => res.json());
}

export default function Home({ allChaptersData }) {
    const [open, setOpen] = useState(false);
    Post().then((data) => console.log(data));
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
                    <Link href={'./hersenkraker/' + allChaptersData[0].id}>
                        <MenuItemStyled>
                            <FaReadme />
                            &nbsp;Hersenkraker
                        </MenuItemStyled>
                    </Link>
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
