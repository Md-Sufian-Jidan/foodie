import FAQSection from "@/components/modules/faq/FAQSection";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "FAQ | MealMate - Fresh Multi-Vendor Food Delivery Platform",
    description:
        "Find answers to frequently asked questions about MealMate food delivery service.",
    keywords: [
        "faq",
        "help",
        "support",
        "mealmate faq",
        "food delivery questions",
    ],
    authors: [{
        name: "Md Abu Sufian Jidan",
        url: "https://mdabusufianjidan.vercel.app"
    }],
    openGraph: {
        title: "FAQ | MealMate - Fresh Food Delivered Fast",
        description:
            "Find answers to frequently asked questions about MealMate food delivery service.",
        url: "https://mealmate-lemon.vercel.app/faq",
        siteName: "MealMate",
        type: "website",
        images: [
            {
                url: "https://i.ibb.co/99pqNzY5/mealmate.png",
                width: 1200,
                height: 630,
                alt: "MealMate FAQ",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "FAQ | MealMate - Food Delivery Platform",
        description:
            "Find answers to frequently asked questions about MealMate food delivery service.",
        images: ["https://i.ibb.co/99pqNzY5/mealmate.png"],
    },
    metadataBase: new URL("https://mealmate-lemon.vercel.app"),
};

export default function FAQPage() {
    return (
        <main className="min-h-screen bg-[#FAF9F7] dark:bg-[#0B0F17] mt-0 md:mt-5">

            {/* HERO */}
            <section className="relative py-20 text-center overflow-hidden">

                <div className="absolute inset-0 bg-gradient-to-br from-[#FAF9F7] via-white to-[#D97757]/10 dark:from-[#0B0F17] dark:via-[#0F172A] dark:to-[#1E293B]" />

                <div className="relative max-w-3xl mx-auto px-4">

                    <h1 className="text-4xl md:text-5xl font-bold font-serif text-[#1F2933] dark:text-white">
                        Frequently Asked Questions
                    </h1>

                    <p className="mt-4 text-[#6B7280] dark:text-gray-300">
                        Everything you need to know about MealMate.
                    </p>
                </div>
            </section>

            {/* FAQ SECTION */}
            <FAQSection />
        </main>
    );
}