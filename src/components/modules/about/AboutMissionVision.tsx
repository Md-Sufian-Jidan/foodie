"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Truck, Target } from "lucide-react";

export default function AboutMissionVision() {
    return (
        <section className="relative py-20 overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FAF9F7] via-white to-[#D97757]/10 dark:from-[#0B0F17] dark:via-[#0F172A] dark:to-[#D97757]/10" />

            {/* Blur decorations */}
            <div className="absolute top-10 left-10 w-72 h-72 bg-[#D97757]/20 rounded-full blur-3xl opacity-40" />
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl opacity-30" />

            <div className="relative max-w-7xl mx-auto px-4">

                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#1F2933] dark:text-white">
                        Our <span className="text-[#D97757]">Mission & Vision</span>
                    </h2>
                    <p className="mt-4 text-[#6B7280] dark:text-gray-300 text-lg">
                        Driving impact through fresh food delivery and innovation
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* Mission Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.03 }}
                    >
                        <Card className="p-10 rounded-3xl border-0 bg-white/30 dark:bg-white/10 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300">

                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#D97757]/10">
                                    <Truck className="w-7 h-7 text-[#D97757]" />
                                </div>

                                <h3 className="text-2xl font-bold text-[#1F2933] dark:text-white">
                                    Our Mission
                                </h3>
                            </div>

                            <p className="text-[#6B7280] dark:text-gray-300 leading-relaxed text-lg">
                                To deliver fresh, delicious meals from trusted local vendors to customers
                                quickly and reliably. We aim to make food ordering simple, fast, and accessible
                                for everyone while supporting local food businesses.
                            </p>
                        </Card>
                    </motion.div>

                    {/* Vision Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        whileHover={{ scale: 1.03 }}
                    >
                        <Card className="p-10 rounded-3xl border-0 bg-white/30 dark:bg-white/10 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300">

                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#D97757]/10">
                                    <Target className="w-7 h-7 text-[#D97757]" />
                                </div>

                                <h3 className="text-2xl font-bold text-[#1F2933] dark:text-white">
                                    Our Vision
                                </h3>
                            </div>

                            <p className="text-[#6B7280] dark:text-gray-300 leading-relaxed text-lg">
                                To become the leading multi-vendor food platform, connecting millions of
                                customers with local kitchens worldwide. We envision a future where every
                                meal tells a story and every vendor thrives digitally.
                            </p>
                        </Card>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}