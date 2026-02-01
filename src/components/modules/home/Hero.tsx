"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import hero from "../../../../public/hero.jpg";

export default function Hero() {
    return (
        <section className="bg-[#FAF9F7] overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 py-12 lg:py-20">
                {/* Main Grid Container */}
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

                    {/* Left Side: Content */}
                    <div className="relative z-10 order-2 lg:order-1">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="font-serif text-4xl font-bold leading-tight text-[#1F2933] sm:text-5xl lg:text-6xl"
                        >
                            Discover & Order
                            <br />
                            <span className="text-[#D97757]">Delicious Meals</span> Near You
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                            className="mt-6 max-w-xl font-jakarta text-lg text-[#6B7280]"
                        >
                            MealMate connects you with trusted local providers. Browse menus,
                            place orders, and enjoy fresh meals delivered straight to your door.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="mt-10 flex flex-wrap gap-4"
                        >
                            <Button
                                asChild
                                className="bg-[#D97757] px-8 py-7 text-base hover:bg-[#c96a4f] rounded-full transition-all hover:scale-105"
                            >
                                <Link href="/meals">Browse Meals</Link>
                            </Button>

                            <Button
                                asChild
                                variant="outline"
                                className="border-[#D97757] text-[#D97757] px-8 py-7 text-base hover:bg-[#D97757] hover:text-white rounded-full transition-all"
                            >
                                <Link href="/register">Become a Provider</Link>
                            </Button>
                        </motion.div>
                    </div>

                    {/* Right Side: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="relative order-1 lg:order-2 h-[350px] sm:h-[450px] lg:h-[550px] w-full"
                    >
                        <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-2xl">
                            <Image
                                src={hero}
                                fill
                                alt="Delicious home cooked meal"
                                className="object-cover"
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>

                        {/* Subtle decorative element */}
                        <div className="absolute -bottom-6 -left-6 -z-10 h-64 w-64 rounded-full bg-[#D97757]/10 blur-3xl" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}