import React, { useRef } from "react";
import { useRouter } from "next/router";
import { redirectToHome } from "../lib/serversideprops";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { ComicTheme } from "../styles/comic-theme";
import { GlobalStyles } from "../styles/global";
import Head from "next/head";

const LoginStyles = createGlobalStyle`
  body {
    background: ${(props) => props.theme.colors.main};
  }
  `;

const Container = styled.div`
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.main};
    margin-top: 20vh;
`;

const FormStyled = styled.form`
    flex-direction: column;
    display: flex;
    & > * {
        margin: 8px;
    }
`;

const FormTitle = styled.div`
    font-size: 32px;
    font-weight: bold;
`;

const FormInput = styled.input`
    border-radius: 3px;
    font-size: 20px;
    padding: 4px 16px;
    width: 150px;
    border: none;

    &:focus {
        outline: none;
    }
`;

const SubmitButton = styled.button`
    border-radius: ${(props) => props.theme.borderRadius};
    font-size: 20px;
    padding: 8px 24px;
    border: none;
    background: #986d46;
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;

    &:hover {
        background: #816040;
    }

    &:focus {
        outline: none;
    }
`;

export default function SignInPage() {
    const router = useRouter();
    const passwordInput = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const password = passwordInput.current.value;

        const response = await fetch("/api/session", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ password }),
        });

        if (response.ok) {
            return router.push("/");
        }
    };
    return (
        <ThemeProvider theme={ComicTheme}>
            <GlobalStyles />
            <Head>
                <title>Login</title>
            </Head>
            <Container>
                <GlobalStyles />
                <LoginStyles />
                <FormStyled onSubmit={handleSubmit}>
                    <FormTitle>Welcome</FormTitle>
                    <FormInput type='password' ref={passwordInput} />
                    <SubmitButton type='submit'>Login</SubmitButton>
                </FormStyled>
            </Container>
        </ThemeProvider>
    );
}

export const getServerSideProps = redirectToHome;
