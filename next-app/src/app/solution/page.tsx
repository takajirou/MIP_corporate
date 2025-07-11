import Footer from "@/components/Footer";
import MainVisual from "@/components/MainVisual";
import SolutionCaption from "@/components/SolutionCaption";
import Image from "next/image";

const Solution = () => {
    return (
        <section className="text-[#0354A5]">
            <MainVisual title={"solution"} text={"事業内容"} src={"aboutMainImg.svg"}/>
            <div className="mx-auto w-[1000px]">
                <section className="relative min-h-[500px]">
                    <Image src="/backShining.svg" alt="差し込む光" fill className="object-cover z-[-1]" />
                    <div className="pt-[65px]">
                        <h2 className="text-5xl font-black">IT戦略のパートナーとして、<br />
                        課題解決をトータルサポート</h2>
                        <Image src="/solutionRoadmap.svg" alt="事業内容のロードマップ" width={0} height={0} className="w-auto h-auto mb-10"/>
                        <p className="text-3xl pt-5">私たちは、デジタルマーケティング（Webソリューション）を通じて、<br />
                            お客様のビジネス課題を解決することを目指しています。<br />
                            主要な開発業務は社内で完結しており、質の高い一貫対応を可能にしています。
                        </p>
                    </div>
                </section>
            </div>
            <div className="mt-[85px] mb-[85px] bg-gradient-to-b from-[#E2EA57] ">
                <section className="mx-auto w-[1000px] pt-[85px]">
                    <h2 className="text-5xl font-black">MIPの活動を構成する<br />
                        キーワード</h2>
                    <div className="flex">
                        <Image src="/solutionBirds1.svg" alt="羽ばたく鳥２匹" width={0} height={0} className="w-auto h-auto " />
                        <Image src="/solutionVenn.svg" alt="キーワードのベン図" width={0} height={0} className="w-auto h-auto " />
                    </div>
                </section>
            </div>
            <section className="mt-[200px] mb-[250px]">
                <SolutionCaption />
                <SolutionCaption />
                <SolutionCaption />
            </section>
            <Footer />
        </section>
    );
};

export default Solution;
