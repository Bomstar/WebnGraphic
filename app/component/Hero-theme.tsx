import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";

export default function HeroTheme() {
  return (
    <div className="bg-[#16152f]">
      <div className="pt-16 bg-[#16152f] relative pb-10 items-center flex-col md:flex-row flex w-full justify-between px-5 md:px-16 gap-8 lg:max-w-[1440px] space-y-10 m-0 md:m-auto">
        <div className="buble-blue-left"></div>
        <div className="buble-blue"></div>
        <div className="buble-red"></div>
        <div>
          <div className="relative z-10">
            <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-4xl mx-auto">
              <div className="md:hidden">
                <Image
                  src="/assets/herobg.webp" // Local image (stored in public/)
                  alt="Example Image"
                  width={500}
                  height={300}
                ></Image>
              </div>
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl leading-tight">
                We{" "}
                <Typewriter
                  words={["Design.", "Develop.", "Market."]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={70}
                  delaySpeed={2000}
                />
              </h1>
              <p className="text-Ttext mt-6 text-xl md:text-2xl lg:text-3xl max-w-2xl">
                We offer web solutions, graphic design, SEO, and marketing
                tailored to your business goals.
              </p>
              <div className="flex justify-center md:justify-start gap-4 items-center mt-5 md:mt-8">
                <span className="text-xl md:text-2xl lg:text-3xl text-white cursor-pointer">
                  Work With Us
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-square-arrow-out-up-right bg-[#fc1c69] text-white p-3 rounded-[20px] w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 hover:scale-110 transition-transform duration-200 cursor-pointer"
                >
                  <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"></path>
                  <path d="m21 3-9 9"></path>
                  <path d="M15 3h6v6"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Mobile View */}
          {/* <div className="relative md:hidden z-10 pb-20 px-6">
            <div className="max-w-5xl mx-auto flex flex-col items-center md:items-start text-center md:text-left">
              <div className="relative pb-5">
                <img
                  alt="bg"
                  loading="lazy"
                  width="1200"
                  height="720"
                  decoding="async"
                  data-nimg="1"
                  className="w-full text-transparent h-auto"
                  srcSet="/_next/image?url=%2Fherobg.png&w=1200&q=75 1x, /_next/image?url=%2Fherobg.png&w=3840&q=75 2x"
                  src="/_next/image?url=%2Fherobg.png&w=3840&q=75"
                />
              </div>
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                We Design. We Develop. We Market.
              </h1>
              <p className="text-gray-300 mt-4 text-lg md:text-xl lg:text-2xl max-w-3xl">
                Transform your ideas into reality with our expertise in web
                development, branding, and digital marketing.
              </p>
              <div className="w-20 h-1 bg-[#fc1c69] mt-6 md:mt-8"></div>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 items-center mt-6 md:mt-8">
                <button className="bg-[#fc1c69] text-white px-6 py-3 text-lg md:text-xl rounded-xl font-semibold shadow-lg flex items-center gap-3 hover:scale-105 transition-transform duration-200">
                  Work With Us
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-square-arrow-out-up-right w-6 h-6"
                  >
                    <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"></path>
                    <path d="m21 3-9 9"></path>
                    <path d="M15 3h6v6"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div> */}
        </div>

        {/* Form Section */}
        <div className="bg-Tbg flex-shrink-0 bg-opacity-70 border-[0.5px] border-[#00b1dc4d] w-full md:w-[350px] lg:w-[380px] h-[450px] py-8 px-5 rounded-md z-40">
          <h3 className="text-[#00b1dc] text-center lg:text-lg md:text-2xl mb-8 font-semibold">
            Get your free consultants!
          </h3>
          <form>
            <input
              placeholder="Name"
              className="response-form-input mb-4"
              type="text"
              required
            />
            <input
              placeholder="Email"
              className="response-form-input mb-4"
              type="email"
              required
            />
            <input
              placeholder="Phone"
              className="response-form-input mb-4"
              type="text"
              required
            />
            <textarea
              placeholder="Message"
              className="response-form-input mb-4 !h-20"
              required
            ></textarea>
            <div>
              <button
                type="submit"
                className="w-full transition duration-300 bg-Ttext text-[#F1F1F1] hover:bg-TtextH active:bg-TtextA py-2 rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
