"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Target, Lightbulb, Compass, Award, CheckCircle } from "lucide-react";

export default function MissionAndVision() {
  return (
    <section className="py-16 md:py-24 lg:px-12 md:px-10 px-5 bg-[#16152f]/[0.04] relative overflow-hidden">
      {/* <div className="absolute top-0 left-0 w-full h-full bg-[#16152f]/[0.02] z-0"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#00b1dc]/[0.03] blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full "></div> */}

      <div className="container mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#00b1dc]/10 text-[#00b1dc] text-sm font-medium mb-4">
            <Compass className="h-4 w-4 mr-2" />
            Our Philosophy
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#16152f] mb-4">
            Mission & Vision
          </h2>
          <p className="text-gray-600 md:text-lg">
            Guiding principles that drive our work and shape our future in the
            digital landscape
          </p>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Mission Card */}
          <div className="group">
            <Card className="h-full relative border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden bg-white rounded-2xl">
              <div className="h-2 absolute top-0 w-full bg-[#00b1dc]"></div>
              <CardContent className="p-8">
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#00b1dc]/10 flex items-center justify-center mr-4">
                    <Target className="h-6 w-6 text-[#00b1dc]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#16152f]">
                    Our Mission
                  </h3>
                </div>

                <p className="text-gray-700 mb-6">
                  To empower businesses and individuals by providing
                  high-quality, innovative, and user-friendly digital design and
                  branding solutions that drive success and creativity.
                </p>

                <div className="space-y-4">
                  {[
                    "Deliver exceptional value through creative solutions",
                    "Maintain the highest standards of quality and innovation",
                    "Build lasting relationships based on trust and results",
                    "Stay at the forefront of design and technology trends",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#00b1dc] mt-0.5 mr-3 flex-shrink-0" />
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Vision Card */}
          <div className="group">
            <Card className="h-full relative border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden bg-white rounded-2xl">
              <div className="h-2 absolute top-0 w-full bg-[#16152f]"></div>
              <CardContent className="p-8">
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#16152f]/10 flex items-center justify-center mr-4">
                    <Lightbulb className="h-6 w-6 text-[#16152f]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#16152f]">
                    Our Vision
                  </h3>
                </div>

                <p className="text-gray-700 mb-6">
                  To become a global leader in creative design services, known
                  for our commitment to excellence, customer satisfaction, and
                  continuous innovation in the digital space.
                </p>

                <div className="space-y-5 mb-6">
                  {[
                    {
                      year: 2025,
                      label: "Regional expansion across Asia",
                      progress: 90,
                    },
                    {
                      year: 2027,
                      label: "Establish global design academy",
                      progress: 65,
                    },
                    {
                      year: 2030,
                      label: "Industry leader in AI-powered design",
                      progress: 35,
                    },
                  ].map((milestone, index) => (
                    <div key={index} className="relative">
                      <div className="flex items-center mb-1">
                        <span className="text-sm font-semibold text-[#16152f]">
                          {milestone.year}
                        </span>
                        <div className="h-px flex-grow bg-gray-200 mx-3"></div>
                        <span className="text-xs text-gray-500">
                          {milestone.progress}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-gradient-to-r from-[#16152f] to-[#00b1dc] h-2.5 rounded-full"
                          style={{ width: `${milestone.progress}%` }}
                        ></div>
                      </div>
                      <p className="mt-1 text-sm text-gray-600">
                        {milestone.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Award className="h-5 w-5 text-[#16152f] mr-2" />
                    <h4 className="font-semibold text-[#16152f]">
                      Our Future Goals
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Expanding our services globally, pioneering new design
                    methodologies, and creating a platform for emerging
                    designers to showcase their talents.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-[#16152f] text-center mb-10">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Excellence",
                description:
                  "We strive for excellence in every project we undertake",
                icon: <Award className="h-6 w-6 text-white" />,
              },
              {
                title: "Innovation",
                description:
                  "We embrace new ideas and creative approaches to problem-solving",
                icon: <Lightbulb className="h-6 w-6 text-white" />,
              },
              {
                title: "Integrity",
                description:
                  "We maintain the highest standards of honesty and transparency",
                icon: <CheckCircle className="h-6 w-6 text-white" />,
              },
              {
                title: "Collaboration",
                description:
                  "We believe in the power of teamwork and client partnerships",
                icon: <Target className="h-6 w-6 text-white" />,
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden bg-white rounded-xl"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#16152f] to-[#00b1dc] flex items-center justify-center mb-4">
                    {value.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-[#16152f] mb-2">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
