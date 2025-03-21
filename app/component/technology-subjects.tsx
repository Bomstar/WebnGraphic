import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const subjects = [
  {
    title: "AI Automation",
    description:
      "Construction is a general term the art and science to form systems and organizations, and comes from Latin Construction.",
    icon: "/icons/Ai.png",
    link: "/subjects/ai-automation",
  },
  {
    id: "2",
    title: "Virtual Reality",
    description:
      "Construction is a general term the art and science to form systems and organizations, and comes from Latin Construction.",
    icon: "/icons/Virtual.png",
    link: "/subjects/virtual-reality",
  },
  {
    title: "Machine Learning",
    description:
      "Construction is a general term the art and science to form systems and organizations, and comes from Latin Construction.",
    icon: "/icons/Machine.png",
    link: "/subjects/machine-learning",
  },
  {
    id: "2",
    title: "AI Cloud Services",
    description:
      "Construction is a general term the art and science to form systems and organizations, and comes from Latin Construction.",
    icon: "/icons/AI Cloud.png",
    link: "/subjects/ai-cloud-services",
  },
];

export default function TechnologySubjects() {
  return (
    <section className="lg:p-16 md:p-10 bg-gray-100 p-5 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left content */}
          <div className="w-full lg:w-1/2">
            <div className="bg-sky-200 bg-opacity-50 text-[#00b1dc] py-1 px-6 rounded-full inline-block mb-4 font-medium">
              Popular Subject
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Provide It & Technology Subject For You
            </h2>

            <p className=" mb-8">
              Construction is a general term meaning the art and science to form
              systems organizations, and comes from Latin Construction is
            </p>

            <div className="border-l-4 border-[#00b1dc] pl-4 py-2 mb-8">
              <p className="">
                Construction is a general term meaning the art and science to
                form systems organizations, and comes from Latin Construction is
                a organizations, and comes from Latin construction and Old
              </p>
            </div>

            <Link
              href="/subjects"
              className="inline-flex items-center justify-center bg-[#00b1dc] hover:bg-[#2ea4c2] text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Explore More <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          {/* Right content - Subject cards */}
          <div className="w-full lg:w-1/2 ">
            <div className="grid grid-cols-1 relative md:grid-cols-2 gap-6">
              {subjects.map((subject, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl ${
                    subject.id === "2" && "relative md:top-7"
                  } p-6 shadow-[0_2px_60px] shadow-[#00b1dc]/20 hover:shadow-md transition  duration-200 group hover:bg-[#00b1dc] hover:text-white hover:-translate-y-2`}
                >
                  <div className="mb-4">
                    <Image
                      src={subject.icon || "/placeholder.svg"}
                      alt={subject.title}
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{subject.title}</h3>
                  <p className="text-gray-600 group-hover:text-white mb-4 text-[12px] line-clamp-2">
                    {subject.description}
                  </p>
                  <Link
                    href={subject.link}
                    className="inline-flex items-center text-gray-800 font-medium hover:text-blue-600 transition-colors"
                  >
                    View Subject <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
