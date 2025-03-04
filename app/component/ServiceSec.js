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

export default function ServiceSec() {
  return (
    <center className="lg:px-16 md:px-10 py-16 px-5">
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
        className="w-full relative lg:max-w-[1440px] m-0 md:m-auto"
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
        <CarouselPrevious className="absolute md:left-3 left-1 md:p-6 bg-white/60" />
        <CarouselNext className="absolute md:right-3 right-1 md:p-6 bg-white/60" />
      </Carousel>
    </center>
  );
}
