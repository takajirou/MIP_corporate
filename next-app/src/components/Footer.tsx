import Image from "next/image";

const Footer = () => {
    return (
        <div>
            <section className="bg-gradient-to-b from-[#f28900] to-[#ffcf4a] h-[434px] relative">
                <Image
                    src="/curve_line.svg"
                    alt="装飾"
                    width={0}
                    height={0}
                    className="absolute left-0 bottom-25"
                />
                <h2 className="text-main">お問い合わせ</h2>
                <p className="text-main">Contact</p>
                <p className="text-main">ご質問・ご相談などはお気軽にお問い合わせください</p>
            </section>
        </div>
    );
};

export default Footer;
