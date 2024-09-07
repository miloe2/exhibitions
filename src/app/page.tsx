import Image from "next/image";
import Header from '@/components/elements/Header'; // Named import

export default function Home() {
  return (
    <main>
      <Header initialDarkMode={true} />
    </main>
  );
}
