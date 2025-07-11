import Image from "next/image";

interface MainVisualProps{
    title: string,
    text: string,
    src: string
}

const MainVisual = ({ title, text, src }:MainVisualProps) => {
    return(
        <div className="titleWrap h-[450px] bg-gradient-to-r from-[#6DC7F9] to-[#0354A5] flex items-center justify-around relative overflow-hidden">
            <section className="title text-white translate-y-10 translate-x-20">
                <p className="text-[25px] translate-y-3">{text}</p>
                <h2 className="text-[70px] font-bold">{title}</h2>
            </section>
            <Image className="absolute top-0"
                src="straight_line1.svg"
                alt="グラデーションライン"
                width={738.57}
                height={93.15}
            />
            <Image className="-translate-x-5"
                src={src}
                alt="メインビジュアル写真"
                width={820.87}
                height={820.17}
            />
            <Image className="absolute bottom-0 right-0"
                src="straight_line2.svg"
                alt="グラデーションライン"
                width={738.57}
                height={93.15}
            />
        </div>
    )
}
export default MainVisual;