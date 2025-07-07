import MainVisual from "@/components/MainVisual";
import Footer from "@/components/Footer";
import Image from "next/image";

interface OutlineProps{
    title: string,
    description: string
}

const Outline = ({title, description}:OutlineProps) =>{
    return(
        <div className="flex text-[#0354A5] text-[20px]  border-b-[#0354A5] border-b-2 mt-[36px] ">
            <p>{title}</p>
            <p>{description}</p>
        </div>
    )
}

const About = () => {
    return (
        <>
            <div>
                <MainVisual title={"About"} text={"MIPについて"} src={"aboutMainImg.svg"}/>
            </div>
            <section className="mt-[50px] px-[140px] text-[#0354A5]">
                <p className="text-[20px] mt-3">企業理念</p>
                <h2 className="text-[64px] font-bold text-main mb-4">Philosophy</h2>
                <h3 className="text-[27px] font-bold text-main">お客様に利益をもたらす<br />
                    ソリューションサービスを提供すること</h3>
                <p className="text-[20px] text-main">私たちは、お客様に利益をもたらすソリューションサービスの提供を通じて、<br />
                    価値創造と進化を支援する企業です。技術力だけでなく、課題の本質を見抜く力や提案力、<br />
                    そしてチームで成果を生み出すコミュニケーション力を大切にしています。</p>
            </section>
            <section>
                <section className=" px-[140px] mb-4 text-[#0354A5]">
                    <p className="text-[20px] text-main mt-50">MIPの強み</p>
                    <h2 className="text-[64px] font-bold text-main">Strengths</h2>
                </section>
                <div className="text-[#fff] bg-gradient-to-tr from-[#f28900] to-[#ffcf4a] pb-[100px] pt-[100px] flex flex-col items-center">
                    <div className="flex items-center">
                        <section>
                            <p className="font-bold flex items-center gap-2">
                                <span className="border-b-3 text-[15px] ">Strengths</span>
                                <span className="text-[50px]">01</span>
                            </p>
                            <h3 className="text-[25px] font-bold leading-loose mb-[13px]">
                                課題発見から解決まで一貫支援
                            </h3>
                            <p className="text-[20px]">
                                お客様の現状や課題を丁寧にヒアリングし、本質を見極めた上で、<br/>
                                最適なソリューションを提案・実行。表面的な対応にとどまらず、<br/>
                                成果が出るまで一貫して伴走します。
                            </p>
                        </section>
                        <Image className="ml-[55px]" src="strengths_img01.svg" alt="一貫支援写真" width={270} height={324}/>
                    </div>
                    <div className="flex items-center mt-[50px] mb-[50px]">
                        <Image className="mr-[100px]" src="strengths_img02.svg" alt="マーケティング力写真" width={277} height={253} />
                        <section>
                            <p className="font-bold flex items-center gap-2">
                                <span className="border-b-3 text-[15px] ">Strengths</span>
                                <span className="text-[50px]">02</span>
                            </p>
                            <h3 className="text-[25px] font-bold leading-loose mb-[13px]">
                                ビジネスを深く理解するマーケティング力
                            </h3>
                            <p className="text-[20px]">
                                業種や事業フェーズに関わらず、お客様のビジネス構造を<br/>
                                深く理解します。戦略的な視点からWeb施策を立案し、<br/>
                                売上や成果につながるマーケティングを実現します。
                            </p>
                        </section>
                    </div>
                    <div className="flex items-center">
                        <section>
                            <p className="font-bold flex items-center gap-2">
                                <span className="border-b-3 text-[15px] ">Strengths</span>
                                <span className="text-[50px]">03</span>
                            </p>
                            <h3 className="text-[25px] font-bold leading-loose mb-[13px]">
                                チームで成果を出すコミュニケーション力
                            </h3>
                            <p className="text-[20px]">
                                社内外問わず、気さくで前向きなコミュニケーションが<br/>
                                文化として根付いています。部署の垣根を越えて協力し合い、<br/>
                                チーム全体でお客様に価値を届けていきます。
                            </p>
                        </section>
                        <Image className="ml-[55px]" src="strengths_img03.svg" alt="一貫支援写真" width={255} height={327}/>
                    </div>
                </div>
            </section>
            <section className="mb-4 text-[#0354A5]">
                <div className="px-[140px]">
                    <p className="text-[20px] text-main mt-50">会社概要</p>
                    <h2 className="text-[64px] font-bold text-main">Outline</h2>
                </div>
                <section className="py-[55px] px-[228px] bg-[#fff]">
                    <Outline title="会社商号" description="株式会社ミップ（MIP Co.,Ltd.）" />
                    <Outline title="設立年月" description="2000年12月" />
                    <Outline title="代償取締役" description="成瀬厚司" />
                    <Outline title="本社所在地" description="〒531-0072大阪市北区豊崎3丁目19番3号 ピアスタワー16F" />
                    <Outline title="資本金" description="3,500万円" />
                    <Outline title="事業内容" description="Webソリューション事業" />
                    <Outline title="取引銀行" description="三井住友銀行(神戸駅前支店)りそな銀行(天六支店)" />
                </section>
            </section>
            <section className="mb-4 text-[#0354A5]">
                <div className="px-[140px]">
                    <p className="text-[20px] text-main mt-50">主な取引先</p>
                    <h2 className="text-[64px] font-bold text-main">Customer</h2>
                </div>
                <section className="py-[60px] px-[228px] bg-[#fff]">
                    <h3 className="text-[24px] font-bold mb-[10px]">行政・医療法人・福祉法人・学校法人</h3>
                    <p className="text-[18px]">学校法人穐原学園/一般財団法人神戸在宅医療・介護推進財団/医療法人仁風会 小原病院/社会医療法人生長会 <br />
                        ベルクリニック/医療法人清風会 茨木病院/一般財団法人兵庫県雇用開発協会/公益財団法人兵庫県震災復興記念21世紀研究機構
                    </p>
                    <h3 className="text-[24px] font-bold mb-[10px] mt-[40px]">企業</h3>
                    <p className="text-[18px]">あいおい法律事務所/株式会社エヌ・ティ・ティ・データ関西/株式会社エム・シー・アイ/株式会社大森廻漕店/小野薬品工業株式会社/株式会社Qlife/グリーンコーポレーション株式会社/沢井製薬株式会社/ジェイドルフ製薬株式会社/シュプリンガー・ジャパン株式会社/ストレージサービス株式会社/高松エステート株式会社/田辺三菱製薬株式会社/東亜外業株式会社/日鉄日立システムエンジニアリング株式会社/ニプロ株式会社/日本ベクトン・ディキンソン株式会社/株式会社ファーマインターナショナル/株式会社プロカラーラボ/マルホ株式会社/株式会社メディコン/吉富薬品株式会社/株式会社ルネック/株式会社わかさ生活</p>
                </section>
            </section>
            {/* ーーーーーーー沿革ーーーーーーーーー */}
            <section className="text-[#0354A5] px-[140px] mb-[140px]">
                    <p className="text-[20px] text-main mt-50">アクセス</p>
                    <h2 className="text-[64px] font-bold text-main">Access</h2>
                <section className="flex justify-center items-center gap-[40px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3279.8190373452367!2d135.497428!3d34.709744!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e69aaffb9b79%3A0xc2c8ecebaa9aa8ef!2z44OU44Ki44K544K_44Ov44O8!5e0!3m2!1sja!2sjp!4v1751884533059!5m2!1sja!2sjp"
                        width={500}
                        height={300}
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                    <section className="flex flex-col ">
                        <address className="text-[20px]">
                            <p>〒531-0072<br/>
                                大阪市北区豊崎3丁目19番3号 ピアスタワー16F
                            </p>
                            <p className="mt-[34px] mb-[34px]">営業時間　9：00〜18：00（土日祝日を除く）</p>
                            <p>TEL　06-6486-3280</p>
                            <p>FAX　06-6486-3281</p>
                        </address>
                        <div className="flex items-center text-[20px]">
                            <p>Googleマップ</p>
                            <a href="https://www.google.com/maps/place/%E3%83%94%E3%82%A2%E3%82%B9%E3%82%BF%E3%83%AF%E3%83%BC/@34.709637,135.497374,16z/data=!4m6!3m5!1s0x6000e69aaffb9b79:0xc2c8ecebaa9aa8ef!8m2!3d34.7096366!4d135.4973739!16s%2Fg%2F11btrr1bt3?hl=ja&entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
                                className="hover:opacity-70 transition duration-300">
                                <Image src="arrowBtn.svg" alt="Googleマップに飛ぶボタン" width={55} height={55} />
                            </a>
                        </div>
                    </section>
                </section>
            </section>
        </>
    );
};

export default About;
