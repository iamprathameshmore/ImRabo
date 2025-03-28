"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const companies = [
  { name: "Google", logo: "https://logo.clearbit.com/google.com" },
  { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
  { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
  { name: "Tesla", logo: "https://logo.clearbit.com/tesla.com" },
  { name: "Netflix", logo: "https://logo.clearbit.com/netflix.com" },
  { name: "Facebook", logo: "https://logo.clearbit.com/facebook.com" },
  { name: "Apple", logo: "https://logo.clearbit.com/apple.com" },
  { name: "IBM", logo: "https://logo.clearbit.com/ibm.com" },
  { name: "Adobe", logo: "https://logo.clearbit.com/adobe.com" },
  { name: "Salesforce", logo: "https://logo.clearbit.com/salesforce.com" },
];

export const Case2 = () => {
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
        setCurrent(current + 1);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [api, current]);

  return (
    <div className="w-full py-20 lg:py-40 p-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-5 gap-10 items-center">
          <h3 className="text-xl tracking-tighter lg:max-w-xl font-regular text-left">
            Trusted by market leaders
          </h3>
          <div className="relative w-full col-span-4">
            <div className="bg-gradient-to-r from-background via-white/0 to-background z-10 absolute left-0 top-0 right-0 bottom-0 w-full h-full"></div>
            <Carousel setApi={setApi} className="w-full">
              <CarouselContent>
                {companies.map((company, index) => (
                  <CarouselItem className="basis-1/4 lg:basis-1/6" key={index}>
                    <div className="flex rounded-md aspect-square bg-muted items-center justify-center p-2">
                      <Image
                        src={company.logo}
                        alt={company.name}
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};
