import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { MdStar } from "react-icons/md";


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import slide_image from '../../public/parked_car.jpg';
import Image from 'next/image';
import data from '../pages/map/dummyData';
import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Slider = () => {
  console.log(data);

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
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView = {1}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >

{data.map((item) => (
  <SwiperSlide key={item.address} style={{ position: 'relative' }}>
    <div
      style={{
        position: 'absolute',
        top: '10px',
        left: '10px',
        color: 'white',
        zIndex: 1,
      }}
    >
      ${item.price}, {item.address}
    </div>
    <div style={{ position: 'relative' }}>
      <Image src={slide_image} alt="slide_image" />
      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
        }}
      >
        <button
          style={{
            backgroundColor: 'red',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer',
            border: 'none',
          }}
        >
          More Details
        </button>
        <Rating style={{ maxWidth: 90 }} value={item.rating} readOnly />
      </div>
    </div>
  </SwiperSlide>
))}

      <SwiperSlide>
        <Image src ={slide_image} alt = "slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src ={slide_image} alt = "slide_image" />
      </SwiperSlide>
      <SwiperSlide>
       <Image src ={slide_image} alt = "slide_image" />
      </SwiperSlide>
      <div className="slider-controler">
          
          <div className="swiper-pagination"></div>
      </div>
    </Swiper>
  );
};

export default Slider;