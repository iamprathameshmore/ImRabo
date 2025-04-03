"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const testimonials = [
  {
    name: "Alice Carter",
    company: "Google",
    domain: "google.com",
    feedback: "Imrabo transformed our workflow. The AI assistant is incredibly smart and intuitive!",
  },
  {
    name: "Michael Smith",
    company: "Microsoft",
    domain: "microsoft.com",
    feedback: "A game-changer in automation! The seamless integration saved us countless hours.",
  },
  {
    name: "Sophia Johnson",
    company: "Amazon",
    domain: "amazon.com",
    feedback: "Super responsive and insightful. Feels like working with a real human assistant.",
  },
  {
    name: "David Brown",
    company: "Tesla",
    domain: "tesla.com",
    feedback: "The AI capabilities are unmatched. Highly recommend Imrabo for businesses!",
  },
];

export const Testimonials1 = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent((prev) => prev + 1);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [api, current]);

  return (
    <div className="w-full py-20 lg:py-40 p-5 bg-black text-white">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10 text-center">
          <h2 className="text-3xl md:text-5xl font-semibold text-blue-500 tracking-tighter">
            Trusted by Top Companies
          </h2>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="lg:basis-1/2">
                  <div className="bg-gradient-to-r from-blue-700 via-indigo-600 to-black rounded-lg p-6 h-full flex flex-col items-center justify-between shadow-xl hover:scale-105 transition-all duration-300">
                    {/* Company Logo */}
                    <Image
                      src={`https://logo.clearbit.com/${testimonial.domain}`}
                      alt={`${testimonial.company} Logo`}
                      width={120}
                      height={50}
                      className="mb-4"
                      onError={(e) => (e.currentTarget.src = "/fallback-logo.png")}
                    />
                    
                    {/* Testimonial Text */}
                    <p className="text-lg text-gray-300 italic text-center max-w-md mb-6">
                      "{testimonial.feedback}"
                    </p>

                    {/* User Info */}
                    <div className="flex items-center gap-3 mt-4">
                      <Avatar className="h-12 w-12 border-2 border-blue-500">
                        <AvatarImage src={`https://avatars.dicebear.com/api/adventurer/${testimonial.name}.svg`} />
                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="text-left">
                        <p className="text-white font-medium text-lg">{testimonial.name}</p>
                        <p className="text-sm text-blue-400">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
