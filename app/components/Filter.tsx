import React from 'react';
import { MdArrowBackIos } from "react-icons/md";
import { FaFilterCircleXmark } from "react-icons/fa6";

const FilterPage = ({setShowFilters}) => {
    return (
        <div className="absolute ml-[2vw] h-[86.5vh] w-[96vw] rounded-xl z-50 bg-[#FCF9EF] text-[#343632]">
            
            <div className="flex flex-row justify-around py-3 text-xl">
                <MdArrowBackIos onClick={() => setShowFilters(false)}/>
                <div className="flex items-center font-passion">
                    <FaFilterCircleXmark className="mr-1"/>
                    Filter
                </div>
                <MdArrowBackIos color="transparent"/>
            </div>

            <div>
                <div className="text-center rotate-12 text-xl font-bold mt-32 text-[#FF4251]">filters coming soon!</div>
            </div>
        </div>
    );
}

export default FilterPage;
