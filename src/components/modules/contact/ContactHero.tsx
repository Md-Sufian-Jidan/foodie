"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ContactHero() {
    return (
        <section className="relative overflow-hidden py-24 mt-5">

            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FAF9F7] via-white to-[#D97757]/10 dark:from-[#0B0F17] dark:via-[#0F172A] dark:to-[#D97757]/10 bg-[url('https://images.unsplash.com/photo-1551218808-94e220e084d2')] bg-cover" />

            {/* Decorative Blur */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-[#D97757]/20 rounded-full blur-3xl opacity-30" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl opacity-30" />

            <div className="relative max-w-6xl mx-auto px-4">

                {/* Glass Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center rounded-3xl bg-white/30 dark:bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-10 md:p-16"
                >

                    {/* Heading */}
                    <h1 className="text-4xl md:text-6xl font-bold font-serif text-[#1F2933] dark:text-white leading-tight">
                        Get in <span className="text-[#D97757]">Touch</span>
                    </h1>

                    {/* Description */}
                    <p className="mt-6 text-lg md:text-xl text-[#6B7280] dark:text-gray-300 max-w-2xl mx-auto">
                        Have questions, feedback, or need support? We're here to help you.
                        Reach out to MealMate anytime and we’ll get back to you as soon as possible.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

                        <Button
                            asChild
                            className="bg-[#D97757] hover:bg-[#c96a4f] text-white px-8 py-6 rounded-full text-base transition-all hover:scale-105 shadow-md"
                        >
                            <Link href="/meals">Explore Meals</Link>
                        </Button>

                        <Button
                            asChild
                            variant="outline"
                            className="border-[#D97757] text-[#D97757] hover:bg-[#D97757] hover:text-white px-8 py-6 rounded-full text-base transition-all"
                        >
                            <Link href="/register">Become a Vendor</Link>
                        </Button>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}