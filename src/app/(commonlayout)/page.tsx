import { categoryActions } from "@/actions/categories";
import { getPopularMeals } from "@/actions/reviews";
import { CategorySlider } from "@/components/modules/home/CategorySlider";
import Hero from "@/components/modules/home/Hero";
import HowItWorks from "@/components/modules/home/HowItWorks";
import { OrderTracking } from "@/components/modules/home/OrderTracking";
import { PopularMeals } from "@/components/modules/home/PopularMeals";
import { CategorySliderSkeleton, PopularMealsSkeleton } from "@/helper/Skeleton";
import { Suspense } from "react";
export const dynamic = "auto";
export const revalidate = 0;

async function getHomeData() {
    try {
        const [categoriesData, popularMealsData] = await Promise.all([
            categoryActions(),
            getPopularMeals(),
        ]);
        return {
            categories: categoriesData?.data?.data || [],
            meals: popularMealsData?.data?.data || [],
            error: null,
        };
    } catch (error) {
        console.error("Error fetching home data:", error);
        return {
            categories: [],
            meals: [],
            error: "Failed to load data",
        };
    }
}

export default async function Home() {
    const { categories, meals, error } = await getHomeData();

    return (
        <>
            <Hero />
            <Suspense fallback={<CategorySliderSkeleton />}>
                <CategorySlider categories={categories} />
            </Suspense>
            <Suspense fallback={<PopularMealsSkeleton />}>
                <PopularMeals meals={meals?.data} />
            </Suspense>
            <HowItWorks />
            <OrderTracking />
        </>
    );
}
// export const revalidate = 300;