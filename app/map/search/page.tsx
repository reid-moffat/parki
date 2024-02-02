import React from 'react';
import BottomBar from "@/components/helpers/BottomBar";
import logo from "@/public/logo.png";
import Image from "next/image";

const Search = () => {
    return (
        <div style={{ backgroundColor: '#343632', position: 'absolute', height: '100vh', width: '100vw', zIndex: '10' }}>
            <Image src={logo} alt="Parki logo" className='w-[120vw] h-[8vh] object-contain mt-3 mb-4'/>

            <div className="absolute ml-[2vw] h-[79.5vh] w-[96vw] rounded-xl -z-50 bg-[#FCF9EF]">
                test
            </div>
            <BottomBar/>
        </div>
    );
}

export default Search;
