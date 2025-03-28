"use client";

import { ArrowRight, ShoppingCart } from "lucide-react";
import Image from "next/image";

export default function EcommerceSection() {
  return (
    <section className="w-full bg-white px-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#01dc]/10 text-[#00b1dc] text-sm font-medium">
              <ShoppingCart className="h-4 w-4 mr-2" />
              E-Commerce Solutions
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#16152f] leading-tight">
              Transform Your Business with Our E-Commerce Platform
            </h2>

            <p className="text-gray-600 text-lg max-w-xl">
              Our comprehensive e-commerce solutions help businesses of all
              sizes sell online with ease. From stunning product displays to
              secure payment processing, we provide everything you need to
              succeed in the digital marketplace.
            </p>

            <ul className="space-y-3">
              {[
                "Custom online store design",
                "Mobile-responsive shopping experience",
                "Secure payment gateway integration",
                "Inventory management system",
                "Marketing and SEO optimization",
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#00b1dc]/20 flex items-center justify-center mt-1">
                    <svg
                      width="10"
                      height="8"
                      viewBox="0 0 10 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 3.5L4 6.5L9 1.5"
                        stroke="#00b1dc"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <button className="group inline-flex items-center px-6 py-3 bg-[#00b1dc] text-white font-medium rounded-md hover:bg-[#0098c1] transition-colors">
                Start Selling Online
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r duration-300 from-[#16152f] to-[#00b1dc]/50 rounded-xl transform rotate-3 group-hover:rotate-0"></div>
            <div className="relative bg-white border border-gray-200 rounded-xl p-4 shadow-lg">
              <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
                <Image
                  src="/assets/Ourlegacy.png"
                  width={800}
                  height={600}
                  alt="E-commerce platform showcase"
                  className="object-cover"
                />
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="aspect-square relative overflow-hidden rounded-md bg-gray-100"
                  >
                    <Image
                      src={"/assets/Ourlegacy.png"}
                      width={200}
                      height={200}
                      alt={`Product ${item}`}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#16152f] flex items-center justify-center text-white font-bold">
                    W
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      WebNGraphic Store
                    </p>
                    <p className="text-xs text-gray-500">Online since 2025</p>
                  </div>
                </div>
                <div className="flex items-center text-[#00b1dc]">
                  <span className="text-sm font-medium">View Demo</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
``;
