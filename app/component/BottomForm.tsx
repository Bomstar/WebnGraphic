"use client";
import Image from "next/image";
import { MessageCircleMore } from "lucide-react";
import { Listbox } from "@headlessui/react";
import { useState } from "react";

const services = [
  { name: "--Select Service--", value: "select-service" },
  { name: "Web Development", value: "web-development" },
  { name: "Web Design", value: "web-design" },
  { name: "Graphic Design", value: "graphic-design" },
  { name: "Digital Marketing", value: "digital-marketing" },
  { name: "Video Production", value: "video-production" },
  { name: "App Development", value: "app-development" },
];

export default function BottomForm() {
  const [selectedService, setSelectedService] = useState(services[0]);
  return (
    <section className="section-background">
      <div className="md:flex lg:p-16 md:p-10 p-5 max-sm:space-y-5 gap-10 text-white">
        <div className="lg:w-[30%] md:w-2/5 space-y-5">
          <h2 className="text-4xl font-bold">
            Let Us Take Your Product To The Next Level
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmoda.
          </p>
          <div className="flex items-center gap-4">
            <div>
              <Image
                src="/icons/call24.png" //outb Local image (stored in public/)
                alt="Example Image"
                width={100}
                height={100}
              ></Image>
            </div>
            <div>
              <h3 className="text-2xl underline font-bold">or call us 24/7</h3>
              <h3 className="text-xl">8 800 2563 123</h3>
            </div>
          </div>
        </div>

        <div className="lg:w-[70%] md:3/5">
          <form action="" className="w-full md:space-y-10 space-y-5 relative">
            <div className="md:flex lg:gap-10 max-sm:space-y-5 gap-3">
              <input
                type="text"
                placeholder="Enter Name"
                className="bg-white md:w-1/2 w-full rounded-full focus:ring-2 focus:ring-[#00b1dc] focus:outline-none text-black md:p-4 p-2"
                required
              />
              <input
                type="text"
                placeholder="Enter Email"
                className="bg-white md:w-1/2 w-full rounded-full focus:ring-2 focus:ring-[#00b1dc] focus:outline-none text-black md:p-4 p-2"
                required
              />
            </div>

            <div className="md:flex lg:gap-10 max-sm:space-y-5 gap-3">
              <input
                type="text"
                placeholder="Phone"
                className="bg-white md:w-1/2 w-full focus:ring-2 focus:ring-[#00b1dc] focus:outline-none rounded-full text-black md:p-4 p-2"
                required
              />
              <Listbox value={selectedService} onChange={setSelectedService}>
                <div className="relative md:w-1/2 w-full z-10">
                  <Listbox.Button className="w-full md:p-4 p-2 border rounded-full bg-white text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                    {selectedService.name}
                  </Listbox.Button>
                  <Listbox.Options className="absolute w-full mt-1 overflow-hidden bg-white border rounded-lg shadow-lg">
                    {services.map((service, i) => (
                      <Listbox.Option
                        key={i}
                        value={service}
                        className={({ active }) =>
                          `cursor-pointer p-2 ${
                            active ? "bg-[#00b1dc] text-white" : "text-gray-700"
                          }`
                        }
                      >
                        {service.name}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              </Listbox>
            </div>

            <textarea
              name="messege"
              placeholder="Messege"
              cols={40}
              rows={10}
              className=" bg-white h-40 w-full rounded-3xl focus:ring-2 focus:ring-[#00b1dc] focus:outline-none text-black p-4"
              required
            ></textarea>
            <button
              title="Massege Button"
              className="flex absolute right-4 md:bottom-16 bottom-10 justify-center items-center lg:px-5 px-4 lg:py-3.5 py-2 rounded-full bg-linear-90 from-[#0072ff] to-[#00d4ff]"
            >
              SEND{" "}
              <span>
                <MessageCircleMore />
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
