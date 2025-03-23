"use client";
import Image from "next/image";
import { MessageCircleMore, PhoneCall, MailPlus, Map } from "lucide-react";
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

const contactlists = [
  {
    title: "Have any question?",
    address: "Free +92 (020)-9850",
  },
  {
    title: "Write email",
    address: "needhelp@company.com",
  },
  {
    title: "Visit anytime",
    address: "66 broklyn golden street. New York",
  },
];

const icons = [
  <PhoneCall key={"call"} />,
  <MailPlus key={"mail"} />,
  <Map key={"map"} />,
];

export default function ContactBody() {
  const [selectedService, setSelectedService] = useState(services[0]);
  return (
    <section>
      <div className="lg:flex lg:p-16 md:p-10 p-5 max-sm:space-y-5 gap-10 text-white">
        <div className="lg:w-[60%] md:3/5 space-y-10">
          <div>
            <span className="uppercase text-2xl relative font-semibold deshline text-[#00b1dc]">
              sent us email
            </span>
            <h1 className="text-5xl text-black font-bold">
              Feel free to write
            </h1>
          </div>
          <form action="" className="w-full md:space-y-10 space-y-5 relative">
            <div className="md:flex lg:gap-10 max-sm:space-y-5 gap-3">
              <input
                type="text"
                placeholder="Enter Name"
                className="bg-[#f4f5f8] md:w-1/2 w-full rounded-full focus:ring-2 focus:ring-[#00b1dc] focus:outline-none text-black md:p-4 p-2"
                required
              />
              <input
                type="text"
                placeholder="Enter Email"
                className="bg-[#f4f5f8] md:w-1/2 w-full rounded-full focus:ring-2 focus:ring-[#00b1dc] focus:outline-none text-black md:p-4 p-2"
                required
              />
            </div>

            <div className="md:flex lg:gap-10 max-sm:space-y-5 gap-3">
              <input
                type="text"
                placeholder="Phone"
                className="bg-[#f4f5f8] md:w-1/2 w-full focus:ring-2 focus:ring-[#00b1dc] focus:outline-none rounded-full text-black md:p-4 p-2"
                required
              />
              <Listbox value={selectedService} onChange={setSelectedService}>
                <div className="relative  md:w-1/2 w-full z-10">
                  <Listbox.Button className="w-full md:p-4 p-2 text-left border rounded-full bg-[#f4f5f8] text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                    {selectedService.name}
                  </Listbox.Button>
                  <Listbox.Options className="absolute w-full mt-1 overflow-hidden bg-[#f4f5f8] border rounded-lg shadow-lg">
                    {services.map((service, i) => (
                      <Listbox.Option
                        key={i}
                        value={service}
                        className={({ active }) =>
                          `cursor-pointer p-2 px-5 ${
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
              className=" bg-[#f4f5f8] h-40 w-full rounded-3xl focus:ring-2 focus:ring-[#00b1dc] focus:outline-none text-black p-4"
              required
            ></textarea>
            <button
              title="Massege Button"
              className="flex absolute cursor-pointer right-4 md:bottom-16 bottom-10 justify-center items-center lg:px-5 px-4 lg:py-3.5 py-2 rounded-full bg-linear-90 from-[#0072ff] to-[#00d4ff]"
            >
              SEND{" "}
              <span>
                <MessageCircleMore />
              </span>
            </button>
          </form>
        </div>
        <div className="space-y-8 lg:w-[40%]">
          <span className="uppercase text-2xl relative font-semibold deshline text-[#00b1dc]">
            Need any help?
          </span>
          <h1 className="text-5xl text-black font-bold">
            Get in touch with us
          </h1>
          <p className="text-black">
            Feel free to get in touch with us for any inquiries, support, or
            collaborations. We’re here to assist you. Contact us via email,
            phone, or our website’s contact form anytime!
          </p>
          <div className="text-black space-y-5">
            {contactlists.map((list, i) => (
              <div key={i} className="md:flex items-center gap-4">
                <ul
                  className="flex
                justify-center items-center w-18 rounded-2xl text-white h-18 bg-linear-90 from-[#0072ff] to-[#00d4ff]"
                >
                  {icons.map((icon, idx) => (
                    <li key={idx}>
                      <i>{idx === i && icon}</i>
                    </li>
                  ))}
                </ul>

                <div className="space-y-4">
                  <h4 className="text-xl">{list.title}</h4>
                  <h4 className="text-xl  max-xl:w-[250px] text-gray-700">
                    {list.address}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
