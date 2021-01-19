import Head from "next/head";
import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Burger } from "../../components/burger/burger";
import { Menu } from "../../components/menu/menu";
import { GlobalStyles } from "../../styles/global";
import { Theme } from "../../styles/theme";
import {
    getAllChapterIds,
    getAllChaptersData,
    getChapterData,
} from "../../lib/comic/chapters";
import Link from "next/link";
import Image from "next/image";
import { ComicTheme } from "../../styles/comic-theme";
import { LinkStyled } from "../../components/menu/link.styled";

const ChapterContainer = styled.div`
    margin: auto;
    @media (max-width: 575.98px) {
        width: 100%;
    }

    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) and (max-width: 767.98px) {
        margin: 0px 64px;
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) and (max-width: 991.98px) {
        width: 70%;
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
        width: 60%;
    }

    /* // Extra large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {
        width: 60%;
    } */
`;

const ChapterImage = styled.img`
    width: 100%;
`;

export default function chapter({ chapterData, allChaptersData }) {
    const [open, setOpen] = useState(false);
    return (
        <ThemeProvider theme={ComicTheme}>
            <GlobalStyles />
            <Head>
                <title>Family Adema</title>
            </Head>
            <div>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open}>
                    {allChaptersData.map((chapter) => {
                        return (
                            <Link
                                key={chapter.id}
                                href={"/stripverhaal/" + chapter.id}
                            >
                                <LinkStyled
                                    active={chapter.id == chapterData.id}
                                    onClick={() => setOpen(false)}
                                >
                                    {chapter.id}
                                </LinkStyled>
                            </Link>
                        );
                    })}
                </Menu>
                <ChapterContainer>
                    <ChapterImage src={chapterData.url} />
                </ChapterContainer>
            </div>
        </ThemeProvider>
    );
}

export async function getStaticPaths() {
    const paths = getAllChapterIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const chapterData = getChapterData(params.id);
    const allChaptersData = getAllChaptersData();
    return {
        props: {
            chapterData,
            allChaptersData,
        },
    };
}
