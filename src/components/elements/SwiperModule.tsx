"use client";

import React, { ReactNode } from 'react';
import { Swiper } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface SwiperModuleProps {
  loop : boolean;
  navigation : boolean;
  pagination : boolean;
  spaceBetween: number;
  slidesPerView: number;
  slides : ReactNode[];
}
const SwiperModule = ({ loop, navigation, pagination, spaceBetween, slidesPerView, slides }: SwiperModuleProps) => {
  
  return (
    <Swiper
      loop={loop}
      navigation={navigation}
      pagination={pagination}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      // modules={modules} // 전달받은 모듈 사용
      modules={[Navigation, Pagination]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className='custom-swiper w-full h-full'
    >
      {slides}

    </Swiper>
  );
};

export default SwiperModule;
