import Head from 'next/head';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { redirectToLogin } from '../lib/serversideprops';
import { GlobalStyles } from '../styles/global';
import { Theme } from '../styles/theme';
const GlobalStyle = createGlobalStyle`
 h1 {
   font-size: 4rem;
 }
`;

interface ContainerProps {
    varient: 'begin' | 'center' | 'end';
}

const Container = styled.div<ContainerProps>`
    text-align: ${(props) => props.varient};
`;

export default function Private() {
    return (
        <ThemeProvider theme={Theme}>
            <GlobalStyles />
            <Head>
                <title>Private page</title>
            </Head>
            <Container varient="center">
                <GlobalStyle />
                <h1>Hier kan je alleen bij als je inlogt</h1>
            </Container>
        </ThemeProvider>
    );
}

export const getServerSideProps = redirectToLogin;
