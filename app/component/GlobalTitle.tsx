import React from "react";

interface GlobalTitleProps {
  children: React.ReactNode;
}

export default function GlobalTitle({ children }: GlobalTitleProps) {
  return <h2 className="text-4xl font-bold text-center">{children}</h2>;
}
