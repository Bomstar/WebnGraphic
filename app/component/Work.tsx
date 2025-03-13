import { WorkItems } from "./json";
import GlobalButton from "./Button";

export default function Work() {
  return (
    <section className="bg-[#16152f] py-8 p-5 text-white">
      <div className="lg:p-16 md:p-8 flex flex-col items-center relative lg:max-w-[1440px] m-0 md:m-auto md:space-y-40 space-y-20">
        <div className="lg:px-75 md:px-30 space-y-5 ">
          <h4 className="font-semibold uppercase md:text-2xl text-center">
            HOW WE WORK
          </h4>
          <h2 className="md:text-5xl text-3xl font-bold text-center">
            Our Process For Delivering Results
          </h2>
          <p className="text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever.
          </p>
        </div>
        <div className="md:flex justify-center uppercase tracking-[3px] items-center lg:top-80 md:top-60 gap-4 absolute lg:right-20 md:-right-10 transform -rotate-90 hidden">
          <hr className="w-16 border-1" />
          <h6>Project in steps</h6>
        </div>
        <div className="md:bg-[url('/assets/work-line.png')] xl:w-[1056px] lg:w-[830px] md:w-[600px] md:relative min-h-[242px] bg-center space-y-4 bg-[length:100%_100%] bg-no-repeat">
          {WorkItems.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col bg-[linear-gradient(45deg,#00b1dc_0.5%,#356e7c_100%)] md:absolute justify-center pl-10 ${
                i === 0 &&
                "lg:-top-15 lg:-left-10 md:-top-16 md:-left-12 lg:w-48 lg:h-48 w-45 h-45"
              } ${
                i === 1 &&
                "lg:-bottom-15 lg:left-[24%] md:-bottom-18 md:left-[18%] lg:w-44 lg:h-44 w-41 h-41 "
              } ${
                i === 2 &&
                "lg:-top-15 lg:right-60 md:-top-15 md:right-15 lg:w-48 lg:h-48 w-45 h-45 "
              } ${
                i === 3 &&
                "lg:-bottom-18 lg:-right-10 md:-bottom-18 md:-right-20 lg:w-44 lg:h-44 w-41 h-41"
              } rounded-full`}
            >
              <h2 className="font-bold text-4xl">{item.num}</h2>
              <h4 className="font-bold text-xl">{item.names}</h4>
            </div>
          ))}
        </div>
        <div className="flex justify-center" data-aos="zoom-in">
          <GlobalButton>Contact Now</GlobalButton>
        </div>
      </div>
    </section>
  );
}
