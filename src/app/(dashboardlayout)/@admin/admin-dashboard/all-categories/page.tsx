import { categoryActions } from "@/actions/categories";
import AllCategoriesClient from "@/components/modules/admin/AllCategories";
import { FolderOpen } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "All Categories | MealMate - Fresh Multi-Vendor Food Delivery Platform",
    description:
        "View and manage all categories as an admin on MealMate platform.",
    keywords: [
        "all categories",
        "categories",
        "category management",
        "mealmate categories",
    ],
    authors: [{
        name: "Md Abu Sufian Jidan",
        url: "https://mdabusufianjidan.vercel.app"
    }],
    openGraph: {
        title: "All Categories | MealMate - Fresh Food Delivered Fast",
        description:
            "View and manage all categories.",
        url: "https://mealmate-lemon.vercel.app/admin-dashboard/all-categories",
        siteName: "MealMate",
        type: "website",
        images: [
            {
                url: "https://i.ibb.co/99pqNzY5/mealmate.png",
                width: 1200,
                height: 630,
                alt: "MealMate All Categories",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "All Categories | MealMate - Food Delivery Platform",
        description:
            "View and manage all categories.",
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

export default async function AllCategoriesPage() {
    const { data: response } = await categoryActions();
    const categories = response?.data || [];

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <FolderOpen className="w-6 h-6 text-primary" />
                </div>
                <div>
                    <h1 className="text-3xl font-bold">All Categories</h1>
                    <p className="text-muted-foreground">
                        Manage meal categories and organization
                    </p>
                </div>
            </div>

            <AllCategoriesClient categories={categories} />
        </div>
    );
}