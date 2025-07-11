import Link from "next/link";
import { IoArrowBackSharp } from "react-icons/io5";
import { IoArrowForwardSharp } from "react-icons/io5";

interface ArrowProps{
    link?:string,
    direction: string
}

const ArrowBtn = ({ link, direction }: ArrowProps) => {
    const content = (
        <div className="border-2 border-[#0354A5] rounded-full w-[55px] h-[55px] flex justify-center items-center transition duration-200 ease-in hover:bg-[#0354A5] hover:text-white">
            {direction === "front" ? (
                <IoArrowForwardSharp className="w-[30px] h-[30px]" />
            ) : (
                <IoArrowBackSharp className="w-[30px] h-[30px]" />
            )}
        </div>
    );

    return link ? <Link href={`/${link}`}>{content}</Link> : content;
};

export default ArrowBtn;