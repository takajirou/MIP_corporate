import { notFound } from "next/navigation";
import Image from "next/image";
import { getPostBySlug, getPostSlugs } from "@/lib/posts";
import ArrowBtn from "@/components/ArrowBtn";

interface BlogPostPageProps {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    const slugs = getPostSlugs();

    return slugs.map((slug) => ({
        slug,
    }));
}

// export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
//     const post = await getPostBySlug(params.slug);

//     if (!post) {
//         return {
//             title: "ページが見つかりません",
//         };
//     }

//     return {
//         title: post.title,
//         description: post.description,
//     };
// }

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const post = await getPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    return (
        <>
            <section className="py-[70px] text-[24px] max-w-[1000px] mx-auto text-[#0354A5]">
                <p>{post.company}様</p>
                <h1 className="text-[48px] font-bold mb-4 mt-[15px]">{post.title}</h1>
                <p className="font-semibold mt-[15px]">{post.description}</p>
                <section className="mt-[45px]">
                    <h2 className="font-bold mt-[15px]">{post.work}</h2>
                    <p className="text-[32px] font-bold">{post.goal}</p>
                    <section className="min-w-[750px] text-[20px] font-normal mt-[20px] py-[20px] px-[13px] bg-[#FFE394]">
                        <h3>{post.company}</h3>
                        <p>{post.info}</p>
                    </section>

                    <section className="mt-[53px]">
                        <h3 className="font-semibold text-[32px]">依頼内容</h3>
                        {post.requests.map((request, index) => {
                            return (
                                <div key={index} className="font-normal text-[20px]/10">
                                    <p>
                                        <span className="text-[#DF7F03]">⚫︎</span>
                                        {request}
                                    </p>
                                </div>
                            );
                        })}
                    </section>
                    <section className="mt-[58px]">
                        <h3 className="font-semibold text-[32px]">課題</h3>
                        {post.issues.map((issue, index) => {
                            return (
                                <div key={index} className="font-normal text-[20px]/10">
                                    <p>
                                        <span className="text-[#DF7F03]">⚫︎</span>
                                        {issue}
                                    </p>
                                </div>
                            );
                        })}
                    </section>
                    <section className="mt-[85px]">
                        <h3 className="font-semibold text-[32px]">私達の解決</h3>
                        <div className="flex gap-[16px]">
                            <Image
                                src={`/${post.img}`}
                                alt=""
                                width={0}
                                height={0}
                                className="w-[388px] h-auto object-contain"
                            />
                            <section className="text-[20px] flex flex-col gap-[30px]">
                                {post.resolutions.map((resolution, index) => (
                                    <div key={index}>
                                        <h4 className="text-[#DF7F03] font-bold">
                                            {resolution.title}
                                        </h4>
                                        <ul>
                                            {resolution.points.map((point, i) => (
                                                <li key={i}>{point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </section>
                        </div>
                    </section>
                    <div className="mt-[64px] flex items-center gap-[26px]">
                        <ArrowBtn link="case" direction="back"/>
                        <p>事例一覧へもどる</p>
                    </div>
                </section>
            </section>
        </>
    );
}
