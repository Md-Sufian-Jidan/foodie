"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { UtensilsCrossed, ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center bg-[#FAF9F7] dark:bg-[#121110] px-4 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="space-y-6"
            >
                {/* Icon with a subtle "wobble" animation */}
                <motion.div
                    animate={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#D97757]/10 dark:bg-[#E08B6B]/10 text-[#D97757] dark:text-[#E08B6B] mb-4"
                >
                    <UtensilsCrossed size={48} />
                </motion.div>

                <div className="space-y-2">
                    <h1 className="font-serif text-6xl font-bold text-[#1F2933] dark:text-[#F5F4F2]">
                        404
                    </h1>
                    <h2 className="font-serif text-2xl font-semibold text-[#1F2933] dark:text-[#F5F4F2]">
                        This plate is empty!
                    </h2>
                    <p className="font-jakarta text-[#6B7280] dark:text-[#B3B3B0] max-w-md mx-auto">
                        We couldn’t find the page you’re looking for. It might have been moved,
                        deleted, or perhaps it was never on the menu to begin with.
                    </p>
                </div>

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="pt-4"
                >
                    <Button
                        asChild
                        className="bg-[#D97757] hover:bg-[#D97757]/90 dark:bg-[#E08B6B] dark:hover:bg-[#E08B6B]/90 text-white px-8 py-6 h-auto text-lg rounded-full transition-all shadow-md hover:shadow-lg"
                    >
                        <Link href="/" className="flex items-center gap-2">
                            <ArrowLeft size={20} />
                            Back to the Kitchen
                        </Link>
                    </Button>
                </motion.div>
            </motion.div>

            {/* Decorative background element */}
            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-[#D97757]/5 to-transparent pointer-events-none" />
        </div>
    );
}