import type { Metadata } from "next";
import { Suspense } from "react";

import { categoryActions } from "@/actions/categories";
import { getPopularMeals } from "@/actions/reviews";

import Hero from "@/components/modules/home/Hero";
import Statistics from "@/components/modules/home/Statistics";
import TopVendors from "@/components/modules/home/TopVendors";
import SpecialOffers from "@/components/modules/home/SpecialOffers";
import FeaturedMeals from "@/components/modules/home/FeaturedMeals";
import { PopularMeals } from "@/components/modules/home/PopularMeals";
import { CategorySlider } from "@/components/modules/home/CategorySlider";
import HowItWorks from "@/components/modules/home/HowItWorks";
import WhyChooseUs from "@/components/modules/home/WhyChooseUs";
import Testimonials from "@/components/modules/home/Testimonials";
import BlogPreview from "@/components/modules/home/BlogPreview";
import Faq from "@/components/modules/home/Faq";
import Newsletter from "@/components/modules/home/Newsletter";
import ServiceAreas from "@/components/modules/home/ServiceAreas";
import { CategorySliderSkeleton, PopularMealsSkeleton, } from "@/helper/Skeleton";
import { OrderTracking } from "@/components/modules/home/OrderTracking";

export const metadata: Metadata = {
    title: "MealMate | Fresh Multi-Vendor Food Delivery Platform",
    description:
        "Order fresh meals from trusted local vendors. MealMate connects food lovers with restaurants, home chefs, and delivery partners in real-time.",
    keywords: [
        "food delivery",
        "multi vendor food app",
        "meal delivery",
        "order food online",
        "restaurant delivery",
        "home cooked food",
    ],
    authors: [{
        name: "Md Abu Sufian Jidan",
        url: "https://mdabusufianjidan.vercel.app"
    }],
    openGraph: {
        title: "MealMate - Fresh Food Delivered Fast",
        description:
            "Discover, order, and enjoy meals from top local vendors with real-time tracking.",
        url: "https://mealmate-lemon.vercel.app/",
        siteName: "MealMate",
        type: "website",
        images: [
            {
                url: "https://i.ibb.co/99pqNzY5/mealmate.png",
                width: 1200,
                height: 630,
                alt: "MealMate Food Delivery",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "MealMate - Food Delivery Platform",
        description:
            "Order delicious meals from trusted vendors with fast delivery.",
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

async function getHomeData() {
    try {
        const [categoriesData, popularMealsData] = await Promise.all([
            categoryActions(),
            getPopularMeals(),
        ]);

        return {
            categories: categoriesData?.data?.data || [],
            meals: popularMealsData?.data?.data || [],
        };
    } catch (error) {
        console.error("Home data error:", error);
        return { categories: [], meals: [] };
    }
}

export default async function Home() {
    const { categories, meals } = await getHomeData();

    return (
        <main className="overflow-hidden">
            <Hero />
            <Statistics />
            <TopVendors />
            <SpecialOffers />
            <FeaturedMeals />
            <Suspense fallback={<PopularMealsSkeleton />}>
                <PopularMeals meals={meals?.data} />
            </Suspense>
            <Suspense fallback={<CategorySliderSkeleton />}>
                <CategorySlider categories={categories} />
            </Suspense>
            <HowItWorks />
            <WhyChooseUs />
            <OrderTracking />
            <Testimonials />
            <BlogPreview />
            <Faq />
            <ServiceAreas />
            <Newsletter />
        </main>
    );
}