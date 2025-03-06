import React from "react";

interface BoxProps {
  children: React.ReactNode;
}

export default function Box({ children }: BoxProps) {
  return (
    <div className="p-6 rounded-2xl shadow-lg flex flex-col items-center text-center bg-white">
      {children}
    </div>
  );
}
