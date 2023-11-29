import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import slide_image from '../../public/parked_car.jpg';
import Image from 'next/image';
const Slider = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <Image src ={slide_image} alt = "slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src ={slide_image} alt = "slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src ={slide_image} alt = "slide_image" />
      </SwiperSlide>
      <SwiperSlide>
       <Image src ={slide_image} alt = "slide_image" />
      </SwiperSlide>
      ...
    </Swiper>
  );
};

export default Slider;