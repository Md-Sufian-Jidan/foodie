import BlogHero from "@/components/modules/blog/BlogHero";
import BlogGrid from "@/components/modules/blog/BlogGrid";
import BlogCategories from "@/components/modules/blog/BlogCategories";
import Newsletter from "@/components/modules/home/Newsletter";
import FeaturedBlog from "@/components/modules/blog/FeaturedBlog";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "MealMate Blog | Food Stories & Updates",
    description:
        "Read the latest food stories, vendor insights, recipes, and updates from MealMate.",
    keywords: [
        "food blog",
        "recipes",
        "food stories",
        "vendor insights",
        "mealmate blog",
        "food updates",
    ],
    authors: [{
        name: "Md Abu Sufian Jidan",
        url: "https://mdabusufianjidan.vercel.app"
    }],
    openGraph: {
        title: "MealMate Blog | Food Stories & Updates",
        description:
            "Read the latest food stories, vendor insights, recipes, and updates from MealMate.",
        url: "https://mealmate-lemon.vercel.app/blog",
        siteName: "MealMate",
        type: "website",
        images: [
            {
                url: "https://i.ibb.co/99pqNzY5/mealmate.png",
                width: 1200,
                height: 630,
                alt: "MealMate Blog",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "MealMate Blog | Food Stories & Updates",
        description:
            "Read the latest food stories, vendor insights, recipes, and updates from MealMate.",
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

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-[#FAF9F7] dark:bg-[#0B0F17]">
            <BlogHero />
            <FeaturedBlog />
            <BlogCategories />
            <BlogGrid />
            <Newsletter />
        </main>
    );
}