import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import MainVisual from "@/components/MainVisual";
import Image from "next/image";

export const metadata: Metadata = {
    title: "ブログ一覧",
    description: "ブログ記事の一覧ページです",
};

export default async function BlogIndexPage() {
    const genres = ["ALL", "WEB開発", "システム開発"];

    const posts = await getAllPosts();

    return (
        <section className="text-[#0354A5]">
            <MainVisual title="Case Study" text="事例紹介" src="/aboutMainImg.svg" />

            <div className="mt-[65px] mx-auto w-[1000px]">
                <div className="flex gap-[20px]">
                    {genres.map((genre) => (
                        <button
                            key={genre}
                            className="bg-white min-w-[140px] pl-[12px] pr-[20px] py-[10px] flex gap-[10px] text-[2rem] items-center shadow-[0_0_10px_0_rgba(0,0,0,0.25)]"
                        >
                            <Image
                                src="/purple_rectangle.svg"
                                alt=""
                                width={0}
                                height={0}
                                className="w-auto h-auto"
                            />
                            <p>{genre}</p>
                        </button>
                    ))}
                </div>

                {posts.map((post) => (
                    <section
                        key={post.slug}
                        className="mt-[65px] bg-white shadow-[0_0_10px_0_rgba(0,0,0,0.25)] w-[1000px] m-auto h-[350px]"
                    >
                        <Link href={`/case/${post.slug}`} className="flex h-full">
                            <section className="h-full flex-1 flex flex-col">
                                <div className="flex items-center justify-between pr-[30px]">
                                    <div className="text-white text-[18px] bg-[#0354A5] px-[30px] py-[15px] flex flex-col items-center gap-[5px] w-fit">
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
                                    <div className="border-2 border-[#0354A5] rounded-full w-[55px] h-[55px] flex justify-center items-center ml-[52px]">
                                        <Image src="/nextArrow.svg" alt="" width={25} height={25} />
                                    </div>
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
                                src="/aboutMainImg.svg"
                                alt=""
                                width={0}
                                height={0}
                                className="w-[488px] h-auto"
                            />
                        </Link>
                    </section>
                ))}
            </div>
        </section>
    );
}
