"use client";

import { MapPin } from "lucide-react";

const locations = [
    { id: 1, name: "Barishal", region: "Central" },
    { id: 2, name: "Chattogram", region: "Central" },
    { id: 3, name: "Dhaka", region: "Metro" },
    { id: 4, name: "Khulna", region: "South-West" },
    { id: 5, name: "Mymensingh", region: "Coastal" },
    { id: 6, name: "Rajshahi", region: "North" },
    { id: 7, name: "Rangpur", region: "North-East" },
    { id: 8, name: "Sylhet", region: "North-East" },
];

export default function ServiceAreas() {
    return (
        <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
                        Service Areas
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-3">
                        We are delivering food across multiple cities
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {locations.map((loc) => (
                        <div
                            key={loc.id}
                            className="group flex items-center gap-4 p-5 rounded-2xl
              backdrop-blur-xl bg-white/60 dark:bg-white/10
              border border-white/20 shadow-md
              hover:shadow-xl hover:-translate-y-1
              transition-all duration-300"
                        >

                            {/* Icon */}
                            <div className="w-12 h-12 flex items-center justify-center rounded-full
                bg-[#D97757]/10 text-[#D97757]
                group-hover:scale-110 transition-transform">
                                <MapPin className="w-5 h-5" />
                            </div>

                            {/* Text */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                    {loc.name}
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {loc.region} Zone
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}