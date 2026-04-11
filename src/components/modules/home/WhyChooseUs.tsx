"use client";

import { Bike, Utensils, ShieldCheck, CreditCard } from "lucide-react";

const features = [
    {
        id: 1,
        title: "Fast Delivery",
        description: "Get your food delivered in record time, hot and fresh at your doorstep.",
        icon: Bike,
    },
    {
        id: 2,
        title: "Quality Food",
        description: "We ensure premium quality meals prepared by top-rated chefs.",
        icon: Utensils,
    },
    {
        id: 3,
        title: "Trusted Vendors",
        description: "All vendors are verified and trusted for safe and reliable service.",
        icon: ShieldCheck,
    },
    {
        id: 4,
        title: "Easy Payment",
        description: "Multiple secure payment options for a smooth checkout experience.",
        icon: CreditCard,
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
                        Why Choose Us
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-3">
                        We make food ordering faster, safer, and better
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {features.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.id}
                                className="group p-6 rounded-2xl backdrop-blur-xl
                bg-white/60 dark:bg-white/10 border border-white/20
                shadow-md hover:shadow-xl hover:-translate-y-2
                transition-all duration-300"
                            >
                                {/* Icon */}
                                <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full
                  bg-[#D97757]/10 text-[#D97757]
                  group-hover:scale-110 transition-transform">
                                    <Icon className="w-6 h-6" />
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-semibold text-center mt-4 text-gray-800 dark:text-white">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-center text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}