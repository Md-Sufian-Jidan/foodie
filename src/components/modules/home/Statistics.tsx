"use client";

import { useEffect, useState } from "react";
import { Users, ShoppingBag, Store, Truck } from "lucide-react";

const statsData = [
    {
        id: 1,
        label: "Total Users",
        value: 12500,
        icon: Users,
    },
    {
        id: 2,
        label: "Total Orders",
        value: 84500,
        icon: ShoppingBag,
    },
    {
        id: 3,
        label: "Active Vendors",
        value: 320,
        icon: Store,
    },
    {
        id: 4,
        label: "Deliveries Completed",
        value: 76500,
        icon: Truck,
    },
];

function useCountUp(target: number, duration = 1500) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = target / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                start = target;
                clearInterval(timer);
            }
            setCount(Math.floor(start));
        }, 16);

        return () => clearInterval(timer);
    }, [target, duration]);

    return count;
}

export default function Statistics() {
    return (
        <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto text-center">

                {/* Header */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
                    Platform Statistics
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mt-3 mb-12">
                    Real-time insights of our growing community
                </p>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {statsData.map((stat) => {
                        const count = useCountUp(stat.value, 1500);
                        const Icon = stat.icon;

                        return (
                            <div
                                key={stat.id}
                                className="rounded-2xl p-6 backdrop-blur-xl bg-white/60 dark:bg-white/10 border border-white/20 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                {/* Icon */}
                                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#D97757]/10 text-[#D97757]">
                                    <Icon className="w-6 h-6" />
                                </div>

                                {/* Number */}
                                <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
                                    {count.toLocaleString()}+
                                </h3>

                                {/* Label */}
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                                    {stat.label}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}