"use client";

import React, { Children, ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperContent from './SwiperContent';
import { ExhibitionList } from '@/types/api';

interface SwiperModuleProps {
  spaceBetween: number;
  slidesPerView: number;
  // children : T;
  slides : ReactNode[];
}
// 스와이퍼 모듈에 스와이퍼 콘텐츠를 넣고. 페이지에서는 아무것도 안하게. 그러면 
// 스와이퍼에 슬라이드를 만들고 그냥 거기에 때려 넣기. 
// 재사용가능한가? 콘텐츠를 
const SwiperModule = ({ spaceBetween, slidesPerView, slides }: SwiperModuleProps) => {
  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides}
      
    </Swiper>
  );
};

export default SwiperModule;
