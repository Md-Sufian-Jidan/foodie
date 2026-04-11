"use client";

import { Star } from "lucide-react";
import Image from "next/image";

const vendors = [
    {
        id: 1,
        name: "Pizza Palace",
        image: "/vendors/vendor1.jpg",
        rating: 4.8,
        orders: 1200,
    },
    {
        id: 2,
        name: "Burger Hub",
        image: "/vendors/vendor2.jpg",
        rating: 4.6,
        orders: 980,
    },
    {
        id: 3,
        name: "Sushi World",
        image: "/vendors/vendor3.jpg",
        rating: 4.9,
        orders: 1500,
    },
    {
        id: 4,
        name: "Healthy Bites",
        image: "/vendors/vendor4.jpg",
        rating: 4.7,
        orders: 870,
    },
    {
        id: 5,
        name: "Spicy Kitchen",
        image: "/vendors/vendor5.jpg",
        rating: 4.5,
        orders: 760,
    },
    {
        id: 6,
        name: "Dessert Corner",
        image: "/vendors/vendor6.jpg",
        rating: 4.9,
        orders: 1320,
    },
];

export default function TopVendors() {
    return (
        <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
                        Top Vendors
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-3">
                        Discover the best food providers near you
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {vendors.map((vendor) => (
                        <div
                            key={vendor.id}
                            className="group rounded-2xl p-4 backdrop-blur-xl bg-white/60 dark:bg-white/10 border border-white/20 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Image */}
                            <div className="relative w-full h-40 rounded-xl overflow-hidden mb-4">
                                <Image
                                    src={vendor.image}
                                    alt={vendor.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Info */}
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                                {vendor.name}
                            </h3>

                            {/* Rating */}
                            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 mb-1">
                                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                <span>{vendor.rating}</span>
                            </div>

                            {/* Orders */}
                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                                {vendor.orders}+ orders
                            </p>

                            {/* Button */}
                            <button className="w-full py-2 rounded-full bg-[#D97757] text-white text-sm font-semibold hover:bg-[#D97757]/90 transition-all">
                                View Menu
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}