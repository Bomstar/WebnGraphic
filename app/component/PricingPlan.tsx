import React from "react";
import { PricingPlans } from "./json";
import GlobalButton from "./Button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Pricing() {
  return (
    <div className="bg-gray-100 md:p-16 p-5">
      <div className="lg:max-w-[1440px] space-y-10 m-0 md:m-auto">
        <h1 className="text-4xl text-center font-bold">Our Pricing Plans</h1>
        <div className="flex flex-wrap justify-center gap-6">
          {PricingPlans.map((plan, i) => (
            <div
              key={i}
              className="p-6 shadow-lg xl:w-80 md:w-80 lg:w-72 w-72 bg-white rounded-2xl relative"
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
                </div>
              </div>
              <div>
                <ul className="py-6 pl-5 list-none space-y-2 text-gray-700">
                  {plan.points.map((point, index) => (
                    <li
                      key={index}
                      className="flex gap-2.5 group hover:text-[#00b1dc]"
                    >
                      <span>{plan.check}</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center ">
                  <Dialog>
                    <DialogTrigger asChild>
                      <GlobalButton>Get Started</GlobalButton>
                    </DialogTrigger>
                    <DialogContent className="p-0 max-h-screen overflow-y-auto border-0 sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle className="text-center text-3xl font-bold py-5 rounded-t-sm text-white bg-[#00b1dc]">
                          Fill In Your Info
                        </DialogTitle>
                      </DialogHeader>
                      <div className="p-5 space-y-2.5">
                        <div>
                          <p>*Name</p>
                          <input
                            className="border-2 p-2 rounded-sm focus:border-blue-400 w-full"
                            type="text"
                            title="Enter Name"
                            placeholder="Enter Your Name"
                          />
                        </div>
                        <div>
                          <p>*Email</p>
                          <input
                            className="border-2 p-2 rounded-sm focus:border-blue-400 w-full"
                            type="email"
                            title="Enter Email"
                            placeholder="Enter Your Email"
                          />
                        </div>
                        <div>
                          <p>*Phone</p>
                          <input
                            className="border-2 p-2 rounded-sm focus:border-blue-400 w-full"
                            type="text"
                            title="Enter Number"
                            placeholder="Enter Phone Number"
                          />
                        </div>
                        <div>
                          <p>*Massege</p>
                          <textarea
                            className="border-2 p-2 rounded-sm max-h-screen focus:border-blue-400 w-full"
                            title="Messege"
                            placeholder="Messege"
                          />
                        </div>
                        <div className="flex justify-center">
                          <GlobalButton>Submit</GlobalButton>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
