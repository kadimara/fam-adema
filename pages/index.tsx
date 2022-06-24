import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { FaHome, FaList, FaUtensils } from "react-icons/fa";
import styled, { ThemeProvider } from "styled-components";
import { Burger } from "../components/burger/burger";
import { Menu } from "../components/menu/menu";
import { MenuItemStyled } from "../components/menu/menuitem.styled";
import { redirectToLogin } from "../lib/serversideprops";
import { GlobalStyles } from "../styles/global";
import { Theme } from "../styles/theme";

interface ContainerProps {
  varient: "begin" | "center" | "end";
}

const Container = styled.div<ContainerProps>`
  text-align: ${(props) => props.varient};
`;

export default function Home() {
  const [open, setOpen] = useState(true);
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Head>
        <title>Family Adema</title>
      </Head>
      <Container varient="center">
        <GlobalStyles />
        <h1>Hallo, Jasper!</h1>
      </Container>
      <div>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open}>
          <Link href="/">
            <MenuItemStyled active={true}>
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
