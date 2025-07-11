"use client"

import Link from "next/link";
import MainVisual from "@/components/MainVisual";
import ArrowBtn from "@/components/ArrowBtn";
import Image from "next/image";
import { useState } from "react";

interface Post {
    slug: string;
    category: string;
    company: string;
    title: string;
    list_request: string;
    tags: string[];
    previewImg: string;
}

interface BlogIndexClientProps {
    posts: Post[];
}

export default function CaseIndexClient({ posts }: BlogIndexClientProps) {
    const genres = ["ALL", "WEB", "システム"];
    const [filter, setFilter] = useState<string>("ALL");
    const [hoveredGenre, setHoveredGenre] = useState<string | null>(null);

    const filteredPosts = filter === "ALL"
    ? posts
    : posts.filter((post) => post.category === filter);

    return (
    <section className="text-[#0354A5]">
        <MainVisual title="Case Study" text="事例紹介" src="/aboutMainImg.svg" />

        <div className="mt-[65px] mb-[290px] mx-auto w-[1000px]">
        {/* ジャンルフィルター */}
            <div className="flex gap-[20px]">
            {genres.map((genre) => (
                <button
                    key={genre}
                    onClick={() => setFilter(genre)}
                    onMouseEnter={() => setHoveredGenre(genre)}
                    onMouseLeave={() => setHoveredGenre(null)}
                    className={`min-w-[140px] pl-[12px] pr-[20px] py-[10px] flex gap-[10px] text-[2rem] items-center shadow-[0_0_10px_0_rgba(0,0,0,0.25)] cursor-pointer transition-all duration-300 hover:bg-[#0354A5] hover:text-white
                    ${filter === genre ? "bg-[#0354A5] text-white" : "bg-white text-[#0354A5]"}
                    `}
                >
                    <Image
                        src={`/${filter === genre || hoveredGenre === genre ? "white" : "purple"}_rectangle.svg`}
                        alt=""
                        width={30}
                        height={20}
                    />
                    <p>{genre}{genre !== "ALL" && "開発"}</p>
                </button>
            ))}
        </div>

        {/* 記事リスト */}
        <div className="flex flex-col gap-[42px] mt-[40px]">
            {filteredPosts.map((post) => (
                <section
                key={post.slug}
                className="bg-white shadow-[0_0_10px_0_rgba(0,0,0,0.25)] w-[1000px] m-auto h-[350px]"
                >
                <Link href={`/case/${post.slug}`} className="flex h-full">
                    <section className="h-full flex-1 flex flex-col">
                    <div className="flex items-center justify-between pr-[30px]">
                        <div className="text-white text-[18px] bg-[#0354A5] py-[15px] flex flex-col items-center gap-[5px] w-[108px]">
                        <Image
                            src="/white_rectangle.svg"
                            alt=""
                            width={0}
                            height={0}
                            className="w-auto h-auto"
                        />
                        {post.category}
                        </div>
                        <div className="ml-[20px] flex flex-col justify-center items-start">
                        <p className="text-[2rem]">{post.company}</p>
                        <h2 className="font-bold text-[2.5rem]">{post.title}</h2>
                        </div>
                        <ArrowBtn direction="front" />
                    </div>
                    <div className="px-[25px] flex flex-col justify-between flex-1 mt-[30px] pb-[25px]">
                        <p className="text-[2rem]/10">{post.list_request}</p>
                        <div className="flex gap-[15px] flex-wrap">
                        {post.tags.map((tag) => (
                            <div
                            key={tag}
                            className="bg-[#0354A5] text-white text-[12px] w-[100px] h-[30px] rounded-[10px] flex items-center justify-center"
                            >
                            <p>{tag}</p>
                            </div>
                        ))}
                        </div>
                    </div>
                    </section>
                    <Image
                    src={`/${post.previewImg}`}
                    alt=""
                    width={0}
                    height={0}
                    className="w-[488px] h-auto"
                    />
                </Link>
                </section>
            ))}
            </div>
        </div>
        </section>
    );
}