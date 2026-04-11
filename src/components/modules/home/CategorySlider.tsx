"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

interface Category {
    name: string;
    image?: string;
    _count?: {
        meals: number;
    };
}

export function CategorySlider({
    categories,
}: {
    categories: Category[] | undefined;
}) {
    const getCategoryImage = (categoryName: string) => {
        const images: Record<string, string> = {
            pizza: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=400&fit=crop",
            burger: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop",
            sushi: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=400&fit=crop",
            pasta: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=400&fit=crop",
            salad: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop",
            dessert: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=400&fit=crop",
            drinks: "https://images.unsplash.com/photo-1546548970-71785318a17b?w=400&h=400&fit=crop",
        };

        const name = categoryName?.toLowerCase() || "";
        return (
            images[name] ||
            "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop"
        );
    };

    return (
        <section className="relative py-20 px-4 md:px-16 bg-gradient-to-b from-[#FAF9F7] via-white to-[#FAF9F7] dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">

            {/* Header */}
            <div className="mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-800 dark:text-white">
                    Popular Categories
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                    Explore our diverse food selection
                </p>
            </div>

            {/* Carousel */}
            <div className="w-full max-w-7xl mx-auto px-6 md:px-0">

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                        slidesToScroll: 1,
                    }}
                    className="w-full"
                >

                    <CarouselContent className="-ml-2 md:-ml-4">

                        {categories?.map((category, index) => (
                            <CarouselItem
                                key={index}
                                className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
                            >
                                <div className="group cursor-pointer">

                                    {/* Glass Card */}
                                    <Card className="overflow-hidden border border-white/20 dark:border-white/10 shadow-md hover:shadow-2xl transition-all duration-300 rounded-2xl backdrop-blur-xl bg-white/60 dark:bg-white/10 hover:-translate-y-2">

                                        <CardContent className="p-0 relative aspect-square">

                                            <div className="relative w-full h-full">

                                                {/* Image */}
                                                <Image
                                                    src={category?.image || getCategoryImage(category?.name)}
                                                    alt={category?.name || "Category"}
                                                    fill
                                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                                                />

                                                {/* Overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                                                {/* Content */}
                                                <div className="absolute inset-0 flex flex-col items-center justify-end p-4 text-center">

                                                    <h3 className="text-white font-bold text-sm md:text-base drop-shadow-md group-hover:text-[#D97757] transition-colors">
                                                        {category?.name}
                                                    </h3>

                                                    <p className="text-white/80 text-xs mt-1">
                                                        {category?._count?.meals || 0} Items
                                                    </p>

                                                </div>
                                            </div>

                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}

                    </CarouselContent>

                    {/* Navigation Buttons */}
                    <div className="hidden md:block">

                        <CarouselPrevious className="backdrop-blur-xl bg-white/60 dark:bg-white/10 border border-white/20 hover:bg-[#D97757] hover:text-white transition-all -left-12 shadow-lg" />

                        <CarouselNext className="backdrop-blur-xl bg-white/60 dark:bg-white/10 border border-white/20 hover:bg-[#D97757] hover:text-white transition-all -right-12 shadow-lg" />

                    </div>

                </Carousel>
            </div>
        </section>
    );
}