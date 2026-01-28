"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const steps = [
    {
        title: "Browse Meals",
        description: "Explore a variety of cuisines and find your favorite dishes.",
        icon: "🍽️",
    },
    {
        title: "Place Your Order",
        description: "Add meals to your cart and checkout with ease.",
        icon: "🛒",
    },
    {
        title: "Enjoy Delivery",
        description: "Get your food delivered fresh to your doorstep.",
        icon: "🏠",
    },
]

export default function HowItWorks() {
    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-7xl px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="mb-10"
                >
                    <h2 className="font-heading text-3xl font-bold text-[#1F2933]">
                        How MealMate Works
                    </h2>
                    <p className="mt-2 font-body text-[#6B7280]">
                        Ordering your favorite meals is simple and fast. Follow these steps to get started.
                    </p>
                </motion.div>

                {/* Steps Grid */}
                <div className="grid gap-6 sm:grid-cols-3">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                        >
                            <Card className="border border-[#E5E7EB] py-6 px-4 text-center">
                                <CardContent>
                                    <div className="text-4xl text-[#D97757]">{step.icon}</div>
                                    <h3 className="mt-4 font-heading text-lg text-[#1F2933]">
                                        {step.title}
                                    </h3>
                                    <p className="mt-2 font-body text-sm text-[#6B7280]">
                                        {step.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
