"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Home, ExternalLink, X } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Portfolio project data
const portfolioItems = [
  {
    id: 1,
    title: "Creative Web Design",
    category: "Web Design",
    image: "/assets/Ourlegacy.png",
    featured: true,
    client: "Better Canada Foundation",
    completeDate: "12/0/2025",
    mobileImage: "/assets/smg1.jpg",
    slugan: `BCF's mission is to advance education by providing immigrants and youth in Canada with formal informal, and non-formal tools.`,
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
  },
  {
    id: 2,
    title: "Complex Dashboard",
    category: "Web Design",
    image: "/assets/Ourlegacy.png",
    featured: true,
    client: "Better Canada Foundation",
    completeDate: "12/0/2025",
    mobileImage: "/assets/smg1.jpg",
    slugan: `BCF's mission is to advance education by providing immigrants and youth in Canada with formal informal, and non-formal tools.`,
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
  },
  {
    id: 3,
    title: "Food App Design",
    category: "Web Devolopment",
    image: "/assets/Ourlegacy.png",
    featured: true,
    client: "Better Canada Foundation",
    completeDate: "12/0/2025",
    mobileImage: "/assets/smg1.jpg",
    slugan: `BCF's mission is to advance education by providing immigrants and youth in Canada with formal informal, and non-formal tools.`,
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
  },
  {
    id: 4,
    title: "E-commerce Website",
    category: "Web Design",
    image: "/assets/Ourlegacy.png",
    featured: false,
    client: "Better Canada Foundation",
    completeDate: "12/0/2025",
    mobileImage: "/assets/smg1.jpg",
    slugan: `BCF's mission is to advance education by providing immigrants and youth in Canada with formal informal, and non-formal tools.`,
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
  },
  {
    id: 5,
    title: "Fitness Tracker App",
    category: "Web Devolopment",
    image: "/assets/Ourlegacy.png",
    featured: false,
    client: "Better Canada Foundation",
    completeDate: "12/0/2025",
    mobileImage: "/assets/smg1.jpg",
    slugan: `BCF's mission is to advance education by providing immigrants and youth in Canada with formal informal, and non-formal tools.`,
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
  },
  {
    id: 6,
    title: "Corporate Branding",
    category: "Graphics Design",
    image: "/assets/Ourlegacy.png",
    featured: false,
    client: "Better Canada Foundation",
    completeDate: "12/0/2025",
    mobileImage: "/assets/smg1.jpg",
    slugan: `BCF's mission is to advance education by providing immigrants and youth in Canada with formal informal, and non-formal tools.`,
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
  },
];

