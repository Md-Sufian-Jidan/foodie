"use client";

import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

const contactInfo = [
    {
        icon: MapPin,
        title: "Address",
        details: "Chasara Road, Narayanganj, Dhaka, Bangladesh",
    },
    {
        icon: Phone,
        title: "Phone",
        details: "+880 1906 844 598",
    },
    {
        icon: Mail,
        title: "Email",
        details: "support@mealmate.com",
    },
    {
        icon: Clock,
        title: "Support Hours",
        details: "9:00 AM - 10:00 PM (Everyday)",
    },
];

export default function ContactInfo() {
    return (
        <section className="relative py-20 overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FAF9F7] via-white to-[#D97757]/10 dark:from-[#0B0F17] dark:via-[#0F172A] dark:to-[#D97757]/10" />

            {/* Blur Effects */}
            <div className="absolute top-10 left-10 w-72 h-72 bg-[#D97757]/20 rounded-full blur-3xl opacity-30" />
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl opacity-30" />

            <div className="relative max-w-7xl mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#1F2933] dark:text-white">
                        Contact <span className="text-[#D97757]">Information</span>
                    </h2>
                    <p className="mt-4 text-[#6B7280] dark:text-gray-300">
                        Reach out to us through any of the following ways
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {contactInfo.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="h-full"
                        >
                            <Card className="h-full p-6 rounded-3xl border-0 bg-white/30 dark:bg-white/10 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center">

                                {/* Icon */}
                                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#D97757]/10 text-[#D97757] mb-4 transition-all duration-300 group-hover:bg-[#D97757] group-hover:text-white">
                                    <item.icon className="w-6 h-6" />
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-bold text-[#1F2933] dark:text-white">
                                    {item.title}
                                </h3>

                                {/* Details */}
                                <p className="text-sm text-[#6B7280] dark:text-gray-300 mt-2 leading-relaxed">
                                    {item.details}
                                </p>

                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}