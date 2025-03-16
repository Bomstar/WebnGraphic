import Image from "next/image";
import { MessageCircleMore } from "lucide-react";

export default function BottomForm() {
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
            <input
              type="text"
              placeholder="Enter Name"
              className="bg-white w-full rounded-full text-black p-4"
              required
            />
            <div className="md:flex lg:gap-10 max-sm:space-y-5 gap-3">
              <input
                type="text"
                placeholder="Enter Email"
                className="bg-white md:w-1/2 w-full rounded-full text-black p-4"
                required
              />
              <input
                type="text"
                placeholder="Phone"
                className="bg-white md:w-1/2 w-full rounded-full text-black p-4"
                required
              />
            </div>
            <textarea
              name="messege"
              placeholder="Messege"
              cols={40}
              rows={10}
              className=" bg-white h-40 w-full rounded-3xl text-black p-4"
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
