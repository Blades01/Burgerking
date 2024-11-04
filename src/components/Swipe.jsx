import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import images
import img1 from '../images/img1.jpg';
import img11 from '../images/img11.jpg';
import img12 from '../images/img12.jpg';
import img16 from '../images/img16.jpg';


export const Swipe= ()=> {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='images'><img src={img1} alt="" /></SwiperSlide>
        <SwiperSlide className='images'><img src={img12} alt="" /></SwiperSlide>
        <SwiperSlide className='images'><img src={img11} alt="" /></SwiperSlide>
        <SwiperSlide className='images'><img src={img16} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}


