// app/lib/posts.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export interface PostMatter {
    company: string;
    title: string;
    description: string;
    work: string;
    goal: string;
    info: string;
    requests: string[];
    issues: string[];
    resolutions: ResolutionMatter[];
}

interface ResolutionMatter {
    title: string;
    points: string[];
}

export interface Post extends PostMatter {
    slug: string;
    contentHtml: string;
}

const postsDirectory = path.join(process.cwd(), "content");

export function getPostSlugs(): string[] {
    return fs
        .readdirSync(postsDirectory)
        .filter((filename) => filename.endsWith(".md"))
        .map((filename) => filename.replace(/\.md$/, ""));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
    try {
        const fullPath = path.join(postsDirectory, `${slug}.md`);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        const { data, content } = matter(fileContents);
        const matterData = data as PostMatter;

        const processedContent = await remark().use(html).process(content);
        const contentHtml = processedContent.toString();

        return {
            slug,
            contentHtml,
            ...matterData,
        };
    } catch (error) {
        return null;
    }
}

export async function getAllPosts(): Promise<Post[]> {
    const slugs = getPostSlugs();
    const posts = await Promise.all(slugs.map(async (slug) => await getPostBySlug(slug)));

    return posts.filter((post): post is Post => post !== null);
}
