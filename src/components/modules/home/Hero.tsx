"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import hero from "../../../../public/hero.jpg";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF9F7] to-white dark:from-gray-950 dark:to-gray-900 mt-5">

            {/* Background Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#D97757]/10 blur-3xl rounded-full" />
                <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-orange-200/10 blur-3xl rounded-full" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 py-16 lg:py-20">

                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

                    {/* LEFT CONTENT */}
                    <div className="order-2 lg:order-1">

                        {/* Glass Container */}
                        <div className="backdrop-blur-xl bg-white/60 dark:bg-white/10 border border-white/20 shadow-xl rounded-3xl p-8 lg:p-10">

                            {/* Title */}
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-800 dark:text-white"
                            >
                                Discover & Order
                                <br />
                                <span className="text-[#D97757]">Delicious Meals</span> Near You
                            </motion.h1>

                            {/* Subtitle */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="mt-6 text-gray-500 dark:text-gray-300 text-lg max-w-xl"
                            >
                                MealMate connects you with trusted local vendors. Browse meals,
                                place orders, and enjoy fresh food delivered fast.
                            </motion.p>

                            {/* Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="mt-8 flex flex-wrap gap-4"
                            >
                                <Button
                                    asChild
                                    className="bg-[#D97757] hover:bg-[#c96a4f] text-white px-8 py-6 rounded-full shadow-lg hover:scale-105 transition-all"
                                >
                                    <Link href="/meals">Browse Meals</Link>
                                </Button>

                                <Button
                                    asChild
                                    variant="outline"
                                    className="border-[#D97757] text-[#D97757] hover:bg-[#D97757] hover:text-white px-8 py-6 rounded-full transition-all"
                                >
                                    <Link href="/register">Become a Provider</Link>
                                </Button>
                            </motion.div>

                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="order-1 lg:order-2 relative h-[350px] sm:h-[450px] lg:h-[550px]"
                    >
                        <div className="relative h-full w-full rounded-3xl overflow-hidden border border-white/20 backdrop-blur-xl shadow-2xl">

                            <Image
                                src={hero}
                                alt="Delicious food"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                                priority
                            />

                            {/* Glass overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>

                        {/* Floating Glass Badge */}
                        <div className="absolute bottom-6 left-6 backdrop-blur-xl bg-white/60 dark:bg-white/10 border border-white/20 px-4 py-2 rounded-full shadow-lg text-sm text-gray-700 dark:text-white">
                            🍽️ Fresh Meals Daily
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}