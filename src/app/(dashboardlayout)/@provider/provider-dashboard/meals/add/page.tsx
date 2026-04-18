import AddMealForm from "@/components/modules/providers/AddMeal";
import { categoryService } from "@/services/category.service";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Add Meal | MealMate - Fresh Multi-Vendor Food Delivery Platform",
    description:
        "Add new meals to your menu and start selling to customers on MealMate platform.",
    keywords: [
        "add meal",
        "new meal",
        "meal management",
        "mealmate meals",
    ],
    authors: [{
        name: "Md Abu Sufian Jidan",
        url: "https://mdabusufianjidan.vercel.app"
    }],
    openGraph: {
        title: "Add Meal | MealMate - Fresh Food Delivered Fast",
        description:
            "Add new meals to your menu.",
        url: "https://mealmate-lemon.vercel.app/dashboard/provider/meals/add",
        siteName: "MealMate",
        type: "website",
        images: [
            {
                url: "https://i.ibb.co/99pqNzY5/mealmate.png",
                width: 1200,
                height: 630,
                alt: "MealMate Add Meal",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Add Meal | MealMate - Food Delivery Platform",
        description:
            "Add new meals to your menu.",
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

export default async function AddMealsPage() {
    const { data: categoriesData } = await categoryService.getCategories();
    const categories = categoriesData?.data || [];

    return (
        <div className="container mx-auto py-8 px-4">
            <AddMealForm categories={categories} />
        </div>
    );
}