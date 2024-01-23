import Image from "next/image";
import line from "@/public/Line.png";
import React from "react";

const Divider = () => {
    return (
        <div className='flex justify-center'>
            <Image src={line} alt={"line_divider"} className='w-[85vw]'/>
        </div>
    );
}

export default Divider;
