"use client"

// import SwiperContent from "@/components/elements/SwiperContent";
import SwiperModule from "@/components/elements/SwiperModule";
import SlideContentMain from "@/components/contents/SlideContent.main";
import { useEffect } from "react";
import { SwiperSlide } from "swiper/react";

export default function Home() {

  const slides= SlideContentMain();
  return (
    <main className="mx-auto max-w-5xl">
      <div className="bg-red-50 w-40 h-40">
      </div>
      <div className="w-1/2 h-96 bg-red-500">
      <SwiperModule 
          loop={true}
          pagination={true}
          navigation={true}
          spaceBetween={0}
          slidesPerView={1}
          slides={slides} // 생성된 슬라이드들을 SwiperModule에 전달
        />
      </div>
      

    </main>
  );
}
