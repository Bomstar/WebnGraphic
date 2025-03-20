"use client";

import type React from "react";
import { BarChart3, LineChart, Monitor, FileSearch } from "lucide-react";

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: "orange" | "blue";
}

export default function WorkProcess() {
  const processSteps: ProcessStep[] = [
    {
      id: 1,
      title: "Research",
      description: "Migrating your rank Google Analytics to another solution.",
      icon: <FileSearch className="h-12 w-12 text-white" />,
      color: "orange",
    },
    {
      id: 2,
      title: "Customize",
      description: "Migrating your rank Google Analytics to another solution.",
      icon: <BarChart3 className="h-12 w-12 text-white" />,
      color: "blue",
    },
    {
      id: 3,
      title: "Targeting",
      description: "Migrating your rank Google Analytics to another solution.",
      icon: <Monitor className="h-12 w-12 text-white" />,
      color: "orange",
    },
    {
      id: 4,
      title: "Result",
      description: "Migrating your rank Google Analytics to another solution.",
      icon: <LineChart className="h-12 w-12 text-white" />,
      color: "blue",
    },
  ];

  return (
    <section className="bg-[#050726] py-20 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1 left-0 right-0 h-0.5 bg-gray-800 z-0"></div>

          {processSteps.map((step, index) => (
            <div
              key={step.id}
              className="flex flex-col items-center mb-16 md:mb-0 relative z-10 w-full md:w-1/4"
            >
              {/* Circle with icon */}
              <div
                className={`w-32 h-32 rounded-full flex items-center justify-center mb-6 relative
                  ${
                    step.color === "orange"
                      ? "bg-gradient-to-br from-orange-500 to-orange-400"
                      : "bg-gradient-to-br from-blue-400 to-blue-500"
                  }`}
              >
                {step.icon}

                {/* Connection dot */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-white rounded-full border-4 border-[#050726]"></div>
                )}
              </div>

              {/* Title */}
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-center mb-6 max-w-[250px]">
                {step.description}
              </p>

              {/* Step button */}
              <button
                className={`px-6 py-3 rounded-full font-medium text-white
                  ${
                    step.id % 2 === 1
                      ? "bg-blue-500 hover:bg-blue-600"
                      : "bg-orange-500 hover:bg-orange-600"
                  } 
                  transition-colors duration-300`}
              >
                {step.id === 1
                  ? "1ST STEP"
                  : step.id === 2
                  ? "2ND STEP"
                  : step.id === 3
                  ? "3RD STEP"
                  : "4TH STEP"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
