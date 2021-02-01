import Head from "next/head";
import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Burger } from "../../components/burger/burger";
import { Menu } from "../../components/menu/menu";
import { GlobalStyles } from "../../styles/global";
import {
    getAllChapterIds,
    getAllChaptersData,
    getChapterData,
} from "../../lib/comic/chapters";
import Link from "next/link";
import { ComicTheme } from "../../styles/comic-theme";
import { MenuItemStyled } from "../../components/menu/menuitem.styled";
import { FaArrowRight } from "react-icons/fa";

const ChapterContainer = styled.div`
    margin: auto;
    position: relative;
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

const StyledIcon = styled.div`
    color: ${(props) => props.theme.colors.main};
    font-size: 32px;
    line-height: 30px;
    float: right;
    cursor: pointer;
    padding: 16px;
    margin-top: -16px;
`;

export default function Chapter({ chapterData, allChaptersData }) {
    const [open, setOpen] = useState(false);
    const currentIndex = allChaptersData.findIndex(
        (data) => data.id == chapterData.id
    );
    const hasNext = currentIndex < allChaptersData.length - 1;
    const nextIndex = currentIndex + 1;
    return (
        <ThemeProvider theme={ComicTheme}>
            <GlobalStyles />
            <Head>
                <title>Stripverhaal door Annabel</title>
            </Head>
            <div>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open}>
                    {allChaptersData.map((chapter) => {
                        return (
                            <Link
                                key={chapter.id}
                                href={"/hersenkraker/" + chapter.id}
                            >
                                <MenuItemStyled
                                    active={chapter.id == chapterData.id}
                                    onClick={() => setOpen(false)}
                                >
                                    {chapter.id.replace("-", " ")}
                                </MenuItemStyled>
                            </Link>
                        );
                    })}
                </Menu>
            </div>
            <ChapterContainer>
                <ChapterImage src={chapterData.url} />
                {chapterData.url2 && <ChapterImage src={chapterData.url2} />}
                {hasNext && (
                    <Link
                        href={"/hersenkraker/" + allChaptersData[nextIndex].id}
                    >
                        <StyledIcon>
                            <FaArrowRight />
                        </StyledIcon>
                    </Link>
                )}
            </ChapterContainer>
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
