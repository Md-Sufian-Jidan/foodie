"use client";

import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

const locations = [
    "Barishal",
    "Chattogram",
    "Dhaka",
    "Khulna",
    "Mymensingh",
    "Rajshahi",
    "Rangpur",
    "Sylhet",
    "Narayanganj",
];

export default function AboutServiceCoverage() {
    return (
        <section className="relative py-20 overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FAF9F7] via-white to-[#D97757]/10 dark:from-[#0B0F17] dark:via-[#0F172A] dark:to-[#D97757]/10" />

            {/* Blur Effects */}
            <div className="absolute top-10 left-10 w-72 h-72 bg-[#D97757]/20 rounded-full blur-3xl opacity-30" />
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl opacity-30" />

            <div className="relative max-w-7xl mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#1F2933] dark:text-white">
                        Service <span className="text-[#D97757]">Coverage</span>
                    </h2>
                    <p className="mt-4 text-[#6B7280] dark:text-gray-300 text-lg">
                        We are currently serving these cities with fast delivery
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">

                    {locations.map((city, index) => (
                        <motion.div
                            key={city}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                            className="h-full"
                        >
                            <Card className="h-full flex items-center gap-3 p-5 rounded-2xl border-0 bg-white/30 dark:bg-white/10 backdrop-blur-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">

                                {/* Icon */}
                                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#D97757]/10 text-[#D97757]">
                                    <MapPin className="w-5 h-5" />
                                </div>

                                {/* City Name */}
                                <span className="font-semibold text-[#1F2933] dark:text-white">
                                    {city}
                                </span>

                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}