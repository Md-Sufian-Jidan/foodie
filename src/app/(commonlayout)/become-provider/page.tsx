"use client";

import { RegisterForm } from "@/components/modules/authentication/RegisterForm";
import { motion } from "framer-motion";
import { UtensilsCrossed, ShieldCheck, Zap } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Become a Provider | MealMate - Fresh Multi-Vendor Food Delivery Platform",
    description:
        "Join MealMate as a vendor and reach thousands of customers. Easy menu management, secure payments, and instant growth for your food business.",
    keywords: [
        "become a vendor",
        "food vendor registration",
        "sell food online",
        "restaurant partner",
        "mealmate vendor",
    ],
    authors: [{
        name: "Md Abu Sufian Jidan",
        url: "https://mdabusufianjidan.vercel.app"
    }],
    openGraph: {
        title: "Become a Provider | MealMate - Fresh Food Delivered Fast",
        description:
            "Join MealMate as a vendor and reach thousands of customers with easy menu management and secure payments.",
        url: "https://mealmate-lemon.vercel.app/become-provider",
        siteName: "MealMate",
        type: "website",
        images: [
            {
                url: "https://i.ibb.co/99pqNzY5/mealmate.png",
                width: 1200,
                height: 630,
                alt: "MealMate Vendor Registration",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Become a Provider | MealMate - Food Delivery Platform",
        description:
            "Join MealMate as a vendor and reach thousands of customers with easy menu management and secure payments.",
        images: ["https://i.ibb.co/99pqNzY5/mealmate.png"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            'max-snippet': -1,
            'max-image-preview': 'large',
            'max-video-preview': -1,
        }
    },
    metadataBase: new URL("https://mealmate-lemon.vercel.app"),
};

export default function Page() {
    return (
        <div className="bg-white min-h-svh flex flex-col items-center justify-center p-6 md:p-10">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-sm md:max-w-5xl"
            >
                {/* Header Section */}
                <div className="text-center mb-10">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-[#D97757] font-sans font-bold tracking-widest uppercase text-xs"
                    >
                        Partner with MealMate
                    </motion.span>
                    <h1 className="mt-3 text-4xl md:text-5xl font-serif font-bold text-[#1F2933]">
                        Become a Provider
                    </h1>
                    <p className="mt-4 text-[#6B7280] font-sans max-w-2xl mx-auto">
                        Join our community of professional chefs and local kitchens. Share your passion for food and grow your business with us.
                    </p>
                </div>

                <div className="grid md:grid-cols-12 gap-10 items-start">
                    {/* Left Side: Benefits (Visible on MD+) */}
                    <div className="hidden md:flex md:col-span-5 flex-col gap-8 py-10">
                        <BenefitItem
                            icon={<UtensilsCrossed className="w-6 h-6" />}
                            title="Easy Menu Management"
                            description="Upload and update your dishes in seconds with our intuitive dashboard."
                        />
                        <BenefitItem
                            icon={<ShieldCheck className="w-6 h-6" />}
                            title="Verified Payments"
                            description="Secure and timely payments directly to your account every week."
                        />
                        <BenefitItem
                            icon={<Zap className="w-6 h-6" />}
                            title="Instant Growth"
                            description="Reach thousands of hungry customers in your local area immediately."
                        />
                    </div>

                    {/* Right Side: Register Form */}
                    <div className="md:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <RegisterForm className="shadow-2xl shadow-[#D97757]/5" />
                        </motion.div>
                    </div>
                </div>

                {/* Footer Quote */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-12 text-center text-sm text-[#6B7280] font-sans italic"
                >
                    "The secret ingredient is always love. Join us today."
                </motion.p>
            </motion.div>
        </div>
    );
}

function BenefitItem({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <motion.div
            whileHover={{ x: 10 }}
            className="flex gap-4 items-start group"
        >
            <div className="bg-white p-3 rounded-2xl shadow-sm border border-[#D97757]/10 group-hover:bg-[#D97757] group-hover:text-white text-[#D97757] transition-colors duration-300">
                {icon}
            </div>
            <div>
                <h4 className="font-serif font-bold text-[#1F2933] text-lg">{title}</h4>
                <p className="text-sm text-[#6B7280] leading-relaxed mt-1">{description}</p>
            </div>
        </motion.div>
    );
}