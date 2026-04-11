"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Rahim Ahmed",
        image: "/users/user1.jpg",
        rating: 5,
        text: "Amazing food quality and super fast delivery. Highly recommended!",
    },
    {
        id: 2,
        name: "Nusrat Jahan",
        image: "/users/user2.jpg",
        rating: 4,
        text: "Great variety of meals and very easy ordering process.",
    },
    {
        id: 3,
        name: "Tanvir Hasan",
        image: "/users/user3.jpg",
        rating: 5,
        text: "Best food delivery platform I’ve used so far!",
    },
    {
        id: 4,
        name: "Sadia Islam",
        image: "/users/user4.jpg",
        rating: 5,
        text: "Loved the experience. Clean UI and trusted vendors.",
    },
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);

    // Auto Slide
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">

                {/* Header */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                    What Our Customers Say
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mb-10">
                    Real feedback from our happy users
                </p>

                {/* Slider */}
                <div className="relative overflow-hidden">
                    <div
                        className="flex transition-transform duration-500"
                        style={{ transform: `translateX(-${current * 100}%)` }}
                    >
                        {testimonials.map((item) => (
                            <div
                                key={item.id}
                                className="min-w-full px-4"
                            >
                                <div className="p-8 rounded-2xl backdrop-blur-xl bg-white/60 dark:bg-white/10 border border-white/20 shadow-lg">

                                    {/* User Image */}
                                    <div className="w-20 h-20 mx-auto mb-4 relative rounded-full overflow-hidden border-2 border-[#D97757]">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Name */}
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                        {item.name}
                                    </h3>

                                    {/* Rating */}
                                    <div className="flex justify-center gap-1 my-2">
                                        {Array.from({ length: item.rating }).map((_, i) => (
                                            <Star
                                                key={i}
                                                className="w-4 h-4 text-yellow-400 fill-yellow-400"
                                            />
                                        ))}
                                    </div>

                                    {/* Text */}
                                    <p className="text-gray-600 dark:text-gray-300 mt-3 max-w-md mx-auto">
                                        “{item.text}”
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-6">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrent(index)}
                                className={`w-3 h-3 rounded-full transition-all ${current === index
                                        ? "bg-[#D97757] w-6"
                                        : "bg-gray-300 dark:bg-gray-600"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}