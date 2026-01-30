"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface StatCardProps {
    title: string;
    value: string;
}

export default function StatCard({ title, value }: StatCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
            }}
            className="group"
        >
            <Card className="overflow-hidden border-none shadow-sm bg-white dark:bg-[#1C1A18] relative">
                {/* Decorative accent that glows on hover */}
                <div className="absolute top-0 left-0 w-1 h-full bg-[#D97757] opacity-0 group-hover:opacity-100 transition-opacity" />

                <CardContent className="p-6">
                    <p className="font-jakarta text-xs font-semibold uppercase tracking-widest text-[#6B7280] dark:text-[#B3B3B0]">
                        {title}
                    </p>

                    <div className="mt-2 flex items-baseline gap-2">
                        <motion.p
                            initial={{ scale: 0.5 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 100 }}
                            className="text-4xl font-bold text-[#1F2933] dark:text-[#F5F4F2]"
                        >
                            {value}
                        </motion.p>

                        {/* Subtle indicator for a "food/meal" vibe */}
                        <span className="text-[#6B8E7D] text-sm font-medium">
                            +12%
                        </span>
                    </div>

                    {/* Background decorative shape */}
                    <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-[#FAF9F7] dark:bg-[#121110] rounded-full z-0 opacity-50 group-hover:scale-110 transition-transform" />
                </CardContent>
            </Card>
        </motion.div>
    );
}