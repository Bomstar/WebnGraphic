import Image from "next/image";
import GlobalButton from "./Button";

export default function AboutUs() {
  return (
    <section className="lg:p-16 md:p-10 p-5">
      <h2 className="text-5xl font-bold text-center text-[#00b1dc] mb-10">
        Our Legacy
      </h2>
      <div className="flex max-lg:flex-col md:items-center max-lg:space-y-7 max-sm:space-y-5 gap-10">
        <div className="lg:w-1/2 md:w-4/5 flex justify-center xl:[568px] lg:h-[458px] md:h-[568px] h-80 [mask-image:url('/assets/mask.png')] [mask-size:100%_100%;] [mask-repeat: no-repeat,]  relative group overflow-hidden border rounded-2xl">
          <Image
            src="/assets/Ourlegacy.png" // Local image (stored in public/)
            alt="Example Image"
            fill
            className="group-hover:scale-105 object-cover duration-300"
          />
        </div>
        <div className="lg:w-1/2 rounded-lg md:p-10 p-5  space-y-7 text-white bg-[#16152f]">
          <h2 className="font-bold text-3xl max-sm:text-2xl">
            Everything Starts With A WebnGraphics Agency.
          </h2>
          <p>
            We specialize in transforming your digital vision into reality. At
            WebnGraphics Agency, we deliver custom web development, stunning
            designs, digital marketing, professional video production, and
            innovative app solutions to elevate your digital presence and drive
            your business growth.
          </p>
          <div>
            <GlobalButton>Discover More</GlobalButton>
          </div>
        </div>
      </div>
    </section>
  );
}
