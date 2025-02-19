"use client";

import { Card, CardHeader, CardBody, Image } from "@heroui/react";
import { bestSellers } from "@/data"; // Assuming you have a `bestSellers` data file

const BestSellers = () => {
  return (
    <section className="bg-secondary text-white py-16">
      <div className="container mx-auto px-6 text-center">
        {/* Best Sellers Title with Bebas Font */}
        <h2 className="text-3xl sm:text-4xl font-bebas mb-8">🔥 Best-Sellers</h2>
        
        {/* Best Sellers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product, index) => (
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
      </div>
    </section>
  );
};

export default BestSellers;
