import { Home } from "lucide-react";
import Link from "next/link";

export default function HeroSection({
  headerData,
}: {
  headerData: { title: string; discription: string };
}) {
  return (
    <section className="py-16 bg-gradient-to-r from-[#16152f] to-[#34325b] text-white text-center relative">
      <h1 className="text-4xl md:text-5xl font-bold  mb-4">
        {headerData.title}
      </h1>
      <div className="flex items-center justify-center text-sm">
        <Link
          href="/"
          className="text-white hover:text-[#00b1dc] flex items-center"
        >
          <Home className="h-4 w-4 mr-1" /> Home
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-[#00b1dc]">{headerData.title}</span>
      </div>
      <p className="text-lg md:text-xl mt-5 max-w-3xl mx-auto mb-8">
        {headerData.discription}
      </p>
      <div className="w-16 h-1 mt-7 bg-[#00b1dc] mx-auto"></div>
    </section>
  );
}
