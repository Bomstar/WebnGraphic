import React from "react";
import { MoveRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button
      className="bg-[#00b1dc] flex gap-3 group uppercase font-bold text-xl text-red-50 p-2 pr-6 pl-6 rounded-full mt-8"
    >
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
