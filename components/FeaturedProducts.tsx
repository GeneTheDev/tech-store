// /src/components/FeaturedProducts.tsx
"use client";

import { Card, CardHeader, CardBody, Image } from "@heroui/react";
import { featuredProducts } from "@/data"; // Import the data

export default function FeaturedProducts() {
  return (
    <section className="py-12 px-4 bg-secondary text-white text-center">
      <h2 className="text-120px sm:text-1xl font-bebas mb-8">Featured Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product, index) => (
          <Card key={index} className="bg-white text-primary rounded-lg shadow-lg overflow-hidden">
            <CardHeader className="px-4 py-2">
              <h4 className="font-semibold text-xl">{product.title}</h4>
              <p className="text-sm text-gray-500">{product.description}</p>
            </CardHeader>
            <CardBody className="relative">
              <Image
                alt={product.title}
                src={product.imageUrl}
                width={270}
                height={270}
                className="object-cover w-full h-64 rounded-md mb-4"
              />
              <a
                href={product.link}
                className="absolute bottom-4 left-4 bg-accent text-primary px-6 py-2 rounded-lg hover:bg-opacity-80 transition"
              >
                Shop Now
              </a>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
}
