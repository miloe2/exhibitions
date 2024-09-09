"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperContent, { SwiperContentProps } from './SwiperContent';

interface SwiperModuleProps {
  contents: SwiperContentProps[]; // SwiperContent에 필요한 데이터를 배열로 받음
}

const SwiperModule = ({ contents }: SwiperModuleProps) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {contents.map((content, index) => (
        <SwiperSlide key={index}>
          <SwiperContent {...content} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperModule;
