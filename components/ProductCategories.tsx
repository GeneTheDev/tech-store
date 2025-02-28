"use client";
import { Card, CardHeader, CardFooter, Image } from "@heroui/react";
import { useState } from "react";
import { productCategories as staticCategories } from "@/data";

const ProductCategories = () => {
  const [categories] = useState(staticCategories);

  return (
    <section className="py-12 px-4 bg-primary text-white text-center">
      <div className="flex justify-center">
        <div className="max-w-[1200px] w-full px-6">
    <div className="px-6">
            <h2 className="text-120px sm:text-120px font-bebas mb-2" suppressHydrationWarning>
              Shop by Category
            </h2>
            <p className="text-lg sm:text-xl text-white mb-8">
              Browse through our curated collections of the latest and greatest products. Find the perfect items that match your style.
            </p>

            {categories.length > 0 && (
              <div className="max-w-[1200px] gap-4 grid grid-cols-12">
                {/* Top Row - 3 Columns */}
                {categories.slice(0, 3).map((category, index) => (
                  <div
                    key={index}
                    className="group col-span-12 sm:col-span-4 h-[300px]"
                    onClick={() => window.location.assign(category.link)}
                    role="button"
                    tabIndex={0}
                  >
                    <Card className="relative h-full">
                      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">
                          Featured Collection
                        </p>
                        <h4 className="text-white font-medium text-large">
                          {category.title}
                        </h4>
                      </CardHeader>
                      <Image
                        removeWrapper
                        alt={category.title}
                        src={category.imageUrl}
                        className="z-0 w-full h-full object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600">
                        <button className="text-tiny text-white bg-black/20 rounded-full px-4 py-2 w-full">
                          Shop Now
                        </button>
                      </CardFooter>
                    </Card>
                  </div>
                ))}

                {/* Bottom Row - 2 Columns */}
                {categories.slice(3, 5).map((category, index) => (
                  <div
                    key={index + 3}
                    className="group col-span-12 sm:col-span-6 h-[400px]"
                    onClick={() => window.location.assign(category.link)}
                    role="button"
                    tabIndex={0}
                  >
                    <Card className="relative h-full">
                      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">
                          New Arrivals
                        </p>
                        <h4 className="text-white font-medium text-xl">
                          {category.title}
                        </h4>
                      </CardHeader>
                      <Image
                        removeWrapper
                        alt={category.title}
                        src={category.imageUrl}
                        className="z-0 w-full h-full object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <CardFooter className="absolute bg-black/50 bottom-0 z-10 border-t-1 border-default-600">
                        <div className="flex flex-grow gap-2 items-center">
                          <div className="flex flex-col">
                            <p className="text-tiny text-white/60">Explore latest</p>
                            <p className="text-tiny text-white/60">
                              Explore our collection
                            </p>
                          </div>
                        </div>
                        <button className="text-tiny text-white bg-primary rounded-full px-4 py-2">
                          Discover
                        </button>
                      </CardFooter>
                    </Card>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default ProductCategories;