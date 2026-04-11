"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function AboutCallToAction() {
    return (
        <section className="relative py-24 overflow-hidden">

            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-l from-[#FAF9F7] via-white to-[#D97757]/10 dark:from-[#0B0F17] dark:via-[#0F172A] dark:to-[#D97757]/10" />

            {/* Blur Effects */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-white/20 rounded-full blur-3xl opacity-30" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-black/20 rounded-full blur-3xl opacity-30" />

            <div className="relative max-w-5xl mx-auto px-4">

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="rounded-3xl bg-white/20 dark:bg-white/10 backdrop-blur-xl border border-white/30 shadow-2xl p-10 md:p-16 text-center"
                >

                    {/* Heading */}
                    <h2 className="text-3xl md:text-5xl font-bold font-serif text-black dark:text-white leading-tight">
                        Ready to Enjoy Delicious Meals?
                    </h2>

                    {/* Subtext */}
                    <p className="mt-4 text-black/90 dark:text-white/90 text-lg max-w-2xl mx-auto">
                        Order your favorite food now or join MealMate as a vendor and grow your business with us.
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

                        {/* Order Button */}
                        <Button
                            asChild
                            className="bg-white text-[#D97757] hover:bg-gray-100 px-8 py-6 rounded-full text-base font-semibold transition-all hover:scale-105 shadow-lg"
                        >
                            <Link href="/meals">Order Now</Link>
                        </Button>

                        {/* Vendor Button */}
                        <Button
                            asChild
                            variant="outline"
                            className="border-[#D97757] text-black dark:text-white dark:border-[#D97757] hover:bg-white hover:text-[#D97757] px-8 py-6 rounded-full text-base font-semibold transition-all hover:scale-105"
                        >
                            <Link href="/become-provider?role=PROVIDER">Become a Vendor</Link>
                        </Button>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}