"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ServiceSec() {
  return (
    <section className="lg:px-16  md:px-10 py-16 px-5">
      <div className="lg:max-w-[1440px] space-y-10 m-0 md:m-auto">
        <div className="space-y-4">
          <div className="flex justify-center">
            <h1 className="md:text-6xl text-3xl font-bold text-center uppercase md:w-[495px] w-[250px]">
              Designing Is What We Do.
            </h1>
          </div>
          <div className="text-center">
            <span className="md:text-3xl font-medium text-xl">
              You bring the ideas, we’ll bring them to life.
            </span>
          </div>
        </div>
        <div className="space-y-5 md:mt-16">
          <div className="md:flex md:space-y-0 space-y-5 gap-5 items-center">
            <h2 className="md:text-4xl align-middle font-semibold text-2xl/[24px]">
              Social Media Graphics
            </h2>
            <button
              type="button"
              title="let's deal"
              className="flex gap-2 py-1 px-4 group border-2 font-bold text-[#00b1dc] border-[#00b1dc] uppercase rounded-full"
            >
              Let's Talk Details
              <span>
                <MoveRight
                  className=" transition duration-200 group-hover:translate-x-1"
                  strokeWidth={2.25}
                />
              </span>
            </button>
          </div>
          <div>
            <p className="text-lg/[22px] text-gray-600 lg:w-[70%] md:w-[90%]">
              Engaging designs are a must for every platform in order to grab
              the attention of your target audience. Get custom branded,
              innovative, and platform-ready designs and templates, from static
              to motion and video, in every dimension you need! From Instagram
              to TikTok, from posts to stories, stand out and scale your social
              media output.
            </p>
          </div>
        </div>
        <div>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
                stopOnMouseEnter: true,
                stopOnInteraction: false,
              }),
            ]}
            className="w-full relative"
          >
            <CarouselContent>
              <CarouselItem className="basis-1/3">
                <div className="w-full flex flex-col rounded-2xl bg-[#00BC8F] aspect-square">
                  <div className="flex-1 relative">
                    <Image
                      className="object-cover"
                      src={"/assets/smg1.jpg"}
                      alt="webdevservice"
                      fill
                    />
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <div className="w-full flex flex-col rounded-2xl bg-[#00BC8F] aspect-square">
                  <div className="flex-1 relative">
                    <Image
                      className="object-cover"
                      src={"/assets/smg2.jpg"}
                      alt="webdevservice"
                      fill
                    />
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <div className="w-full flex flex-col rounded-2xl bg-[#00BC8F] aspect-square">
                  <div className="flex-1 relative">
                    <Image
                      className="object-cover"
                      src={"/assets/smg3.jpg"}
                      alt="webdevservice"
                      fill
                    />
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <div className="w-full flex flex-col rounded-2xl bg-[#00BC8F] aspect-square">
                  <div className="flex-1 relative">
                    <Image
                      className="object-cover"
                      src={"/assets/smg4.jpg"}
                      alt="webdevservice"
                      fill
                    />
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <div className="w-full flex flex-col rounded-2xl bg-[#00BC8F] aspect-square">
                  <div className="flex-1 relative">
                    <Image
                      className="object-cover"
                      src={"/assets/smg5.jpg"}
                      alt="webdevservice"
                      fill
                    />
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/3 aspect-square h-full">
                <div className="w-full flex flex-col rounded-2xl bg-[#00BC8F] aspect-square">
                  <div className="flex-1 relative">
                    <Image
                      className="object-cover"
                      src={"/assets/smg6.jpg"}
                      alt="webdevservice"
                      fill
                    />
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="absolute md:left-3 left-1 md:p-6 bg-white/60">
              <ChevronLeft className="lg:!w-10 md:!w-6 lg:!h-10 md:!h-6 !w-4 !h-4" />
            </CarouselPrevious>
            <CarouselNext className="absolute md:right-3 right-1 md:p-6 bg-white/60">
              <ChevronRight className="lg:!w-10 md:!w-6 lg:!h-10 md:!h-6 !w-4 !h-4" />
            </CarouselNext>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
