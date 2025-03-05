import React from "react";
import { PricingPlans } from "./json";
import Button from "./Button";

export default function Pricing() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6">Our Pricing Plans</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {PricingPlans.map((plan, i) => (
          <div
            key={i}
            className="p-6 shadow-lg w-80 bg-white rounded-2xl relative"
          >
            {plan.popularTag && (
              <div className="absolute top-0 right-0 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                Popular
              </div>
            )}

            <div>
              <h2 className="text-2xl text-center border-b-2 uppercase font-bold">
                {plan.title}
              </h2>
              <div className="py-8 border-b-2">
                <p className="text-5xl pl-16 font-bold text-[#00b1dc]">
                  {plan.discountPrice}
                  <span className="text-gray-400 text-2xl italic line-through">
                    {plan.regularPrice}
                  </span>
                </p>
                <p className="pl-16 font-bold text-gray-400">{plan.deuTime}</p>
              </div>
            </div>
            <div>
              <ul className="py-6 pl-5 list-none space-y-2 text-gray-700">
                {plan.points.map((point, index) => (
                  <li
                    key={index}
                    className="flex gap-2.5 group hover:text-[#00b1dc] cursor-pointer"
                  >
                    <span>{plan.check}</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center">
                <Button>Get Started</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
