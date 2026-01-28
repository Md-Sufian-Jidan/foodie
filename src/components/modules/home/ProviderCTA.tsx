"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function ProviderCTA() {
    return (
        <section className="bg-[#D97757] py-20">
            <div className="mx-auto max-w-7xl px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
                        Join MealMate as a Provider
                    </h2>
                    <p className="mt-4 max-w-xl mx-auto font-body text-lg text-[#F5F4F2]">
                        Reach thousands of hungry customers. Manage your menu, accept orders,
                        and grow your business with MealMate.
                    </p>
                    <div className="mt-8">
                        <Button
                            asChild
                            className="bg-white text-[#D97757] px-8 py-4 font-medium hover:bg-[#F3EDE8]"
                        >
                            <Link href="/register">Get Started</Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
