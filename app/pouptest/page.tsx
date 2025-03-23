"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Code, ExternalLink, X } from "lucide-react";

// Sample portfolio data
const portfolioItems = [
  {
    id: 1,
    title: "Better Canada Foundation",
    year: "2025",
    client: "Better Canada Foundation",
    category: "Full Stack",
    coverImage: "/placeholder.svg?height=600&width=800",
    mobileImage: "/placeholder.svg?height=400&width=200",
    overview:
      "Developed a custom platform for the Better Canada Foundation to manage donations, events, and volunteer activities. The system includes a user-friendly dashboard, real-time analytics, and automated communication tools to engage with donors and volunteers.",
    features: [
      "Donation tracking and management",
      "Volunteer recruitment and management",
      "Automated email and SMS notifications",
      "Event scheduling and registration",
      "Real-time analytics and reporting",
    ],
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "GraphQL",
      "AWS",
      "TailwindCSS",
    ],
    testimonial: {
      quote:
        "The Better Canada Foundation platform has revolutionized how we engage with our community and manage our programs.",
      author: "Arifur Rahman, CTO",
    },
    demoUrl: "https://example.com/demo",
    sourceUrl: "https://github.com/example/project",
  },
  {
    id: 2,
    title: "Health Connect App",
    year: "2024",
    client: "National Health Services",
    category: "Mobile App",
    coverImage: "/placeholder.svg?height=600&width=800",
    mobileImage: "/placeholder.svg?height=400&width=200",
    overview:
      "Created a comprehensive healthcare application that connects patients with healthcare providers, manages appointments, and provides secure access to medical records. The app features real-time notifications, telemedicine capabilities, and integration with existing healthcare systems.",
    features: [
      "Appointment scheduling and management",
      "Secure medical records access",
      "Telemedicine video consultations",
      "Prescription management",
      "Health tracking and analytics",
    ],
    technologies: [
      "React Native",
      "Firebase",
      "Node.js",
      "Express",
      "MongoDB",
      "AWS",
    ],
    testimonial: {
      quote:
        "This application has transformed how we deliver healthcare services to our patients, especially in remote areas.",
      author: "Dr. Sarah Johnson, Medical Director",
    },
    demoUrl: "https://example.com/demo",
    sourceUrl: "https://github.com/example/project",
  },
  {
    id: 3,
    title: "EcoTrack Dashboard",
    year: "2024",
    client: "Environmental Protection Agency",
    category: "Data Visualization",
    coverImage: "/placeholder.svg?height=600&width=800",
    mobileImage: "/placeholder.svg?height=400&width=200",
    overview:
      "Designed and developed an environmental monitoring dashboard that collects, analyzes, and visualizes data from thousands of sensors across the country. The platform helps environmental scientists track pollution levels, weather patterns, and climate change indicators in real-time.",
    features: [
      "Real-time data visualization",
      "Predictive analytics",
      "Automated reporting",
      "Sensor management",
      "Alert system for threshold violations",
    ],
    technologies: [
      "Vue.js",
      "D3.js",
      "Python",
      "Django",
      "PostgreSQL",
      "Docker",
    ],
    testimonial: {
      quote:
        "EcoTrack has given us unprecedented insights into environmental patterns and has become an essential tool for our research and policy decisions.",
      author: "Emma Chen, Environmental Scientist",
    },
    demoUrl: "https://example.com/demo",
    sourceUrl: "https://github.com/example/project",
  },
];

export default function PortfolioPage() {
  const [currentProject, setCurrentProject] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const project = portfolioItems[currentProject];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % portfolioItems.length);
  };

  const prevProject = () => {
    setCurrentProject(
      (prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      {/* Portfolio Grid */}
      <section className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-12 text-center text-indigo-900">
          Our Portfolio
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => {
                setCurrentProject(index);
                setModalOpen(true);
              }}
            >
              <div className="relative h-64">
                <Image
                  src={item.coverImage || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-0 bg-indigo-600 text-white text-xs font-bold py-1 px-3 rounded-r">
                  {item.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-indigo-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.overview}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {item.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">
                      +{item.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl w-full max-w-5xl max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 transition-colors z-10"
            >
              <X className="h-6 w-6 text-gray-700" />
            </button>

            <div className="relative h-80 md:h-96 bg-indigo-900">
              <Image
                src={project.coverImage || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover opacity-80"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />

              <div className="absolute inset-0 flex items-center justify-between px-8">
                <div className="max-w-md text-white z-10">
                  <div className="bg-indigo-600 text-white text-xs font-bold py-1 px-3 rounded inline-block mb-4">
                    {project.category}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {project.title}
                  </h2>
                  <p className="text-sm md:text-base opacity-90">
                    BCF's mission is to advance education by providing
                    immigrants and youth in Canada with formal, informal, and
                    non-formal tools.
                  </p>
                </div>

                <div className="hidden md:block relative h-[400px] w-[200px] rotate-3 shadow-2xl rounded-3xl border-8 border-white">
                  <Image
                    src={project.mobileImage || "/placeholder.svg"}
                    alt={`${project.title} mobile view`}
                    fill
                    className="object-cover rounded-2xl"
                    sizes="200px"
                  />
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="flex flex-wrap gap-4 mb-8 text-sm text-gray-600">
                <div className="flex items-center">
                  <span className="font-semibold mr-2">Year:</span>{" "}
                  {project.year}
                </div>
                <div className="flex items-center">
                  <span className="font-semibold mr-2">Client:</span>{" "}
                  {project.client}
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-indigo-900">
                Overview
              </h3>
              <p className="text-gray-700 mb-8">{project.overview}</p>

              <h3 className="text-2xl font-bold mb-4 text-indigo-900">
                Key Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-indigo-100 text-indigo-600 rounded-full p-1 mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold mb-4 text-indigo-900">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="bg-indigo-50 p-6 rounded-lg mb-8">
                <blockquote className="text-gray-700 italic mb-2">
                  "{project.testimonial.quote}"
                </blockquote>
                <p className="text-indigo-900 font-semibold">
                  — {project.testimonial.author}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href={project.demoUrl}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                  target="_blank"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </Link>
                <Link
                  href={project.sourceUrl}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  target="_blank"
                >
                  <Code className="h-4 w-4" />
                  Source Code
                </Link>
              </div>
            </div>

            <div className="flex justify-between items-center p-4 border-t">
              <button
                onClick={prevProject}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ArrowLeft className="h-5 w-5 text-gray-700" />
              </button>
              <button
                onClick={nextProject}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ArrowRight className="h-5 w-5 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
