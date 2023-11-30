import React from 'react'
import { FaRegCalendar, FaSearch } from "react-icons/fa";

const SearchBar = () => {
    return (
        <div className='bg-[#FF4251] w-screen h-1/5 bottom-0 p-5 gap-2 absolute z-1 flex flex-col'>
            <div className='flex flex-row items-start gap-5 h-[30%]'>
                <button className='text-white h-[100%]'>
                    <FaRegCalendar/>
                </button>
                <button className='text-white border-2 border-white rounded-md h-[100%] w-[52px]'>daily</button>
                <button className='text-white border-2 border-white rounded-md h-[100%] w-[75px]'>monthly</button>
            </div>
            <div className='flex flex-col items-start gap-1 h-[70%]'>
                <text className='text-white'>Find spots near:</text>
                <div className='flex flex-row items-center border-2 rounded-lg bg-white h-[70%] w-full'>
                    <button className='text-[#FF4251] pl-2 pr-2 h-[100%]'>
                        <FaSearch/>
                    </button>
                    <input
                        className="border-none outline-none h-[100%] w-[80%]"
                        placeholder="Queen's University"
                    />
                </div>
            </div>
        </div>
    )
}

export default SearchBar
