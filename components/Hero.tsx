"use client";

import Image from "next/image";
import { Button } from "@heroui/react";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-primary text-white flex items-center justify-center text-center px-4">
      {/* Background Image */}
      <Image
        src="/images/heroimg.jpg"
        alt="Smartwatch"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
        priority
      />

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-[120px] sm:text-[120px] font-bebas mb-8">
          WINTER SALE <br /> UP TO 50% OFF
        </h1>
        <div className="space-x-4">
          <Button
            as="a"
            href="/shop-smartwatches"
            className="bg-accent text-primary px-6 py-3 rounded-lg hover:bg-opacity-80 transition"
          >
            Shop Now
          </Button>
          <Button
            as="a"
            href="/learn-more"
            className="bg-transparent border-2 border-accent text-accent px-6 py-3 rounded-lg hover:bg-accent hover:text-primary transition"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
