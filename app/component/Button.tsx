import React from "react";
import { MoveRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
}

export default function GlobalButton({ children }: ButtonProps) {
  return (
    <button className="bg-[#00b1dc] cursor-pointer flex justify-center gap-3 group uppercase font-bold md:text-xl text-lg text-red-50 p-2 pr-6 pl-6 hover:bg-[#0098c1] rounded-full">
      {children}
      <span>
        <MoveRight
          className=" transition mt-0.5 duration-200 group-hover:translate-x-1"
          strokeWidth={2.25}
        />
      </span>
    </button>
  );
}
