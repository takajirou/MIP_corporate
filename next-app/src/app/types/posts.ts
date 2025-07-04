export interface PostMatter {
    company: string;
    title: string;
    description: string;
    work: string;
    goal: string;
    info: string;
    requests: string[];
    issues: string[];
    resolutions: [];
}

export interface Post extends PostMatter {
    slug: string;
    contentHtml: string;
}
