import { ProviderDetailsHero } from "@/components/modules/providers/ProviderDetailsHero";
import { ProviderDetailsLoading } from "@/components/modules/providers/ProviderDetailsLoading";

import { ProviderMealsGrid } from "@/components/modules/providers/ProviderMealsGrid";
import { providerService } from "@/services/provider.service";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: "Provider Details | MealMate - Fresh Multi-Vendor Food Delivery Platform",
    description:
        "Explore detailed information about this food provider, including their menu, ratings, and customer reviews.",
    keywords: [
        "provider details",
        "food vendor",
        "local restaurants",
        "meal delivery",
        "ratings",
        "mealmate provider",
    ],
    authors: [{
        name: "Md Abu Sufian Jidan",
        url: "https://mdabusufianjidan.vercel.app"
    }],
    openGraph: {
        title: "Provider Details | MealMate - Fresh Food Delivered Fast",
        description:
            "Explore detailed information about this food provider.",
        url: "https://mealmate-lemon.vercel.app/providers/[id]",
        siteName: "MealMate",
        type: "website",
        images: [
            {
                url: "https://i.ibb.co/99pqNzY5/mealmate.png",
                width: 1200,
                height: 630,
                alt: "MealMate Provider Details",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Provider Details | MealMate - Food Delivery Platform",
        description:
            "Explore detailed information about this food provider.",
        images: ["https://i.ibb.co/99pqNzY5/mealmate.png"],
    },
    metadataBase: new URL("https://mealmate-lemon.vercel.app"),
};

export async function generateStaticParams() {
    const { data } = await providerService.getProviders();
    return (
        data?.data?.map((provider: any) => ({
            id: provider.id,
        })) || []
    );
}

export default async function ProviderDetailsPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const response = await providerService.getProviderById(id);
    const provider = response?.data?.data;

    if (!provider) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-background via-background to-muted/20">
            <ProviderDetailsHero provider={provider} />
            <Suspense fallback={<ProviderDetailsLoading />}>
                <ProviderMealsGrid meals={provider.meals || []} providerId={id} />
            </Suspense>
        </div>
    );
}