"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useInView } from "framer-motion";

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Mostaque Ahmad",
    position: "Managing Director, MAS",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "The team at WebNGraphic delivered exceptional results for our website redesign. Their attention to detail and creative approach exceeded our expectations.",
  },
  {
    id: 2,
    name: "Mostaque Ahmad",
    position: "Managing Director, HelloWorld",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Nice Service. The team was responsive, professional, and delivered our project ahead of schedule. Would definitely recommend their services.",
  },
  {
    id: 3,
    name: "Mostaque Ahmad",
    position: "Managing Director, HAHAHHA",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "The service was very good and fast. I'm pretty much grateful to the team WebNGraphic. They transformed our online presence completely.",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    position: "CEO, Digital Solutions",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Working with WebNGraphic was a game-changer for our business. Their expertise in web development and design helped us achieve our goals.",
  },
  {
    id: 5,
    name: "Michael Chen",
    position: "Marketing Director, TechStart",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "The e-commerce platform they built for us has significantly increased our online sales. Their ongoing support has been invaluable.",
  },
];

export default function ShadcnTestimonialsSlider() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [totalSlides, setTotalSlides] = useState(testimonials.length);
  const [visibleSlides, setVisibleSlides] = useState(3);
  const [autoplay, setAutoplay] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  // Update visible slides count based on screen size
  const updateVisibleSlides = useCallback(() => {
    if (typeof window === "undefined") return 3;

    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  }, []);

  // Update visible slides on window resize
  useEffect(() => {
    const handleResize = () => {
      setVisibleSlides(updateVisibleSlides());
    };

    // Set initial value
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [updateVisibleSlides]);

  // Calculate number of pagination dots needed
  useEffect(() => {
    if (testimonials.length <= visibleSlides) {
      setTotalSlides(1);
    } else {
      // For loop mode, we need one dot per slide
      setTotalSlides(testimonials.length);
    }
  }, [visibleSlides]);

  // Set up the carousel API
  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);

    // Initial setup - make sure to set current after the API is ready
    setCurrent(api.selectedScrollSnap());

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  // Handle autoplay
  useEffect(() => {
    if (!api || !autoplay || !isInView) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    // Start autoplay
    intervalRef.current = setInterval(() => {
      api.scrollNext();
    }, 2000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [api, autoplay, isInView]);

  const scrollToIndex = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  // Generate pagination dots
  const paginationDots = Array.from({ length: totalSlides }, (_, i) => i);

  return (
    <section ref={sectionRef} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <div className="w-1 h-8 bg-[#00b1dc] mr-3"></div>
          <h2 className="text-[#00b1dc] font-medium uppercase tracking-wide">
            TESTIMONIALS
          </h2>
        </div>

        <h3 className="text-3xl md:text-4xl font-bold text-[#16152f] mb-12">
          What Our Clients Say
        </h3>

        <div className="relative px-6 md:px-10">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <CarouselContent className="-ml-4 !py-5">
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full">
                    <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="relative w-12 h-12 rounded-full overflow-hidden mr-3">
                            <Image
                              src={testimonial.image || "/placeholder.svg"}
                              alt={testimonial.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-semibold text-[#16152f]">
                              {testimonial.name}
                            </h4>
                            <p className="text-gray-500 text-sm">
                              {testimonial.position}
                            </p>
                          </div>
                        </div>

                        <div className="flex mb-3">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${
                                i < testimonial.rating
                                  ? "fill-[#00b1dc] text-[#00b1dc]"
                                  : "fill-gray-200 text-gray-200"
                              }`}
                            />
                          ))}
                        </div>

                        <p className="text-gray-700 line-clamp-4">
                          {testimonial.text}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute group left-1 md:p-6 bg-white/60">
              <ChevronLeft className="lg:!w-10 group-hover:text-[#00b1dc] md:!w-6 lg:!h-10 md:!h-6 !w-4 !h-4" />
            </CarouselPrevious>
            <CarouselNext className="absolute group right-1 md:p-6 bg-white/60">
              <ChevronRight className="lg:!w-10 group-hover:text-[#00b1dc] md:!w-6 lg:!h-10 md:!h-6 !w-4 !h-4" />
            </CarouselNext>
          </Carousel>

          {/* Custom navigation buttons */}
          {/* <button
            onClick={scrollToPrev}
            className="absolute top-1/2 -left-2 md:left-0 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#16152f] hover:bg-gray-100 hover:text-[#00b1dc] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00b1dc] focus:ring-offset-2 z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollToNext}
            className="absolute top-1/2 -right-2 md:right-0 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#16152f] hover:bg-gray-100 hover:text-[#00b1dc] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00b1dc] focus:ring-offset-2 z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button> */}

          {/* Pagination dots */}
          {paginationDots.length > 1 && (
            <div className="flex justify-center mt-8">
              {paginationDots.map((index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full mx-1 transition-colors ${
                    index === current
                      ? "bg-[#00b1dc]"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === current ? "true" : "false"}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
