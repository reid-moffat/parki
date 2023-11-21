import React from 'react'

const SearchBar = () => {
  return (
    <div className='bg-[#FF4251] w-screen h-1/5 bottom-0 p-5 gap-2 absolute z-1 flex flex-col'>
        <div className='flex flex-row items-start gap-5'>
            <button>calender</button>
            <button className='text-white border-2 border-white rounded-md h-8 w-[52px]'>daily</button>
            <button className='text-white border-2 border-white rounded-md h-8 w-[75px]'>monthly</button>
        </div>
        <div className='flex flex-col items-start gap-1'>
            <text className='text-white'>Find spots near:</text>
            <input
                className="border-2 border-[#FF4251] rounded-lg h-[52px] w-[339px]"
                placeholder="Queen's University"
            />
        </div>
    </div>
  )
}

export default SearchBar