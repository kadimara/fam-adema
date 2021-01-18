import Head from "next/head";
import styled, { createGlobalStyle } from "styled-components";
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
    return (
        <>
            <Head>
                <title>SSR styled-components with Next.js Starter</title>
            </Head>
            <Container varient='center'>
                <GlobalStyle />
                <h1>Hello, world!</h1>
            </Container>
        </>
    );
}
