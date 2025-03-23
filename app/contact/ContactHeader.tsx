import { Home } from "lucide-react";
import Link from "next/link";

export default function ContactHeader() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#F4F7FF0F] to-[#F4F7FF] text-center relative">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Contact Us
      </h1>
      <div className="flex items-center justify-center text-sm">
        <Link
          href="/"
          className="text-gray-600 hover:text-[#00b1dc] flex items-center"
        >
          <Home className="h-4 w-4 mr-1" /> Home
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-[#00b1dc]">contact</span>
      </div>
      <div className="w-16 h-1 mt-7 bg-[#00b1dc] mx-auto"></div>
    </section>
  );
}
