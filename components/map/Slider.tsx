import React, { useState } from 'react';
import Image from 'next/image';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@smastrom/react-rating';
import { MdFavorite } from 'react-icons/md';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '@smastrom/react-rating/style.css'
import slide_image from '@/public/parked_car.jpg';
import dummyData from '@/config/dummyData';
import Link from "next/link";


// @ts-ignore
const Slider = () => {

    const swiperSlides = () => {
        return dummyData.map((item) => (
            <SwiperSlide key={item.address} className="">
                <Image src={slide_image} alt="slide_image" className="absolute w-[70vw] h-[20vh] mx-[15vw] rounded-xl"/>
                <div className="absolute w-[70vw] h-[20vh] mx-[15vw] rounded-xl bg-black opacity-60"/>
                <div className="absolute w-[70vw] h-[20vh] mx-[15vw] rounded-xl p-4 overflow-hidden">
                    <div className="flex flex-row">
                        <div>
                            <div className="font-passion text-[#FCF9EF] text-2xl">{item.address}</div>
                            <div className="font-passion text-[#FCF9EF] text-lg -mt-3">Kingston, ON</div>
                            <div
                                className="font-outfit text-[#FCF9EF] text-xs -mt-1">({Math.round(item.distance)}m)
                            </div>
                        </div>
                        <div className="ml-auto text-right">
                            <div className="font-passion text-[#FCF9EF] text-4xl">${item.price}</div>
                            <div className="font-passion text-[#FCF9EF] text-sm -mt-2">per {item.period.toLowerCase().slice(0, item.period.length - 2)}
                            </div>
                            <Rating style={{maxWidth: 70}} value={item.rating} readOnly/>
                        </div>
                    </div>
                    <div className="absolute bottom-3">
                        <div className="flex flex-row space-x-2 mb-2">
                            {item.amenities.map((tag, key) => (
                                <div key={key} className="px-2 rounded-full bg-[#343632] text-white font-outfit text-[10px] border-[1px] border-[#FCF9EF]">
                                    {tag}
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-row items-center">
                            <Link
                                className="w-[54vw] py-1 bg-[#FF4251] rounded-full font-passion text-[#FCF9EF] shadow-xl active:opacity-50 duration-75 text-center"
                                href={{ pathname: '/map/details', query: { spotData: JSON.stringify(item) } }}
                            >
                                More Details
                            </Link>
                            <div className="border-2 border-[#FCF9EF] rounded-full p-[1vw] ml-2">
                                <MdFavorite size={18} color="#FCF9EF"/>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        ))
    };

    return (
        <Swiper
            effect={'coverflow'}
            centeredSlides={true}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
            }}
            navigation
            loop
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={1}
            className="h-[20vh] mt-[40vh] mb-0"
        >
            {swiperSlides()}
        </Swiper>
    );
};

export default Slider;
