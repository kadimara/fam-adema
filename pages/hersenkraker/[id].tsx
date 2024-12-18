import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Burger } from '../../components/burger/burger';
import { Menu } from '../../components/menu/menu';
import { GlobalStyles } from '../../styles/global';
import {
    getAllChapterIds,
    getAllChaptersData,
    getChapterData,
} from '../../lib/comic/chapters';
import Link from 'next/link';
import { ComicTheme } from '../../styles/comic-theme';
import { MenuItemStyled } from '../../components/menu/menuitem.styled';
import { FaArrowRight, FaPlay } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ChapterContainer = styled(motion.div)`
    opacity: 0;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    margin: auto;
    position: relative;
    padding-top: 48px !important;

    @media (max-width: 575.98px) {
        padding: 0;
    }

    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) and (max-width: 767.98px) {
        padding: 0px 64px;
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) and (max-width: 991.98px) {
        padding: 0 15%;
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
        padding: 0 27%;
    }

    /* // Extra large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {
        width: 60%;
    } */
`;

const ChapterImageStyled = styled.img`
    width: 100%;
`;

const ChapterImage = ({ setLoading, ...props }) => {
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (imgRef.current?.complete) {
            setLoading(false);
        }
    }, []);

    return (
        <ChapterImageStyled
            ref={imgRef}
            onLoad={() => setLoading(false)}
            {...props}
        />
    );
};

const ChapterVideoStyled = styled.div`
    position: relative;
    width: 100%;

    & > video {
        width: 100%;
    }
`;

const ChapterVideo = ({ url }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    return (
        <ChapterVideoStyled
            style={isPlaying ? { cursor: 'none' } : { cursor: 'pointer' }}
        >
            <video
                onClick={(event) => {
                    event.currentTarget.play();
                    setIsPlaying(true);
                }}
                onPause={() => setIsPlaying(false)}
                src={url}
            />
            {!isPlaying && (
                <PlayIcon>
                    <FaPlay />
                </PlayIcon>
            )}
        </ChapterVideoStyled>
    );
};

const PlayIcon = styled.div`
    color: ${(props) => props.theme.colors.white};
    font-size: 32px;
    line-height: 24px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    display: flex;
    font-weight: bold;
`;

const NextIcon = styled.div`
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
    const [loading, setLoading] = useState(true);
    const currentIndex = allChaptersData.findIndex(
        (data) => data.id == chapterData.id
    );
    const hasNext = currentIndex < allChaptersData.length - 1;
    const nextIndex = currentIndex + 1;

    const hasUrlVideo = chapterData.url.includes('.mp4');
    const hasUrl2 = chapterData.url2;
    const hasUrl2Video = hasUrl2 && chapterData.url2.includes('.mp4');

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
                                href={'/hersenkraker/' + chapter.id}
                            >
                                <MenuItemStyled
                                    active={chapter.id == chapterData.id}
                                    onClick={() => {
                                        setOpen(false);
                                    }}
                                >
                                    {chapter.id.replace('-', ' ')}
                                </MenuItemStyled>
                            </Link>
                        );
                    })}
                </Menu>
            </div>
            <ChapterContainer
                animate={loading == false && { opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {hasUrlVideo ? (
                    <ChapterVideo url={chapterData.url} />
                ) : (
                    <ChapterImage
                        src={chapterData.url}
                        setLoading={setLoading}
                    />
                )}
                {hasUrl2 && hasUrl2Video ? (
                    <ChapterVideo url={chapterData.url2} />
                ) : (
                    <ChapterImage
                        src={chapterData.url2}
                        setLoading={setLoading}
                    />
                )}
                {hasNext && (
                    <Link
                        href={'/hersenkraker/' + allChaptersData[nextIndex].id}
                        replace={true}
                    >
                        <NextIcon>
                            <FaArrowRight />
                        </NextIcon>
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
            key: params.id,
        },
    };
}
