// Home.tsx
"use client";

import NavbarComponent from "@/components/Navbar";
import Hero from "@/components/Hero"; // adjust import as needed
import Image from "next/image";
import Topbar from "@/components/Topbar";
import FeaturedProducts from "@/components/FeaturedProducts";
import { Footer } from "@/components";
import PromoBanner from "@/components/PromoBanner";
import FlashSale from "@/components/FlashSale";
import BestSellers from "@/components/BestSellers";
import ProductCategories from "@/components/ProductCategories";

export default function Home() {
  return (
    <div className="relative h-screen bg-gray-100 dark:bg-gray-900">
      {/* Background layer */}
      <div className="absolute inset-0 bg-cover bg-center opacity-50">
        {/* Uncomment and configure Image if needed */}
        {/*
        <Image
          src="/path/to/your/image.jpg"
          alt="Background Image"
          fill
          className="object-cover"
        />
        */}
      </div>
      {/* Content layer */}
      <div className="relative z-10">
        <Topbar />
        <NavbarComponent />
        <Hero />
        <FlashSale />
        <BestSellers />
        <ProductCategories />
        <FeaturedProducts />
        <PromoBanner />
        <Footer />
      </div>
    </div>
  );
}
