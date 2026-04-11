"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Store, Utensils, ShoppingCart, Truck } from "lucide-react";

const steps = [
    {
        title: "Browse Vendors",
        description: "Explore trusted local food vendors near you.",
        icon: Store,
    },
    {
        title: "Select Meals",
        description: "Choose from a wide variety of delicious meals.",
        icon: Utensils,
    },
    {
        title: "Place Order",
        description: "Add your favorites to cart and checkout easily.",
        icon: ShoppingCart,
    },
    {
        title: "Enjoy Delivery",
        description: "Get fresh food delivered straight to your door.",
        icon: Truck,
    },
];

export default function AboutHowItWorks() {
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
                        How <span className="text-[#D97757]">MealMate Works</span>
                    </h2>
                    <p className="mt-4 text-[#6B7280] dark:text-gray-300 text-lg">
                        Ordering delicious food is simple, fast, and seamless
                    </p>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                    {steps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="relative"
                            >
                                <Card className="h-full p-6 rounded-3xl border-0 bg-white/30 dark:bg-white/10 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center">

                                    {/* Icon */}
                                    <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-2xl bg-[#D97757]/10">
                                        <Icon className="w-7 h-7 text-[#D97757]" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-[#1F2933] dark:text-white">
                                        {step.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="mt-3 text-sm text-[#6B7280] dark:text-gray-300 leading-relaxed">
                                        {step.description}
                                    </p>

                                    {/* Step Number Badge */}
                                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#D97757]/10 text-[#D97757] text-sm font-bold flex items-center justify-center">
                                        {index + 1}
                                    </div>

                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}