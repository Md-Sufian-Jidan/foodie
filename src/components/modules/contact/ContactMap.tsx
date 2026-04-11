"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function ContactMap() {
    return (
        <section className="relative py-20 overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FAF9F7] via-white to-[#D97757]/10 dark:from-[#0B0F17] dark:via-[#0F172A] dark:to-[#1E293B]" />

            {/* Map Container */}
            <div className="relative max-w-7xl mx-auto px-4">

                {/* Title */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#1F2933] dark:text-white">
                        Find Us Here
                    </h2>
                    <p className="text-[#6B7280] dark:text-gray-300 mt-2">
                        Visit MealMate headquarters in Narayanganj
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 items-center">

                    {/* 🗺️ Google Map */}
                    <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-white/20 dark:border-white/10">

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902!2d90.5000!3d23.6230!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sNarayanganj!5e0!3m2!1sen!2sbd!4v0000000000"
                            width="100%"
                            height="100%"
                            loading="lazy"
                            className="absolute inset-0 w-full h-full"
                        />

                        {/* Glass overlay */}
                        <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" />
                    </div>

                    {/* 📍 Info Card */}
                    <Card className="relative p-8 rounded-3xl border-0 bg-white/30 dark:bg-white/10 backdrop-blur-xl shadow-2xl">

                        <h3 className="text-2xl font-bold font-serif text-[#1F2933] dark:text-white mb-6">
                            MealMate Headquarters
                        </h3>

                        <div className="space-y-5 text-[#6B7280] dark:text-gray-300">

                            {/* Address */}
                            <div className="flex items-start gap-3">
                                <MapPin className="text-[#D97757] w-5 h-5 mt-1" />
                                <p>
                                    Chasara Road, Narayanganj, Dhaka, Bangladesh
                                </p>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center gap-3">
                                <Phone className="text-[#D97757] w-5 h-5" />
                                <p>+880 1906 844 598</p>
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-3">
                                <Mail className="text-[#D97757] w-5 h-5" />
                                <p>support@mealmate.com</p>
                            </div>

                            {/* Extra Info */}
                            <div className="pt-4 border-t border-white/20 dark:border-white/10">
                                <p className="text-sm">
                                    🕒 Open: 9:00 AM – 10:00 PM (Daily)
                                </p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}