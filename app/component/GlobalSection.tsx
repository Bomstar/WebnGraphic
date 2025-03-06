import React from "react";

interface GlobalSectionProps {
  children: React.ReactNode;
}

export default function GlobalSection({ children }: GlobalSectionProps) {
  return (
    <section className="md:p-16 p-5 bg-gray-100">
      <div className="lg:max-w-[1440px] space-y-10 m-0 md:m-auto">
        {children}
      </div>
    </section>
  );
}
