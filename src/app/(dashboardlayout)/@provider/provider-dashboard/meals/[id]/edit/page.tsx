import { getMealById } from "@/actions/getProviders";
import EditMealForm from "@/components/modules/providers/EditMeal";
import { categoryService } from "@/services/category.service";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Edit Meal | MealMate - Fresh Multi-Vendor Food Delivery Platform",
    description:
        "Edit your meal details and update your menu on MealMate platform.",
    keywords: [
        "edit meal",
        "update meal",
        "meal management",
        "mealmate meals",
    ],
    authors: [{
        name: "Md Abu Sufian Jidan",
        url: "https://mdabusufianjidan.vercel.app"
    }],
    openGraph: {
        title: "Edit Meal | MealMate - Fresh Food Delivered Fast",
        description:
            "Edit your meal details and update your menu.",
        url: "https://mealmate-lemon.vercel.app/dashboard/provider/meals/[id]/edit",
        siteName: "MealMate",
        type: "website",
        images: [
            {
                url: "https://i.ibb.co/99pqNzY5/mealmate.png",
                width: 1200,
                height: 630,
                alt: "MealMate Edit Meal",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Edit Meal | MealMate - Food Delivery Platform",
        description:
            "Edit your meal details and update your menu.",
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

export default async function EditMealPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const [{ data: mealData }, { data: categoriesData }] = await Promise.all([
        getMealById(id),
        categoryService.getCategories(),
    ]);

    if (!mealData || !mealData.data) {
        notFound();
    }

    const meal = mealData.data;
    const categories = categoriesData?.data || [];

    return (
        <div className="container mx-auto py-8 px-4">
            <div className="mb-6">
                <h1 className="text-3xl font-bold tracking-tight">Edit Meal</h1>
                <p className="text-muted-foreground mt-1">
                    Update your meal information
                </p>
            </div>
            <EditMealForm meal={meal} categories={categories} />
        </div>
    );
}