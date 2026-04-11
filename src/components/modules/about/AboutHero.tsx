"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UtensilsCrossed } from "lucide-react";

export default function AboutHero() {
    return (
        <section className="relative overflow-hidden">

            {/* Background Gradient + Blur */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FAF9F7] via-white to-[#D97757]/10 dark:from-[#0B0F17] dark:via-[#0F172A] dark:to-[#D97757]/10" />

            {/* Floating Blur Shapes */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#D97757]/20 rounded-full blur-3xl opacity-40 animate-pulse" />
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl opacity-30 animate-pulse" />

            <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32">

                <div className="text-center max-w-3xl mx-auto">

                    {/* Icon */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        className="flex justify-center mb-6"
                    >
                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-white/30 dark:bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg">
                            <UtensilsCrossed className="w-8 h-8 text-[#D97757]" />
                        </div>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-6xl font-bold font-serif text-[#1F2933] dark:text-white leading-tight"
                    >
                        About <span className="text-[#D97757]">MealMate</span>
                    </motion.h1>

                    {/* Tagline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mt-6 text-lg md:text-xl text-[#6B7280] dark:text-gray-300"
                    >
                        Connecting hungry people with trusted local vendors — delivering fresh meals, fast and easy.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Button
                            asChild
                            className="bg-[#D97757] hover:bg-[#c96545] text-white px-8 py-6 rounded-full text-base shadow-lg hover:scale-105 transition-transform"
                        >
                            <Link href="/meals">Explore Meals</Link>
                        </Button>

                        <Button
                            asChild
                            variant="outline"
                            className="border-[#D97757] text-[#D97757] dark:text-white dark:border-white/30 px-8 py-6 rounded-full text-base hover:bg-[#D97757] hover:text-white transition-all"
                        >
                            <Link href="/providers">Meet Vendors</Link>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}