"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function AboutOurStory() {
    return (
        <section className="relative py-20 md:py-28 overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FAF9F7] via-white to-[#D97757]/10 dark:from-[#0B0F17] dark:via-[#0F172A] dark:to-[#D97757]/10" />

            {/* Decorative blur */}
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#D97757]/20 rounded-full blur-3xl opacity-40" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl opacity-30" />

            <div className="relative max-w-7xl mx-auto px-4">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT: IMAGE SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <Card className="overflow-hidden border-0 shadow-2xl bg-white/30 dark:bg-white/5 backdrop-blur-xl rounded-3xl">
                            <div className="relative h-[320px] md:h-[450px] w-full">
                                <Image
                                    src="https://images.unsplash.com/photo-1551218808-94e220e084d2"
                                    alt="MealMate Story"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </Card>

                        {/* Floating badge */}
                        <div className="absolute -bottom-6 -right-6 bg-white/40 dark:bg-white/10 backdrop-blur-xl border border-white/20 px-5 py-3 rounded-2xl shadow-lg">
                            <p className="text-sm font-semibold text-[#D97757]">
                                Since 2025 🍽️
                            </p>
                        </div>
                    </motion.div>

                    {/* RIGHT: CONTENT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#1F2933] dark:text-white leading-tight">
                            Our <span className="text-[#D97757]">Story</span>
                        </h2>

                        <p className="mt-6 text-[#6B7280] dark:text-gray-300 text-lg leading-relaxed">
                            MealMate started with a simple idea — to connect people with
                            <span className="text-[#D97757] font-semibold"> local food vendors</span> who cook with passion and authenticity.
                            We saw talented home chefs and small restaurants struggling to reach customers in a digital world.
                        </p>

                        <p className="mt-4 text-[#6B7280] dark:text-gray-300 text-lg leading-relaxed">
                            Our mission is to empower these vendors by giving them a platform where they can
                            showcase their meals, grow their business, and deliver happiness directly to customers’ doors.
                        </p>

                        <p className="mt-4 text-[#6B7280] dark:text-gray-300 text-lg leading-relaxed">
                            Looking ahead, our vision is to become the most trusted multi-vendor food ecosystem —
                            where every meal tells a story, and every order supports a dream.
                        </p>

                        {/* Highlights */}
                        <div className="mt-8 grid grid-cols-2 gap-4">
                            <div className="p-4 rounded-2xl bg-white/40 dark:bg-white/10 backdrop-blur-xl border border-white/20 shadow-md">
                                <p className="text-2xl font-bold text-[#D97757]">100+</p>
                                <p className="text-sm text-[#6B7280] dark:text-gray-300">Local Vendors</p>
                            </div>

                            <div className="p-4 rounded-2xl bg-white/40 dark:bg-white/10 backdrop-blur-xl border border-white/20 shadow-md">
                                <p className="text-2xl font-bold text-[#D97757]">10K+</p>
                                <p className="text-sm text-[#6B7280] dark:text-gray-300">Happy Customers</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}