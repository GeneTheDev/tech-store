"use client";

import { Card, CardHeader, CardFooter, Image, Button } from "@heroui/react";
import { bestSellers } from "@/data"; // Your bestSellers data array

const BestSellers = () => {
  return (
    <section className="py-12 px-4 bg-secondary text-white text-center">
      {/* Section Header */}
      <h2 className="text-120px sm:text-120px font-bebas mb-8">🔥 Best-Sellers</h2>
      
      {/* Centered Grid */}
      <div className="flex justify-center">
        <div className="inline-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {bestSellers.map((product, index) => (
            <Card
              key={index}
              isFooterBlurred
              className="relative w-[380px] h-[500px]"
            >
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                {product.category && (
                  <p className="text-tiny text-white/60 uppercase font-bold">
                    {product.category}
                  </p>
                )}
                <h4 className="text-white font-medium text-large">
                  {product.title}
                </h4>
              </CardHeader>
              <Image
                removeWrapper
                alt={product.title}
                src={product.imageUrl}
                className="z-0 w-full h-full object-cover"
              />
              <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t border-default-600 dark:border-default-100 flex justify-between items-center px-4 py-2">
                <p className="text-white text-tiny">{product.description}</p>
                <Button radius="full" size="sm" as="a" href={product.link}>
                  Shop Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
