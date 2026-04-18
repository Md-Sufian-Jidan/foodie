import SupportFaq from "@/components/modules/support/SupportFaq";
import SupportForm from "@/components/modules/support/SupportForm";
import SupportHero from "@/components/modules/support/SupportHero";
import SupportOptions from "@/components/modules/support/SupportOptions";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Support | MealMate - Fresh Multi-Vendor Food Delivery Platform",
    description:
        "Get help with orders, payments, vendors, and technical issues at MealMate support center.",
    keywords: [
        "support",
        "help",
        "orders",
        "payments",
        "vendors",
        "technical issues",
        "mealmate support",
    ],
    authors: [{
        name: "Md Abu Sufian Jidan",
        url: "https://mdabusufianjidan.vercel.app"
    }],
    openGraph: {
        title: "Support | MealMate - Fresh Food Delivered Fast",
        description:
            "Get help with orders, payments, vendors, and technical issues.",
        url: "https://mealmate-lemon.vercel.app/support",
        siteName: "MealMate",
        type: "website",
        images: [
            {
                url: "https://i.ibb.co/99pqNzY5/mealmate.png",
                width: 1200,
                height: 630,
                alt: "MealMate Support",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Support | MealMate - Food Delivery Platform",
        description:
            "Get help with orders, payments, vendors, and technical issues.",
        images: ["https://i.ibb.co/99pqNzY5/mealmate.png"],
    },
    metadataBase: new URL("https://mealmate-lemon.vercel.app"),
};

export default function SupportPage() {
    return (
        <main className="min-h-screen bg-[#FAF9F7] dark:bg-[#0B0F17]">
            <SupportHero />
            <SupportOptions />
            <SupportForm />
            <SupportFaq />
        </main>
    );
}