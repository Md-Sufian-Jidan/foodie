import { VerifyEmailContent } from "@/components/modules/authentication/VerifyEmailContent";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: "Verify Email | MealMate - Fresh Multi-Vendor Food Delivery Platform",
    description:
        "Verify your email address to complete your registration and activate your MealMate account.",
    keywords: [
        "verify email",
        "email verification",
        "account activation",
        "mealmate verification",
    ],
    authors: [{
        name: "Md Abu Sufian Jidan",
        url: "https://mdabusufianjidan.vercel.app"
    }],
    openGraph: {
        title: "Verify Email | MealMate - Fresh Food Delivered Fast",
        description:
            "Verify your email address to complete your registration.",
        url: "https://mealmate-lemon.vercel.app/verify-email",
        siteName: "MealMate",
        type: "website",
        images: [
            {
                url: "https://i.ibb.co/99pqNzY5/mealmate.png",
                width: 1200,
                height: 630,
                alt: "MealMate Verify Email",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Verify Email | MealMate - Food Delivery Platform",
        description:
            "Verify your email address to complete your registration.",
        images: ["https://i.ibb.co/99pqNzY5/mealmate.png"],
    },
    metadataBase: new URL("https://mealmate-lemon.vercel.app"),
};

export default function VerifyEmailPage() {
    return (
        <Suspense
            fallback={
                <div className="min-h-screen bg-cream flex items-center justify-center">
                    <p className="text-lg font-medium">Loading...</p>
                </div>
            }
        >
            <VerifyEmailContent />
        </Suspense>
    );
}