import React from 'react';
import BottomBar from "@/components/helpers/BottomBar";
import logo from "@/public/logo.png";
import Image from "next/image";
import X from "@/public/search/x.png";
import Back from "@/public/search/back.png";

const Search = () => {
    return (
        <div style={{ backgroundColor: '#343632', position: 'absolute', height: '100vh', width: '100vw', zIndex: '10' }}>
            <Image src={logo} alt="Parki logo" className='w-[120vw] h-[8vh] object-contain mt-3 mb-4'/>

            <div className="ml-[2vw] h-[79.5vh] w-[96vw] pt-[2vh] rounded-xl bg-[#FCF9EF]">
                <div className="ml-[4vw] h-[6vh] w-[88vw] rounded-[2rem] border-black border-solid border-[1px]">
                    <Image src={Back} alt={"Go back"} className={"w-[10vw] pt-[1vh] pl-[3vh]"}/>

                    <Image src={X} alt={"Clear search query"} className={"w-[5vw] ml-[80vw] pt-[1.5vh]"}/>
                </div>
            </div>
            <BottomBar/>
        </div>
    );
}

export default Search;
