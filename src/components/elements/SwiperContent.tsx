// components/elements/SwiperSlidesComponent.tsx
import React from 'react';
import { SwiperSlide } from 'swiper/react';

const SwiperSlidesComponent = ():React.ReactNode[] => {
  // 슬라이드를 생성하는 로직
  const slides = [
    <SwiperSlide key="1">test1</SwiperSlide>,
    <SwiperSlide key="2">test2</SwiperSlide>,
    <SwiperSlide key="3">test3</SwiperSlide>,
  ];

  return slides; // SwiperSlide 요소들을 반환
};

export default SwiperSlidesComponent;



// "use client";
// import { ExhibitionDetail, ExhibitionList } from "@/types/api";
// import { SwiperSlide } from "swiper/react";





// export const SwiperContent = ({ data } : any) => {
//   return(
//     <>
//       {data.map((item: ExhibitionDetail) => (
//         <SwiperSlide key={item.id}>
//           <div>
//             <img src={item.imgUrl} alt={item.eventName} />
//           </div>
//         </SwiperSlide>
//       ))}
//     </>
//   );
// };

// export default SwiperContent

