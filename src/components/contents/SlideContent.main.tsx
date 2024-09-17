import React from 'react';
import Swiper from 'swiper';
import Text from '../elements/Text';
import { SwiperSlide } from 'swiper/react';
const contents = [
  { 
    id : 1,
    startDate : '2024-01-05',
    finisDate : '2024-01-08',
    country : '미국',
    city : '라스베가스',
    venue : '미국 라스베가스 LVCC & Venetian Expo',
    shortName : 'CES',
    englishName : 'Consumer Electronics Show',
    eventName : '미국 라스베가스 소비재  전자제품 전시회',
    category : '전기전자',
    imgUrl: "https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&&fm=jpg&w=400&fit=max", 
    link: "/#" 
  },
  { 
    id : 2,
    startDate : '2024-01-09',
    finisDate : '2024-01-12',
    country : '홍콩',
    city : '홍콩',
    venue : 'Hong Kong Convention and Exhibition Centre (HKCEC)',
    shortName : 'HKBPF',
    englishName : 'Hong Kong Baby Products Fair',
    eventName : '홍콩 유아용품 전시회',
    category : '생활소비재',
    imgUrl: "https://plus.unsplash.com/premium_photo-1723830306042-8d90d4b18492?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    link: "/#" 
  },
  { 
    id : 3,
    startDate : '2024-01-31',
    finisDate : '2024-02-02',
    country : '미국',
    city : '라스베가스',
    venue : 'Las Vegas Convention Center',
    shortName : 'IBS',
    englishName : 'Consumer Electronics Show',
    eventName : '미국 라스베가스 국제 건축 전시회',
    category : '건축기자재',
    imgUrl: "https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&&fm=jpg&w=400&fit=max", 
    link: "/#" 
  },
];
const SlideContentMain = ():React.ReactNode[] => {
  let slides = contents.map((item)=>{
    return (
      <SwiperSlide
      key={item.id}
      className="w-full h-full bg-no-repeat bg-cover relative"
      style={{ backgroundImage: `url(${item.imgUrl})` }}
    >
      <div className="bg-black w-full h-full opacity-45 absolute top-0 left-0"></div>
      <div className="text-white relative flex h-full flex-col px-16">

        <div className='mt-24 flex flex-col'>
          <Text
            text={`${item.startDate} - ${item.finisDate}`}
            type='white'
            size={14}
          />
          <Text
            text={`${item.country}. ${item.city}`}
            type='white'
            size={14}
            className='mt-4'
          />
          <Text
            text={item.eventName}
            type='white'
            weight='bold'
          />
          <Text
            text={item.englishName}
            type='white'
            weight='medium'
            size={16}
          />
        </div>

        {/* {item.city} */}
      </div>
    </SwiperSlide>
      )
    })
  return slides;
};
// const SlideContentMain = ():React.ReactNode[] => {
//   // 슬라이드를 생성하는 로직
//   const slides = [
//     <SwiperSlide key="1">
//       <div></div>
//       test1
//     </SwiperSlide>,
//     <SwiperSlide key="1">
//       <div></div>
//       test1
//     </SwiperSlide>,
//     <SwiperSlide key="1">
//       <div></div>
//       test1
//     </SwiperSlide>,
//   ];

//   return slides; // SwiperSlide 요소들을 반환
// };

export default SlideContentMain;



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

