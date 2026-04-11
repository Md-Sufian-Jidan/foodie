"use client";

import Image from "next/image";
import { Star } from "lucide-react";

const meals = [
    {
        id: 1,
        title: "Cheese Burst Pizza",
        image: "/meals/pizza.jpg",
        price: 12.99,
        rating: 4.8,
    },
    {
        id: 2,
        title: "Chicken Burger",
        image: "/meals/burger.jpg",
        price: 8.99,
        rating: 4.6,
    },
    {
        id: 3,
        title: "Grilled Sandwich",
        image: "/meals/sandwich.jpg",
        price: 6.99,
        rating: 4.5,
    },
    {
        id: 4,
        title: "Beef Steak",
        image: "/meals/steak.jpg",
        price: 18.99,
        rating: 4.9,
    },
    {
        id: 5,
        title: "Pasta Alfredo",
        image: "/meals/pasta.jpg",
        price: 10.99,
        rating: 4.7,
    },
    {
        id: 6,
        title: "Chicken Fried Rice",
        image: "/meals/rice.jpg",
        price: 7.99,
        rating: 4.6,
    },
];

function Stars({ rating }: { rating: number }) {
    return (
        <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
                <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.round(rating)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300 dark:text-gray-600"
                        }`}
                />
            ))}
        </div>
    );
}

export default function FeaturedMeals() {
    return (
        <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
                        Featured Meals
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-3">
                        Popular dishes loved by our customers
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                    {meals.map((meal) => (
                        <div
                            key={meal.id}
                            className="group flex flex-col h-full rounded-2xl overflow-hidden
              backdrop-blur-xl bg-white/60 dark:bg-white/10 border border-white/20
              shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >

                            {/* Image */}
                            <div className="relative h-44 w-full overflow-hidden">
                                <Image
                                    src={meal.image}
                                    alt={meal.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                                />

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-1 p-4">

                                {/* Title */}
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                    {meal.title}
                                </h3>

                                {/* Rating */}
                                <div className="mt-2">
                                    <Stars rating={meal.rating} />
                                </div>

                                {/* Price */}
                                <p className="mt-2 text-[#D97757] font-bold text-lg">
                                    ${meal.price}
                                </p>

                                {/* Spacer */}
                                <div className="flex-1" />

                                {/* Button */}
                                <button className="mt-4 w-full py-2 rounded-full bg-[#D97757] text-white font-medium hover:bg-[#D97757]/90 transition-all">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}