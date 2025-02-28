"use client";

import Image from "next/image";
import { Button } from "@heroui/react";

export default function Hero() {
  return (
    <section className="relative h-[92vh] bg-primary text-white flex items-center justify-center text-center px-6">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/heroimg.jpg"
          alt="Smartwatch"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-[120px] sm:text-[120px] font-bebas mb-8">
          WINTER SALE <br /> UP TO 50% OFF
        </h1>
        <div className="space-x-4">
          <Button
            as="a"
            href="/shop-smartwatches"
            className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-opacity-80 transition"
          >
            Shop Now
          </Button>
          <Button
            as="a"
            href="/learn-more"
            className="bg-transparent border-2 border-accent text-white px-6 py-3 rounded-lg hover:bg-accent hover:text-white transition"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
