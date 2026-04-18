import { VerifyRequest } from "@/components/modules/authentication/VerifyRequest";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: "Verify Request | MealMate - Fresh Multi-Vendor Food Delivery Platform",
    description:
        "Check your email for the verification link to complete your registration.",
    keywords: [
        "verify request",
        "email verification",
        "account activation",
        "mealmate verification",
    ],
    authors: [{
        name: "Md Abu Sufian Jidan",
        url: "https://mdabusufianjidan.vercel.app"
    }],
    openGraph: {
        title: "Verify Request | MealMate - Fresh Food Delivered Fast",
        description:
            "Check your email for the verification link.",
        url: "https://mealmate-lemon.vercel.app/verify-request",
        siteName: "MealMate",
        type: "website",
        images: [
            {
                url: "https://i.ibb.co/99pqNzY5/mealmate.png",
                width: 1200,
                height: 630,
                alt: "MealMate Verify Request",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Verify Request | MealMate - Food Delivery Platform",
        description:
            "Check your email for the verification link.",
        images: ["https://i.ibb.co/99pqNzY5/mealmate.png"],
    },
    metadataBase: new URL("https://mealmate-lemon.vercel.app"),
};

export default function VerifyRequestPage() {
    return (
        <Suspense
            fallback={
                <div className="min-h-screen bg-cream flex items-center justify-center">
                    <p className="text-lg font-medium">Loading...</p>
                </div>
            }
        >
            <VerifyRequest />
        </Suspense>
    );
}