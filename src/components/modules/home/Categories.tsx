"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const categories = [
    { name: "Italian", icon: "🍝", slug: "italian" },
    { name: "Asian", icon: "🍜", slug: "asian" },
    { name: "Fast Food", icon: "🍔", slug: "fast-food" },
    { name: "Vegan", icon: "🥗", slug: "vegan" },
    { name: "Desserts", icon: "🍰", slug: "desserts" },
    { name: "Drinks", icon: "🥤", slug: "drinks" },
]

export default function Categories() {
    return (
        <section className="bg-[#FAF9F7] py-16">
            <div className="mx-auto max-w-7xl px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="mb-10 max-w-xl"
                >
                    <h2 className="font-heading text-3xl font-bold text-[#1F2933]">
                        Browse by Category
                    </h2>
                    <p className="mt-2 font-body text-[#6B7280]">
                        Explore meals from a variety of cuisines and dietary preferences.
                    </p>
                </motion.div>

                {/* Category Grid */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <Link href={`/meals?category=${category.slug}`}>
                                <Card className="cursor-pointer border border-transparent transition-all hover:border-[#D97757] hover:shadow-sm">
                                    <CardContent className="flex flex-col items-center justify-center py-6">
                                        <span className="text-3xl">{category.icon}</span>
                                        <span className="mt-3 font-body text-sm font-medium text-[#1F2933]">
                                            {category.name}
                                        </span>
                                    </CardContent>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
