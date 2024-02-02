import React from 'react';
import BottomBar from "@/components/helpers/BottomBar";
import logo from "@/public/logo.png";
import Image from "next/image";

import X from "@/public/search/x.png";
import Back from "@/public/search/back.png";
import Map from "@/public/search/map.png";
import Arrow from "@/public/search/arrow.png";
import Line from "@/public/line.png";

const Search = () => {

    const adresses = [
        {
            street: '1 Queen St',
            city: 'Kingston, ON',
        },
        {
            street: '1 Queen St',
            city: 'Toronto, ON',
        },
        {
            street: '3 Queen St',
            city: 'Ottawa, ON',
        }
    ];

    return (
        <div style={{ backgroundColor: '#343632', position: 'absolute', height: '100vh', width: '100vw', zIndex: '10' }}>
            <Image src={logo} alt="Parki logo" className='w-[120vw] h-[8vh] object-contain mt-3 mb-4'/>

            <div className="ml-[2vw] h-[79.5vh] w-[96vw] pt-[2vh] rounded-xl bg-[#FCF9EF] font-mono">
                <div className="ml-[4vw] h-[6vh] w-[88vw] rounded-[2rem] border-black border-solid border-[1px] inline-flex">
                    <Image src={Back} alt={"Go back"} className={"w-[3vw] h-[3vh] ml-[6vw] mt-[1.5vh]"}/>
                    <input type="text" className={"w-[55vw] ml-[8vw] mt-[1vh] mb-[1vh] bg-[#FCF9EF]"} placeholder={"Search..."}/>
                    <Image src={X} alt={"Clear search query"} className={"w-[4vw] h-[4vw] mt-[2vh] ml-[7vw]"}/>
                </div>

                {adresses.map((address, index) =>
                    <>
                        <div className={"inline-flex"}>
                            <Image
                                src={Map}
                                alt={"Clock icon"}
                                className={"w-[8vw] h-[9vw] mt-[2vh] ml-[8vw] mb-[2vh]"}
                            />
                            <div className={"w-[40vw] ml-[10vw] mt-[1vh]"}>
                                {address.street}
                                <br/>
                                {address.city}
                            </div>
                            <Image src={Arrow} alt={"Arrow icon"} className={"w-[7vw] h-[7vw] mt-[2vh] ml-[16vw]"}/>
                        </div>
                        <Image src={Line} alt={"Line icon"} className={"w-[80vw] ml-[8vw]"}/>
                    </>
                )}
            </div>
            <BottomBar/>
        </div>
    );
}

export default Search;
