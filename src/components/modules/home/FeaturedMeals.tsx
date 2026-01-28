"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

const featuredMeals = [
    {
        id: "1",
        name: "Margherita Pizza",
        provider: "Luigi’s Italian",
        price: 12.99,
        image: "/images/meals/pizza.jpg",
    },
    {
        id: "2",
        name: "Sushi Platter",
        provider: "Sakura Sushi",
        price: 24.5,
        image: "/images/meals/sushi.jpg",
    },
    {
        id: "3",
        name: "Vegan Buddha Bowl",
        provider: "Green Eats",
        price: 14.0,
        image: "/images/meals/buddha-bowl.jpg",
    },
    {
        id: "4",
        name: "Chocolate Cake",
        provider: "Sweet Tooth",
        price: 6.5,
        image: "/images/meals/cake.jpg",
    },
]

export default function FeaturedMeals() {
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
                        Featured Meals
                    </h2>
                    <p className="mt-2 font-body text-[#6B7280]">
                        Hand-picked meals our customers love. Order now and enjoy fresh flavors!
                    </p>
                </motion.div>

                {/* Meals Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {featuredMeals.map((meal, index) => (
                        <motion.div
                            key={meal.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="overflow-hidden">
                                <div className="relative h-48 w-full">
                                    <img
                                        src={meal.image}
                                        alt={meal.name}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <CardContent className="pt-4">
                                    <h3 className="font-heading text-lg text-[#1F2933]">
                                        {meal.name}
                                    </h3>
                                    <p className="mt-1 font-body text-sm text-[#6B7280]">
                                        {meal.provider}
                                    </p>
                                    <p className="mt-2 font-body font-semibold text-[#D97757]">
                                        ${meal.price.toFixed(2)}
                                    </p>
                                </CardContent>
                                <CardFooter className="pt-2">
                                    <Button
                                        asChild
                                        className="w-full bg-[#D97757] hover:bg-[#c96a4f]"
                                    >
                                        <Link href={`/meals/${meal.id}`}>Add to Cart</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
