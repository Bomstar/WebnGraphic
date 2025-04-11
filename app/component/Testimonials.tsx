"use client";

import { useMemo } from "react";
import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [autoplay, setAutoplay] = useState(true);
  const [visibleCount, setVisibleCount] = useState(3);
  const [maxIndex, setMaxIndex] = useState(testimonials.length - visibleCount);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Determine how many testimonials to show based on screen size
  const updateVisibleCount = useCallback(() => {
    if (typeof window === "undefined") return 3;

    let count = 3;
    if (window.innerWidth < 640) count = 1;
    else if (window.innerWidth < 1024) count = 2;

    setVisibleCount(count);
    // Update maxIndex based on new visibleCount
    setMaxIndex(Math.max(0, testimonials.length - count));

    // Ensure currentIndex is not beyond the new maxIndex
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex, Math.max(0, testimonials.length - count))
    );

    return count;
  }, []);

  // Update visible count on window resize
  useEffect(() => {
    updateVisibleCount(); // Set initial values

    const handleResize = () => {
      updateVisibleCount();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [updateVisibleCount]);

  // Handle next slide (right to left movement)
  const nextSlide = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentIndex((prevIndex) => {
      // Only advance if we haven't reached the end
      if (prevIndex >= maxIndex) return 0; // Loop back to start
      return prevIndex + 1;
    });

    // Reset animation state after transition completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  }, [isAnimating, maxIndex]);

  // Handle previous slide
  const prevSlide = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentIndex((prevIndex) => {
      if (prevIndex <= 0) return maxIndex; // Loop back to end
      return prevIndex - 1;
    });

    // Reset animation state after transition completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  }, [isAnimating, maxIndex]);

  // Go to specific slide
  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      if (index < 0 || index > maxIndex) return;

      setIsAnimating(true);
      setCurrentIndex(index);

      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    },
    [isAnimating, maxIndex]
  );

  // Autoplay functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (autoplay && !isAnimating) {
      interval = setInterval(() => {
        nextSlide();
      }, 2000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay, nextSlide, isAnimating]);

  // Calculate pagination dots
  const paginationDots = useMemo(() => {
    // If we have fewer or equal testimonials than visible count, just show one dot
    if (testimonials.length <= visibleCount) return [0];

    // Otherwise, create dots for each possible starting position
    return Array.from({ length: maxIndex + 1 }, (_, i) => i);
  }, [visibleCount, maxIndex]);

  // Handlers for pausing/resuming autoplay on hover
  const handleMouseEnter = useCallback(() => {
    setAutoplay(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setAutoplay(true);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
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

        {/* Added hover handlers to the entire slider container */}
        <div
          className="relative px-4"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Testimonials container */}
          <div ref={sliderRef} className="overflow-hidden py-5">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  (100 * currentIndex) / testimonials.length
                }%)`,
                width: `${(100 * testimonials.length) / visibleCount}%`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="px-3"
                  style={{ width: `${100 / testimonials.length}%` }}
                >
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
              ))}
            </div>
          </div>

          {/* Navigation buttons - only show if we have more testimonials than visible count */}
          {testimonials.length > visibleCount && (
            <>
              <button
                onClick={prevSlide}
                className="absolute top-1/2 -left-2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#16152f] hover:bg-gray-100 focus:outline-none z-10"
                aria-label="Previous testimonial"
                disabled={isAnimating}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute top-1/2 -right-2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#16152f] hover:bg-gray-100 focus:outline-none z-10"
                aria-label="Next testimonial"
                disabled={isAnimating}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* Pagination dots - only show if we have more testimonials than visible count */}
        {paginationDots.length > 1 && (
          <div className="flex justify-center mt-8">
            {paginationDots.map((index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full mx-1 ${
                  index === currentIndex ? "bg-[#00b1dc]" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                disabled={isAnimating}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
