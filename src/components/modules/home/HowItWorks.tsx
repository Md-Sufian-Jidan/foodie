"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
    {
        title: "Browse Meals",
        description: "Explore a variety of cuisines and find your favorite dishes.",
        icon: "🍽️",
    },
    {
        title: "Place Your Order",
        description: "Add meals to your cart and checkout with ease.",
        icon: "🛒",
    },
    {
        title: "Enjoy Delivery",
        description: "Get your food delivered fresh to your doorstep.",
        icon: "🏠",
    },
];

export default function HowItWorks() {
    return (
        <section className="relative py-20 bg-gradient-to-b from-[#FAF9F7] to-white dark:from-gray-950 dark:to-gray-900">

            {/* Background Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#D97757]/10 blur-3xl rounded-full" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-200/10 blur-3xl rounded-full" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-14"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-800 dark:text-white">
                        How MealMate Works
                    </h2>

                    <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                        Ordering your favorite meals is simple and fast. Follow these steps to get started.
                    </p>
                </motion.div>

                {/* Steps Grid */}
                <div className="grid gap-6 sm:grid-cols-3">

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >

                            <Card className="h-full flex flex-col group overflow-hidden rounded-2xl border border-white/20 dark:border-white/10 backdrop-blur-xl bg-white/60 dark:bg-white/10 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center">

                                <CardContent className="p-8 flex flex-col flex-1">

                                    {/* Icon */}
                                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                        {step.icon}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-bold text-gray-800 dark:text-white group-hover:text-[#D97757] transition-colors">
                                        {step.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 flex-1">
                                        {step.description}
                                    </p>

                                </CardContent>
                            </Card>

                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}