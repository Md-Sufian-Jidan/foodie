"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
    {
        id: 1,
        name: "Rahim Ahmed",
        image: "/users/user1.jpg",
        rating: 5,
        text: "MealMate completely changed how I order food. Fast delivery and amazing vendors!",
    },
    {
        id: 2,
        name: "Nusrat Jahan",
        image: "/users/user2.jpg",
        rating: 4,
        text: "Very smooth experience. I love the variety of meals available here.",
    },
    {
        id: 3,
        name: "Tanvir Hasan",
        image: "/users/user3.jpg",
        rating: 5,
        text: "The quality is top-notch. Every order feels fresh and delicious.",
    },
    {
        id: 4,
        name: "Sadia Islam",
        image: "/users/user4.jpg",
        rating: 5,
        text: "Trusted vendors and super easy ordering. Highly recommended!",
    },
];

export default function AboutCustomerTrust() {
    return (
        <section className="relative py-20 overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FAF9F7] via-white to-[#D97757]/10 dark:from-[#0B0F17] dark:via-[#0F172A] dark:to-[#D97757]/10" />

            {/* Decorative blur */}
            <div className="absolute top-10 left-10 w-72 h-72 bg-[#D97757]/20 rounded-full blur-3xl opacity-40" />
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl opacity-30" />

            <div className="relative max-w-7xl mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#1F2933] dark:text-white">
                        Customer <span className="text-[#D97757]">Trust</span>
                    </h2>
                    <p className="mt-4 text-[#6B7280] dark:text-gray-300 text-lg">
                        Real feedback from our happy users
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {testimonials.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.04 }}
                        >
                            <Card className="h-full p-6 rounded-3xl border-0 bg-white/30 dark:bg-white/10 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center flex flex-col">

                                {/* User Image */}
                                <div className="relative w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden border-2 border-[#D97757]">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Name */}
                                <h3 className="text-lg font-bold text-[#1F2933] dark:text-white">
                                    {item.name}
                                </h3>

                                {/* Rating */}
                                <div className="flex justify-center gap-1 mt-2">
                                    {Array.from({ length: item.rating }).map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-4 h-4 text-yellow-400 fill-yellow-400"
                                        />
                                    ))}
                                </div>

                                {/* Feedback */}
                                <p className="text-sm text-[#6B7280] dark:text-gray-300 mt-4 flex-grow leading-relaxed">
                                    “{item.text}”
                                </p>

                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}