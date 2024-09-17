"use client";

import React, { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';

interface SwiperModuleProps {
  loop : boolean;
  navigation : boolean;
  pagination : boolean;
  spaceBetween: number;
  slidesPerView: number;
  slides : ReactNode[];
}
// 스와이퍼 모듈에 스와이퍼 콘텐츠를 넣고. 페이지에서는 아무것도 안하게. 그러면 
// 스와이퍼에 슬라이드를 만들고 그냥 거기에 때려 넣기. 
// 재사용가능한가? 콘텐츠를 
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
    >
      {slides}
      
    </Swiper>
  );
};

export default SwiperModule;
