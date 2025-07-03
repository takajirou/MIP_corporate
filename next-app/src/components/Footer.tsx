"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

const Footer = () => {
    const pathname = usePathname();

    return (
        <footer className="text-white">
            {pathname !== "/contact" ? (
                <section className="bg-gradient-to-b from-[#f28900] to-[#ffcf4a] h-[434px] relative px-[7.5%] py-[84px] flex justify-between">
                    {/* <Image
                    src="/curve_line.svg"
                    alt="装飾"
                    width={0}
                    height={0}
                    className="absolute left-0 bottom-25"
                /> */}

                    <div>
                        <h2 className="text-[2rem]">お問い合わせ</h2>
                        <p className="text-[6.4rem]/30 font-bold">Contact</p>
                        <p className="text-[2.4rem]/20 font-[600]">
                            ご質問・ご相談などはお気軽にお問い合わせください
                        </p>
                    </div>
                    <div className="w-[160px] h-[160px] bg-white rounded-full flex justify-center items-center mt-[85px] mb-[21px]">
                        <Image src="/contact.svg" alt="お問い合わせ" width={50} height={40} />
                    </div>
                </section>
            ) : (
                ""
            )}

            <section className="text-[#0354A5] text-[16px] pt-[55px] pb-[47px] bg-white">
                <nav>
                    <table className="w-[100%] px-[7.5%] text-center border-separate border-spacing-y-[24px] table-fixed">
                        <thead>
                            <tr>
                                <th className="border-b">
                                    <a href="#">トップページ</a>
                                </th>
                                <th className="border-b">
                                    <a href="#">MIPについて</a>
                                </th>
                                <th className="border-b">
                                    <a href="#">事業内容</a>
                                </th>
                                <th className="border-b">
                                    <a href="#">事例紹介</a>
                                </th>
                                <th className="border-b">
                                    <a href="#">採用情報</a>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="hoverLine">
                            <tr>
                                <td>
                                    <a href="#">MIPの強み</a>
                                </td>
                                <td>
                                    <a href="#">MIPの強み</a>
                                </td>
                                <td>
                                    <a href="#">基盤構造</a>
                                </td>
                                <td>
                                    <a href="#">リクルートサイト改修</a>
                                </td>
                                <td>
                                    <a href="#">採用情報</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="#">事業内容</a>
                                </td>
                                <td>
                                    <a href="#">会社概要</a>
                                </td>
                                <td>
                                    <a href="#">システム開発</a>
                                </td>
                                <td>
                                    <a href="#">疾患啓発サイト構築</a>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="#">事例紹介</a>
                                </td>
                                <td>
                                    <a href="#">主な取引先</a>
                                </td>
                                <td>
                                    <a href="#">運用支援</a>
                                </td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="#">お知らせ</a>
                                </td>
                                <td>
                                    <a href="#">会社沿革</a>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <a href="#">アクセス</a>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                    <ul className="hoverLine mt-[70px] mx-auto px-[20%] flex justify-center gap-[35px]">
                        <li>
                            <a href="#">サイトマップ</a>
                        </li>
                        <li>
                            <a href="#">サイトポリシー</a>
                        </li>
                        <li>
                            <a href="#">個人情報の保護に関して</a>
                        </li>
                        <li>
                            <a href="#">情報セキュリティ方針</a>
                        </li>
                    </ul>
                    <Image
                        className="mt-[50px] m-auto"
                        src="/logo.svg"
                        alt="ロゴ"
                        width={175}
                        height={66}
                    />
                    <p className="flex justify-center mt-[25px]">
                        <small className="mt-[25px]">Copyright 2001-2025 MIP Co.Ltd.</small>
                    </p>
                </nav>
            </section>
        </footer>
    );
};

export default Footer;
