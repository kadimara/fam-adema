import Head from "next/head";
import { useState } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { Burger } from "../components/burger/burger";
import { Menu } from "../components/menu/menu";
import { GlobalStyles } from "../styles/global";
import { Theme } from "../styles/theme";
const GlobalStyle = createGlobalStyle`
 h1 {
   font-size: 4rem;
 }
`;

interface ContainerProps {
    varient: "begin" | "center" | "end";
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
                <title>SSR styled-components with Next.js Starter</title>
            </Head>
            <Container varient='center'>
                <GlobalStyle />
                <h1>Hello, world!</h1>
            </Container>
            <div>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} />
            </div>
        </ThemeProvider>
    );
}
