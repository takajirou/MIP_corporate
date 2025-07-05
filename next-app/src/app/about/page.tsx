import MainVisual from "@/components/MainVisual";
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
            <section className="px-[140px] text-[#0354A5]">
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
                    <h2 className="text-[65px] font-bold text-main">Strengths</h2>
                </section>
                <div className="text-[#fff] bg-gradient-to-tr from-[#f28900] to-[#ffcf4a] pb-[100px] pt-[100px] flex flex-col items-center">
                    <div className="flex items-center">
                        <section>
                            <p className="font-bold">
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
                            <p className="font-bold">
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
                            <p className="font-bold">
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
            <section className=" px-[140px] mb-4 text-[#0354A5]">
                <p className="text-[20px] text-main mt-50">会社概要</p>
                <h2 className="text-[65px] font-bold text-main">Outline</h2>
                <div className="bg-[#fff]">
                    <section className="py-[55px] px-[228px]">
                        <Outline title="会社商号" description="株式会社ミップ（MIP Co.,Ltd.）" />
                        <Outline title="設立年月" description="2000年12月" />
                        <Outline title="代償取締役" description="成瀬厚司" />
                        <Outline title="本社所在地" description="〒531-0072大阪市北区豊崎3丁目19番3号 ピアスタワー16F" />
                        <Outline title="資本金" description="3,500万円" />
                        <Outline title="事業内容" description="Webソリューション事業" />
                        <Outline title="取引銀行" description="三井住友銀行(神戸駅前支店)りそな銀行(天六支店)" />
                    </section>
                </div>
            </section>
        </>
    );
};

export default About;
