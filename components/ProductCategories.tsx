"use client";

import { Card, CardBody, Image } from "@heroui/react";
import { productCategories } from "@/data";

const ProductCategories = () => {
  return (
    <section className="py-12 px-4 bg-primary text-white text-center">
      <div className="px-6">
        {/* Section Title */}
        <h2 className="text-5xl font-bebas mb-10">Shop by Category</h2>

        {/* Benito Grid Layout */}
        <div className="grid grid-cols-6 grid-rows-6 gap-6 h-[800px]">
          {productCategories.map((category, index) => {
            const gridStyles = [
              "col-span-3 row-span-3", // Large item
              "col-span-2 row-span-2", // Medium item
              "col-span-1 row-span-1", // Small item
            ];
            return (
              <a key={index} href={category.link} className={`group ${gridStyles[index % gridStyles.length]}`}>
                <Card className="relative bg-secondary text-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
                  <CardBody className="relative flex items-center justify-center h-full w-full">
                    <div className="relative w-full h-full">
                      <Image
                        alt={category.title}
                        src={category.imageUrl}
                        className="object-cover"
                      />
                    </div>
                  </CardBody>
                </Card>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
