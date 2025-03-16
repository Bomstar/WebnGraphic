import GlobalButton from "./Button";
import Image from "next/image";
import GlobalTitle from "./GlobalTitle";

export default function AboutUs2() {
  return (
    <section className="lg:p-16 md:p-10 p-5">
      <div className="flex max-lg:flex-col md:items-center max-lg:space-y-7 max-sm:space-y-5 gap-10">
        <div className="lg:w-1/2 rounded-lg md:p-10 p-5  space-y-7 text-white bg-[#16152f]">
          <h4>About Us</h4>
          <GlobalTitle>
            Helping businesses deliver exceptional buyer experiences.
          </GlobalTitle>
          <p>
            Vidyard is the leading video messaging and asynchronous
            communications platform for go-to-market teams. Millions of sales
            professionals and more than 250,000 go-to-market teams use Vidyard’s
            AI-powered video messaging, video hosting, and digital sales rooms
            to connect with more prospects and generate more revenue.
          </p>
          <div>
            <GlobalButton>Sign Up for Free</GlobalButton>
          </div>
        </div>
        <div className="w-1/2 h-[500px] relative group overflow-hidden  rounded-2xl">
          <Image
            src="/assets/About Us.png" //outb Local image (stored in public/)
            alt="Example Image"
            fill
            className="group-hover:scale-105 object-cover duration-300"
          />
        </div>
      </div>
    </section>
  );
}
