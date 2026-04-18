import { providerActions } from "@/actions/getProviders";
import { ProvidersClient } from "@/components/modules/providers/ProvidersClient";
import { ProvidersHero } from "@/components/modules/providers/ProvidersHero";
import { ProvidersLoadingSkeleton } from "@/components/modules/providers/ProvidersLoadingSkeleton";
import { Metadata } from "next";
import { Suspense } from "react";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: "Providers | MealMate - Fresh Multi-Vendor Food Delivery Platform",
    description:
        "Discover top-rated local food providers offering delicious meals. Filter by cuisine, location, and ratings to find your perfect meal provider.",
    keywords: [
        "providers",
        "food vendors",
        "local restaurants",
        "meal delivery",
        "cuisine",
        "ratings",
        "mealmate providers",
    ],
    authors: [{
        name: "Md Abu Sufian Jidan",
        url: "https://mdabusufianjidan.vercel.app"
    }],
    openGraph: {
        title: "Providers | MealMate - Fresh Food Delivered Fast",
        description:
            "Discover top-rated local food providers offering delicious meals.",
        url: "https://mealmate-lemon.vercel.app/providers",
        siteName: "MealMate",
        type: "website",
        images: [
            {
                url: "https://i.ibb.co/99pqNzY5/mealmate.png",
                width: 1200,
                height: 630,
                alt: "MealMate Providers",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Providers | MealMate - Food Delivery Platform",
        description:
            "Discover top-rated local food providers offering delicious meals.",
        images: ["https://i.ibb.co/99pqNzY5/mealmate.png"],
    },
    metadataBase: new URL("https://mealmate-lemon.vercel.app"),
};

export default async function ProvidersPage() {
    const providers = await providerActions();

    return (
        <div className="min-h-screen bg-linear-to-br from-background via-background to-muted/20">
            <ProvidersHero />
            <Suspense fallback={<ProvidersLoadingSkeleton />}>
                <ProvidersClient initialProviders={providers?.data?.data || []} />
            </Suspense>
        </div>
    );
}