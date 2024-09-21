"use client"

// import SwiperContent from "@/components/elements/SwiperContent";
import SwiperModule from "@/components/elements/SwiperModule";
import SlideContentMain from "@/components/pages/main/SlideContent.main";
import Calendar from "@/components/elements/Calendar";
import CategoriesList from "@/components/pages/main/CategoriesList";

export default function Home() {

  const slides= SlideContentMain();
  return (
    <main className="mx-auto max-w-5xl my-4">
      <div className="flex space-x-4 h-80">
          <SwiperModule 
            loop={true}
            pagination={true}
            navigation={true}
            spaceBetween={0}
            slidesPerView={1}
            slides={slides} // 생성된 슬라이드들을 SwiperModule에 전달
            className='w-2/3'
          />
          <Calendar
            className='w-1/3 h-full bg-blue-50'
          />
      </div>
      <div>
        <CategoriesList/>
      </div>

      

    </main>
  );
}
