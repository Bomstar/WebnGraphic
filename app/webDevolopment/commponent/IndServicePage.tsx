"use client"; // Mark this as a client component

import Link from "next/link";
import { Check, Home } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function ServicePage({ pricingPlans, services, headerData }) {
  return (
    <>
      {/* Hero Section */}

      <section className="py-16 bg-gradient-to-r from-[#16152f] to-[#34325b] text-white text-center relative">
        <h1 className="text-4xl md:text-5xl font-bold  mb-4">
          {headerData.title}
        </h1>
        <div className="flex items-center justify-center text-sm">
          <Link
            href="/"
            className="text-white hover:text-[#00b1dc] flex items-center"
          >
            <Home className="h-4 w-4 mr-1" /> Home
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-[#00b1dc]">{headerData.title}</span>
        </div>
        <p className="text-lg md:text-xl mt-5 max-w-3xl mx-auto mb-8">
          {headerData.discription}
        </p>
        <div className="w-16 h-1 mt-7 bg-[#00b1dc] mx-auto"></div>
      </section>

      {/* Service Details Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {headerData.boxTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* Map through the services array and render each service */}
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-center bg-blue-100 w-12 h-12 rounded-full mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gradient-to-b lg:p-16 md:p-8 p-5 from-gray-50 to-white py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">
              Pricing Plans
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Choose the perfect plan for your needs. All plans include a 14-day
              free trial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.id}
                className={cn(
                  "relative  border-2 transition-all duration-300 hover:shadow-xl",
                  plan.popular
                    ? "border-[#0093dc] shadow-lg md:scale-105 z-10"
                    : "border-gray-200 hover:border-gray-300"
                )}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#0093dc] hover:bg-[#0093dc]">
                    Most Popular
                  </Badge>
                )}
                <CardHeader
                  className={cn(
                    "text-center px-2 pb-4",
                    plan.popular && "bg-blue-50/50"
                  )}
                >
                  <CardTitle className="text-2xl font-bold">
                    {plan.title}
                  </CardTitle>
                  <CardDescription className="mt-1.5">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 !px-3">
                  <div className="text-center mb-6">
                    <span className="text-5xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-[#0093dc] mr-2 mt-0.5 shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-0">
                  <Link
                    href={plan.buttonLink}
                    className={cn(
                      "w-full rounded-full text-white font-medium py-3 px-6 text-center",
                      "transition-all duration-200 hover:shadow-md",
                      plan.popular
                        ? "bg-[#0093dc] hover:bg-[#0083c6]"
                        : "bg-[#0093dc]/90 hover:bg-[#0093dc]"
                    )}
                  >
                    {plan.buttonText}
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-500">
              Need a custom plan?{" "}
              <a
                href="/contact"
                className="text-[#0093dc] font-medium hover:underline"
              >
                Contact us
              </a>{" "}
              for more information.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
