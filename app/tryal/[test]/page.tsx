import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Sample project details

export default function ProjectDetailPage({
  params,
}: {
  params: { test: string };
}) {
  const { test } = params;
  console.log(params);
  return (
    <main>
      <div>hi {test}</div>
    </main>
  );
}
