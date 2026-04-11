"use client";

import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const vendors = [
    {
        id: 1,
        name: "Spicy House",
        image: "https://images.unsplash.com/photo-1555992336-03a23c7b20ee",
        rating: 4.8,
        cuisine: "Indian Cuisine",
        description: "Authentic spicy flavors crafted with traditional recipes.",
    },
    {
        id: 2,
        name: "Burger Lab",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
        rating: 4.6,
        cuisine: "Fast Food",
        description: "Juicy burgers and crispy fries made fresh every day.",
    },
    {
        id: 3,
        name: "Sushi World",
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351",
        rating: 4.9,
        cuisine: "Japanese",
        description: "Premium sushi prepared by expert chefs.",
    },
    {
        id: 4,
        name: "Green Bowl",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
        rating: 4.7,
        cuisine: "Healthy",
        description: "Fresh salads and nutritious meals for a healthy lifestyle.",
    },
];

export default function AboutMeetVendors() {
    return (
        <section className="relative py-20 overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FAF9F7] via-white to-[#D97757]/10 dark:from-[#0B0F17] dark:via-[#0F172A] dark:to-[#D97757]/10" />

            {/* Blur decorations */}
            <div className="absolute top-10 left-10 w-72 h-72 bg-[#D97757]/20 rounded-full blur-3xl opacity-40" />
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl opacity-30" />

            <div className="relative max-w-7xl mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#1F2933] dark:text-white">
                        Meet Our <span className="text-[#D97757]">Vendors</span>
                    </h2>
                    <p className="mt-4 text-[#6B7280] dark:text-gray-300 text-lg">
                        Discover talented local kitchens delivering amazing meals
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {vendors.map((vendor, index) => (
                        <motion.div
                            key={vendor.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.04 }}
                        >
                            <Card className="h-full overflow-hidden rounded-3xl border-0 bg-white/30 dark:bg-white/10 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col">

                                {/* Image */}
                                <div className="relative h-48 w-full overflow-hidden">
                                    <Image
                                        src={vendor.image}
                                        alt={vendor.name}
                                        fill
                                        className="object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-5 flex flex-col flex-grow">

                                    {/* Name */}
                                    <h3 className="text-lg font-bold text-[#1F2933] dark:text-white">
                                        {vendor.name}
                                    </h3>

                                    {/* Rating */}
                                    <div className="flex items-center gap-1 mt-1">
                                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                        <span className="text-sm text-[#6B7280] dark:text-gray-300">
                                            {vendor.rating}
                                        </span>
                                    </div>

                                    {/* Cuisine */}
                                    <p className="text-sm text-[#D97757] font-medium mt-2">
                                        {vendor.cuisine}
                                    </p>

                                    {/* Description */}
                                    <p className="text-sm text-[#6B7280] dark:text-gray-300 mt-2 flex-grow">
                                        {vendor.description}
                                    </p>

                                    {/* Button */}
                                    <Button
                                        asChild
                                        className="mt-4 bg-[#D97757] hover:bg-[#c96545] text-white rounded-full"
                                    >
                                        <Link href={`/providers/${vendor.id}`}>
                                            View Profile
                                        </Link>
                                    </Button>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}