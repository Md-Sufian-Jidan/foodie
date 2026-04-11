"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function Newsletter() {
    const [email, setEmail] = useState("");

    const handleSubscribe = () => {
        if (!email) return;
        alert(`Subscribed with: ${email}`);
        setEmail("");
    };

    return (
        <section className="py-24 px-4 bg-gradient-to-r from-orange-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">

            <div className="max-w-3xl mx-auto text-center">

                {/* Glass Container */}
                <div className="backdrop-blur-xl bg-white/60 dark:bg-white/10 border border-white/20 shadow-xl rounded-3xl p-10">

                    {/* Icon */}
                    <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-[#D97757]/10 text-[#D97757] mb-5">
                        <Mail className="w-6 h-6" />
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
                        Join Our Newsletter
                    </h2>

                    {/* Description */}
                    <p className="text-gray-500 dark:text-gray-400 mt-3 mb-8">
                        Get the latest deals, food updates, and exclusive offers directly in your inbox.
                    </p>

                    {/* Input + Button */}
                    <div className="flex flex-col sm:flex-row items-center gap-3">

                        <Input
                            type="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="h-12 rounded-full bg-white/80 dark:bg-white/10 border-white/30 focus-visible:ring-[#D97757]"
                        />

                        <Button
                            onClick={handleSubscribe}
                            className="h-12 px-8 rounded-full bg-[#D97757] hover:bg-[#D97757]/90 text-white shadow-md transition-all"
                        >
                            Subscribe
                        </Button>

                    </div>

                    {/* Footer note */}
                    <p className="text-xs text-gray-400 mt-5">
                        No spam. Unsubscribe anytime.
                    </p>

                </div>
            </div>
        </section>
    );
}