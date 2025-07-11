import { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import CaseIndexClient from "./CaseIndexClient"

export const metadata: Metadata = {
    title: "ブログ一覧",
    description: "ブログ記事の一覧ページです",
};

export default async function BlogIndexPage() {
  const posts = await getAllPosts();
  
  return <CaseIndexClient posts={posts} />;
}