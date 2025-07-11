import Image from "next/image";
import { title } from "process";

const SolutionCaption = () => {
    return(
        <article className="mx-auto w-[1000px] mb-[75px]">
            <div className="relative">
                <Image src="/captionTop1.svg"  alt="事業内容のロードマップ" width={0} height={0} className="w-auto h-auto z-[-1] " />
                <div className="absolute inset-0 bg-[#0354A5] opacity-20"></div>
                <div className="absolute bg-gradient-to-t from-[#0354A5] bottom-0 text-white w-[1000px]">
                    <div className="m-5">
                        <h2 className="text-4xl font-black">デジタルマーケティング</h2>
                        <aside>
                            <p className="text-xl">企画、リサーチ</p>
                        </aside>
                    </div>
                </div>
            </div>
            <div className="flex mt-10 justify-between">
                <p className="text-3xl max-w-[580px]">市場調査や情報収集・分析をし、皆様のビジネス上の課題に合ったWebソリューションを提案します。運用フェーズにおいても、PDCAサイクルを回し改善ご提案を行っていきます。</p>
                <Image src="/captionImg1.svg" alt="" width={0} height={0} className="w-auto h-auto " />
            </div>
        </article>
    )
}


export default SolutionCaption;
