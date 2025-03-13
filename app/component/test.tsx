"use client";
import Image from "next/image";

const cardData = [
  {
    title: "Fintech",
    description:
      "We're your go-to for financial innovation — banking, lending, trading and accounting software development, e-wallet, and blockchain solutions.",
    image: "/icons/3d-logo.png",
  },
  {
    title: "Edtech",
    description:
      "Manage schools and corporate learning with ease — we provide software development for LMS, e-learning and mobile learning apps, educational platforms, virtual classrooms, and more.",
    image: "/icons/3d-logo.png",
  },
  {
    title: "Retail",
    description:
      "Revolutionize your retail game with us. From e-commerce and POS software to omnichannel solutions and online ordering, we've got your back.",
    image: "/icons/3d-logo.png",
  },
  {
    title: "Real Estate",
    description:
      "Navigate real estate effortlessly. We are offering location-based services, real estate applications, ERP and process automation, property management and digital twin solutions.",
    image: "/icons/3d-logo.png",
  },
];

export default function ServiceCards() {
  return (
    <section className=" bg-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:p-10 p-5 text-white lg:max-w-[1440px] m-0 md:m-auto">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="flex  max-sm:flex-col-reverse group hover:scale-105 bg-gray-800 p-6 rounded-2xl shadow-lg transition-transform duration-300 cursor-pointer perspective-[1000px] "
          >
            <div className="relative md:w-[70%]">
              <div>
                <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                <p className="text-gray-300">{card.description}</p>
              </div>
              <button className="mt-4 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition">
                Learn more
              </button>
            </div>
            <div
              key={index}
              className="flex relative items-center transition-transform duration-400 [transform-style:preserve-3d] group-hover:rotate-20  group-hover:scale-115 group-hover:[transform:rotateY(-30deg)] md:w-[30%] justify-center"
            >
              <Image
                src={card.image}
                alt={card.title}
                width={100}
                height={100}
                className="duration-400"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
