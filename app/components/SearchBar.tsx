import React from 'react'
import { FaRegCalendar } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className='bg-[#FF4251] w-screen h-1/5 bottom-0 p-5 gap-2 absolute z-1 flex flex-col'>
        <div className='flex flex-row items-start gap-5'>
          <button>
            <FaRegCalendar />
          </button>
            <button className='text-white border-2 border-white rounded-md h-8 w-[52px]'>daily</button>
            <button className='text-white border-2 border-white rounded-md h-8 w-[75px]'>monthly</button>
        </div>
        <div className='flex flex-col items-start gap-1'>
            <text className='text-white'>Find spots near:</text>
            <div className='flex flex-row items-center border-2 rounded-lg bg-white w-full'>
              <FaSearch />
              <input
                  className="border-none outline-none h-[52px] w-[80%]"
                  placeholder="Queen's University"
              />
            </div>
        </div>
    </div>
  )
}

export default SearchBar