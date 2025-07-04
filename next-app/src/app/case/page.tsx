import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
    title: "ブログ一覧",
    description: "ブログ記事の一覧ページです",
};

export default async function BlogIndexPage() {
    const posts = await getAllPosts();

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">ブログ記事一覧</h1>

            <div className="space-y-6">
                {posts.map((post) => (
                    <article key={post.slug} className="border-b pb-6">
                        <Link href={`/case/${post.slug}`}>
                            <h2 className="text-2xl font-semibold mb-2 hover:text-blue-600">
                                {post.title}
                            </h2>
                        </Link>

                        {post.description && (
                            <p className="mt-2 text-gray-700">{post.description}</p>
                        )}
                    </article>
                ))}
            </div>
        </div>
    );
}
