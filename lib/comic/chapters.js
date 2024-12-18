import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const chaptersDirectory = path.join(process.cwd(), 'data/comic');

export function getAllChaptersData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(chaptersDirectory);
    const allChaptersData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(chaptersDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
            id,
            ...matterResult.data,
        };
    });
    // Sort posts by date
    return allChaptersData.sort(function (a, b) {
        // hoofdstuk- er af halen zodat we een nummer overhouden
        if (a.id == 'begin') {
            return -1;
        }

        if (b.id == 'eind') {
            return -1;
        }

        const aId = parseInt(a.id.replace('hoofdstuk-', ''));
        const bId = parseInt(b.id.replace('hoofdstuk-', ''));
        return aId - bId;
    });
}

export function getAllChapterIds() {
    const fileNames = fs.readdirSync(chaptersDirectory);

    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ''),
            },
        };
    });
}

export function getChapterData(id) {
    const fullPath = path.join(chaptersDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
        id,
        ...matterResult.data,
    };
}
