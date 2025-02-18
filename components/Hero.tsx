// Hero.tsx
"use client";

import Image from "next/image";
import { Button } from "@heroui/react"; // Or your preferred button library

export default function Hero() {
  return (
    <section className="relative h-screen bg-primary text-white">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-60">
        <Image
          src="/images/heroimg.jpg"
          alt="Smartwatch"
          layout="fill"
          className="object-cover"
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
        <h1 className="text-4xl sm:text-5xl font-bebas mb-4">
          The Future of Timekeeping: Discover Our Smartwatches
        </h1>
        <p className="text-lg sm:text-xl mb-6">
          Stay connected and stylish with our premium collection of smartwatches.
        </p>

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
            className="border-2 border-accent text-accent px-6 py-3 rounded-lg hover:bg-accent hover:text-primary transition"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
