"use client";

import { Check } from "lucide-react";
import Image from "next/image";

export default function FeaturesSection() {
  const features = [
    { id: 1, text: "Custom E-commerce" },
    { id: 2, text: "Shopify Development" },
    { id: 3, text: "WooCommerce Development" },
    { id: 4, text: "Mobile Commerce" },
    { id: 5, text: "Payment Integration" },
    { id: 6, text: "E-commerce SEO" },
    { id: 7, text: "Security & Compliance" },
    { id: 8, text: "Maintenance & Support" },
    { id: 9, text: "Data Migration" },
    { id: 10, text: "Headless E-commerce" },
  ];

  return (
    <section className="w-full bg-white text-black overflow-hidden">
      <div className="py-16 px-5 md:px-12 mx-auto max-w-7xl">
        <div className="flex max-sm:flex-col-reverse gap-10 items-start">
          <div className="space-y-8 md:w-3/5 w-full">
            <div className="space-y-4">
              <h1 className="text-3xl lg:text-4xl font-bold  leading-tight">
                Professional E-commerce Development Services
              </h1>
              <p className="text-black/90 text-lg max-w-xl">
                We build high-performance, scalable, and user-friendly
                e-commerce websites tailored to your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature.id} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00b1dc]/20 flex items-center justify-center">
                    <Check className="h-4 w-4 text-[#00b1dc]" />
                  </div>
                  <span className="font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-[#00b1dc] text-white font-medium rounded-md hover:bg-[#0098c1] transition-colors uppercase">
                learn more
              </button>
            </div>
          </div>

          <div className="relative md:w-2/5 w-full flex">
            <Image
              src="/assets/Ourlegacy.png"
              width={400}
              height={500}
              alt="Designer with laptop"
              className="relative w-full z-10"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
