"use client"

// import SwiperContent from "@/components/elements/SwiperContent";
import SwiperModule from "@/components/elements/SwiperModule";
import SwiperSlidesComponent from "@/components/elements/SwiperContent"
import { useEffect } from "react";
import { SwiperSlide } from "swiper/react";

export default function Home() {
  const contents = [
    { 
      id : 1,
      startDate : '2024-01-05',
      finisDate : '2024-01-08',
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
  const slides= SwiperSlidesComponent();
  return (
    <main className="mx-auto max-w-5xl">
      <div className="bg-red-50 w-40 h-40">
      </div>
      <div className="w-1/2 h-auto bg-red-500">
      <SwiperModule 
          spaceBetween={0}
          slidesPerView={1}
          slides={slides} // 생성된 슬라이드들을 SwiperModule에 전달
        />
{/* {contents.map((content) => (
          <div key={content.id} className="p-4 bg-white m-2 rounded shadow">
            <h2 className="font-bold">{content.eventName}</h2>
            <p>기간: {content.startDate} ~ {content.finisDate}</p>
            <p>장소: {content.venue} ({content.city})</p>
            <p>카테고리: {content.category}</p>
            <p>영문명: {content.englishName}</p>
            <p>단축명: {content.shortName}</p>
          </div>
        ))} */}
      </div>
      

    </main>
  );
}
