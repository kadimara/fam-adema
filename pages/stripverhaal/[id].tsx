import Head from 'next/head';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Burger } from '../../components/burger/burger';
import { Menu } from '../../components/menu/menu';
import { GlobalStyles } from '../../styles/global';
import { Theme } from '../../styles/theme';
import {
    getAllChapterIds,
    getAllChaptersData,
    getChapterData,
} from '../../lib/comic/chapters';
import Link from 'next/link';
import Image from 'next/image';

export default function chapter({ chapterData, allChaptersData }) {
    const [open, setOpen] = useState(false);
    return (
        <ThemeProvider theme={Theme}>
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
                                href={'/stripverhaal/' + chapter.id}
                            >
                                <a onClick={() => setOpen(false)}>
                                    {chapter.id}
                                </a>
                            </Link>
                        );
                    })}
                </Menu>
                <img src="" />
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
