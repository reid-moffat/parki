import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import slide_image from '../../public/parked_car.jpg';
import Image from 'next/image';
import data from '../pages/map/dummyData';


const Slider = () => {
  console.log(data);

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={3}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >

      {data.map(item => (
        <SwiperSlide key={item.address}> 
          <div>
            {item.price}, {item.address}, {item.rating}
          </div>
          <div>
            <Image src ={slide_image} alt = "slide_image" />

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
      ...
    </Swiper>
  );
};

export default Slider;