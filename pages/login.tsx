import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import { redirectToHome } from '../lib/serversideprops';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { ComicTheme } from '../styles/comic-theme';
import { GlobalStyles } from '../styles/global';
import Head from 'next/head';
import { FaReadme } from 'react-icons/fa';
import Link from 'next/link';

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
    border-radius: ${(props) => props.theme.borderRadiusSmall};
    font-size: 20px;
    padding: 4px 16px;
    width: 150px;
    border: none;
    text-align: center;

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

const LinkStyled = styled.a`
    color: ${(props) => props.theme.colors.secondary};
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        text-decoration: underline;
    }
`;

export default function SignInPage() {
    const router = useRouter();
    const passwordInput = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const password = passwordInput.current.value;

        const response = await fetch('/api/session', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password }),
        });

        if (response.ok) {
            return router.push('/');
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
                    <div>
                        <FormTitle>Welcome</FormTitle>
                    </div>
                    <div>
                        <FormInput
                            type='password'
                            ref={passwordInput}
                            placeholder='Password'
                        />
                    </div>
                    <div>
                        <SubmitButton type='submit'>Login</SubmitButton>
                    </div>
                    <div>
                        Alex weet het niet meer.
                        <br />
                        Je kunt altijd deze strip nog lezen:
                    </div>
                    <Link href='/hersenkraker'>
                        <LinkStyled>
                            <FaReadme />
                            &nbsp;Hersenkraker
                        </LinkStyled>
                    </Link>
                </FormStyled>
            </Container>
        </ThemeProvider>
    );
}

export const getServerSideProps = redirectToHome;
