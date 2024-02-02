import React from 'react';
import BottomBar from "@/components/helpers/BottomBar";
import logo from "@/public/logo.png";
import Image from "next/image";

import X from "@/public/search/x.png";
import Back from "@/public/search/back.png";
import Clock from "@/public/search/clock.png";
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

            <div className="ml-[2vw] h-[79.5vh] w-[96vw] pt-[2vh] rounded-xl bg-[#FCF9EF]">
                <div className="ml-[4vw] h-[6vh] w-[88vw] rounded-[2rem] border-black border-solid border-[1px]">
                    <Image src={Back} alt={"Go back"} className={"w-[2vw] float-left"}/>
                    <input type="text" className={"bg-black pl-[20vw]"}/>
                    <Image src={X} alt={"Clear search query"} className={"w-[2vw] float-right"}/>
                </div>

                {adresses.map((address, index) =>
                    <>
                        <Image src={index === 0 ? Clock : Map} alt={"Clock icon"} className={"w-[2vw]"}/>
                        {address.street}
                        <br/>
                        {address.city}
                        <Image src={Arrow} alt={"Arrow icon"} className={"w-[2vw]"}/>
                        <Image src={Line} alt={"Line icon"} className={"w-[2vw]"}/>
                    </>
                )}
            </div>
            <BottomBar/>
        </div>
    );
}

export default Search;
