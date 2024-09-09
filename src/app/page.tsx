import SwiperModule from "@/components/elements/SwiperModule";
import SwiperContent from "@/components/elements/SwiperContent";

export default function Home() {
  const contents = [
    { imgUrl: "https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&&fm=jpg&w=400&fit=max", link: "/page1" },
    { imgUrl: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixid=2yJhcHBfaWQiOjEyMDd9&&fm=jpg&w=400&fit=max", link: "/page2" },
    { imgUrl: "https://images.unsplash.com/photo-1498579809087-ef1e558fd1da?ixid=2yJhcHBfaWQiOjEyMDd9&&fm=jpg&w=400&fit=max", link: "/page3" },
    { imgUrl: "https://images.unsplash.com/photo-1498579809087-ef1e558fd1da?ixid=2yJhcHBfaWQiOjEyMDd9&&fm=jpg&w=400&fit=max", link: "/page3" },
    { imgUrl: "https://images.unsplash.com/photo-1498579809087-ef1e558fd1da?ixid=2yJhcHBfaWQiOjEyMDd9&&fm=jpg&w=400&fit=max", link: "/page3" },
  ];
  return (
    <main>
      <div className="bg-red-500 w-40 h-40">
      </div>
      <SwiperModule contents={contents} />

    </main>
  );
}