export default function PortfolioPage() {
  const [currentProject, setCurrentProject] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  let projects = {};

  portfolioItems.map((item) => {
    if (item.id === currentProject) {
      projects = item;
    }
  });

  // Filter featured projects
  const featuredProjects = portfolioItems.filter((item) => item.featured);

  const webDesignProject = portfolioItems.filter(
    (item) => item.category === "Web Design"
  );
  const webDevProject = portfolioItems.filter(
    (item) => item.category === "Web Devolopment"
  );
  const graphicsProject = portfolioItems.filter(
    (item) => item.category === "Graphics Design"
  );

  // All projects
  const allProjects = portfolioItems;

  return (
    <main>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-[#F4F7FF0F] to-[#F4F7FF] text-center relative">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Our Portfolio
        </h1>
        <div className="flex items-center justify-center text-sm">
          <Link
            href="/"
            className="text-gray-600 hover:text-[#00b1dc] flex items-center"
          >
            <Home className="h-4 w-4 mr-1" /> Home
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-[#00b1dc]">portfolio</span>
        </div>
        <p className="text-lg md:text-xl mt-5 max-w-3xl mx-auto mb-8">
          We use strategic approaches to provide our clients with high-end
          services that ensure superior customer satisfaction.
        </p>
        <div className="w-16 h-1 mt-7 bg-[#00b1dc] mx-auto"></div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 lg:px-16 md:10 p-5">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="relative">
                <div className="group after-anime bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    {/* Featured Tag */}
                    <div className="absolute top-0 left-0 z-10">
                      <div className="bg-[#00b1dc] text-white text-xs font-bold px-4 py-1 rounded-br-lg">
                        FEATURED
                      </div>
                    </div>

                    {/* Project Image */}
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="text-sm text-[#00b1dc] mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#00b1dc] transition-colors">
                      <a
                        onClick={() => {
                          setCurrentProject(project.id);
                          setModalOpen(true);
                        }}
                      >
                        {project.title}
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Section */}
      <section className="lg:p-16 md:p-10 p-5 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            All Projects
          </h2>

          {/* Filter Buttons */}

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Tabs defaultValue="all" className="w-full md:gap-y-10 gap-y-40">
              <TabsList className="bg-transparent flex-wrap w-full gap-5">
                <div className="flex justify-center">
                  <TabsTrigger
                    value="all"
                    className="!px-6 !py-2 rounded-full data-[state=active]:text-white bg-gray-200 font-medium hover:text-white hover:bg-[#0093dc] transition-colors"
                  >
                    All
                  </TabsTrigger>
                </div>
                <div className="flex justify-center">
                  <TabsTrigger
                    value="webDesign"
                    className="!px-6 !py-2 rounded-full data-[state=active]:text-white bg-gray-200 font-medium hover:text-white hover:bg-[#0093dc] transition-colors"
                  >
                    Web Design
                  </TabsTrigger>
                </div>
                <div className="flex justify-center">
                  <TabsTrigger
                    value="webDev"
                    className="!px-6 !py-2 rounded-full data-[state=active]:text-white bg-gray-200 font-medium hover:text-white hover:bg-[#0093dc] transition-colors"
                  >
                    Web Devolopment
                  </TabsTrigger>
                </div>
                <div className="flex justify-center">
                  <TabsTrigger
                    value="graphics"
                    className="!px-6 !py-2 rounded-full data-[state=active]:text-white bg-gray-200 font-medium hover:text-white hover:bg-[#0093dc] transition-colors"
                  >
                    Graphics Design
                  </TabsTrigger>
                </div>
              </TabsList>
              <TabsContent value="all" className="">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {allProjects.map((project, i) => (
                    <div key={i} className="relative z-10">
                      <div className="group bg-white after-anime rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                        <div className="relative">
                          {project.featured && (
                            <div className="absolute top-0 left-0 z-10">
                              <div className="bg-[#00b1dc] text-white text-xs font-bold px-4 py-1 rounded-br-lg">
                                FEATURED
                              </div>
                            </div>
                          )}

                          <div className="relative h-64 w-full overflow-hidden">
                            <Image
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          </div>
                        </div>

                        <div className="p-6">
                          <div className="text-sm text-[#00b1dc] mb-2">
                            {project.category}
                          </div>
                          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#00b1dc] transition-colors">
                            <a
                              onClick={() => {
                                setCurrentProject(project.id);
                                setModalOpen(true);
                              }}
                            >
                              {project.title}
                            </a>
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="webDesign">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {webDesignProject.map((project) => (
                    <div key={project.id} className="relative z-10">
                      <div className="group bg-white after-anime rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                        <div className="relative">
                          {project.featured && (
                            <div className="absolute top-0 left-0 z-10">
                              <div className="bg-[#00b1dc] text-white text-xs font-bold px-4 py-1 rounded-br-lg">
                                FEATURED
                              </div>
                            </div>
                          )}

                          <div className="relative h-64 w-full overflow-hidden">
                            <Image
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          </div>
                        </div>

                        <div className="p-6">
                          <div className="text-sm text-[#00b1dc] mb-2">
                            {project.category}
                          </div>
                          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#00b1dc] transition-colors">
                            <a
                              onClick={() => {
                                setCurrentProject(project.id);
                                setModalOpen(true);
                              }}
                            >
                              {project.title}
                            </a>
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="webDev">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {webDevProject.map((project) => (
                    <div key={project.id} className="relative z-10">
                      <div className="group bg-white after-anime rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                        <div className="relative">
                          {project.featured && (
                            <div className="absolute top-0 left-0 z-10">
                              <div className="bg-[#00b1dc] text-white text-xs font-bold px-4 py-1 rounded-br-lg">
                                FEATURED
                              </div>
                            </div>
                          )}

                          <div className="relative h-64 w-full overflow-hidden">
                            <Image
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          </div>
                        </div>

                        <div className="p-6">
                          <div className="text-sm text-[#00b1dc] mb-2">
                            {project.category}
                          </div>
                          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#00b1dc] transition-colors">
                            <a
                              onClick={() => {
                                setCurrentProject(project.id);
                                setModalOpen(true);
                              }}
                            >
                              {project.title}
                            </a>
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="graphics">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {graphicsProject.map((project) => (
                    <div key={project.id} className="relative z-10">
                      <div className="group after-anime bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                        <div className="relative">
                          {project.featured && (
                            <div className="absolute top-0 left-0 z-10">
                              <div className="bg-[#00b1dc] text-white text-xs font-bold px-4 py-1 rounded-br-lg">
                                FEATURED
                              </div>
                            </div>
                          )}

                          <div className="relative h-64 w-full overflow-hidden">
                            <Image
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          </div>
                        </div>

                        <div className="p-6">
                          <div className="text-sm text-[#00b1dc] mb-2">
                            {project.category}
                          </div>
                          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#00b1dc] transition-colors">
                            <a
                              onClick={() => {
                                setCurrentProject(project.id);
                                setModalOpen(true);
                              }}
                            >
                              {project.title}
                            </a>
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Popup Models */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/70 bg-opacity-75 z-50 flex items-center justify-center xl:px-40 lg:p-30 md:p-20 p-5 ">
          <div className=" relative">
            <button
              onClick={() => setModalOpen(false)}
              className=" absolute top-5 right-5 bg-black/50 rounded-full p-1 shadow-md hover:bg-black/70 transition-colors z-10"
            >
              <X className="h-6 w-6 text-white" />
            </button>
            <div className="bg-white rounded-xl max-h-[90vh] overflow-y-auto relative">
              <div className="relative h-80 md:h-96 bg-[#1a93b1]">
                <Image
                  src={projects.image || "/placeholder.svg"}
                  alt={projects.title}
                  fill
                  className="object-cover opacity-80"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />

                <div className="absolute inset-0 flex items-center justify-between md:px-8 p-4">
                  <div className="max-w-md text-white z-10">
                    <div className="bg-[#00b1dc] text-white text-xs font-bold py-1 px-3 rounded inline-block mb-4">
                      {projects.category}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      {projects.title}
                    </h2>
                    <p className="text-sm md:text-base opacity-90">
                      {projects.slugan}
                    </p>
                  </div>

                  <div className="absolute right-4 lg:h-[400px] lg:w-[200px] md:w-[175px] md:h-[350px] w-[140px] h-[280px]  rotate-3 shadow-2xl rounded-3xl border-8 border-white">
                    <Image
                      src={projects.mobileImage || "/placeholder.svg"}
                      alt={`${projects.title} mobile view`}
                      fill
                      className="object-cover rounded-2xl"
                      sizes="200px"
                    />
                  </div>
                </div>
              </div>

              <div className="md:p-8 p-4">
                <div className="flex flex-wrap gap-4 mb-8 text-sm text-gray-600">
                  <div className="flex items-center">
                    <span className="font-semibold mr-2">Complete:</span>{" "}
                    {projects.completeDate}
                  </div>
                  <div className="flex items-center">
                    <span className="font-semibold mr-2">Client:</span>{" "}
                    {projects.client}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 ">Overview</h3>
                <p className="text-gray-700 mb-8">{projects.overview}</p>

                <h3 className="text-2xl font-bold mb-4 ">
                  Key Features of {projects.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {projects.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="bg-indigo-100 text-[#00b1dc] rounded-full p-1 mt-0.5">
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

                <h3 className="text-2xl font-bold mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2 mb-8">
                  {projects.technologies.map((tech, index) => (
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
                    "{projects.testimonial.quote}"
                  </blockquote>
                  <p className="text-indigo-900 font-semibold">
                    — {projects.testimonial.author}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href={projects.demoUrl}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#00b1dc] text-white rounded-lg hover:bg-[#0093dc] transition-colors"
                    target="_blank"
                  >
                    Live Demo
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#00b1dc] to-[#0093dc] text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to start your project?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how we can help you achieve your
            business goals.
          </p>
          <a
            href="/contact"
            className="px-8 py-3 bg-white text-[#0093dc] font-bold rounded-full hover:bg-gray-100 transition-colors"
          >
            Get a Quote
          </a>
        </div>
      </section>
    </main>
  );
}
