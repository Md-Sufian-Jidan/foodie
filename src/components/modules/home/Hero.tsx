"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Hero() {
    return (
        <section className="bg-[#FAF9F7]">
            <div className="mx-auto max-w-7xl px-4 py-20">
                <div className="max-w-3xl">
                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="font-heading text-4xl font-bold leading-tight text-[#1F2933] sm:text-5xl"
                    >
                        Discover & Order
                        <br />
                        Delicious Meals Near You
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="mt-6 max-w-xl font-body text-lg text-[#6B7280]"
                    >
                        MealMate connects you with trusted local providers. Browse menus,
                        place orders, and enjoy fresh meals delivered straight to your door.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="mt-8 flex flex-wrap gap-4"
                    >
                        <Button
                            asChild
                            className="bg-[#D97757] px-6 py-6 text-base hover:bg-[#c96a4f]"
                        >
                            <Link href="/meals">Browse Meals</Link>
                        </Button>

                        <Button
                            asChild
                            variant="outline"
                            className="border-[#6B8E7D] px-6 py-6 text-base text-[#6B8E7D] hover:bg-[#6B8E7D] hover:text-white"
                        >
                            <Link href="/register">Become a Provider</Link>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
