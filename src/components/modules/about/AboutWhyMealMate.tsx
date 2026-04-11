"use client";

import { Card } from "@/components/ui/card";
import {
    Truck,
    ShieldCheck,
    CreditCard,
    MapPin,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        icon: Truck,
        title: "Fast Delivery",
        description: "Get your meals delivered quickly and fresh to your doorstep.",
    },
    {
        icon: ShieldCheck,
        title: "Trusted Vendors",
        description: "All vendors are verified to ensure quality and hygiene.",
    },
    {
        icon: CreditCard,
        title: "Secure Payment",
        description: "Multiple payment options with full security protection.",
    },
    {
        icon: MapPin,
        title: "Real-Time Tracking",
        description: "Track your order live from kitchen to your door.",
    },
];

export default function AboutWhyMealMate() {
    return (
        <section className="relative py-20 overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FAF9F7] via-white to-[#D97757]/10 dark:from-[#0B0F17] dark:via-[#0F172A] dark:to-[#D97757]/10" />

            {/* Glow effects */}
            <div className="absolute top-10 left-10 w-72 h-72 bg-[#D97757]/20 rounded-full blur-3xl opacity-30" />
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl opacity-30" />

            <div className="relative max-w-7xl mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#1F2933] dark:text-white">
                        Why <span className="text-[#D97757]">MealMate?</span>
                    </h2>
                    <p className="mt-4 text-[#6B7280] dark:text-gray-300 text-lg">
                        Experience the best food delivery platform built for convenience and trust
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="h-full"
                        >
                            <Card className="h-full p-6 rounded-3xl border-0 bg-white/30 dark:bg-white/10 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center">

                                {/* Icon */}
                                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#D97757]/10 text-[#D97757] mb-4 group-hover:bg-[#D97757] group-hover:text-white transition">
                                    <feature.icon className="w-6 h-6" />
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-bold text-[#1F2933] dark:text-white">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-[#6B7280] dark:text-gray-300 mt-2 leading-relaxed">
                                    {feature.description}
                                </p>

                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}