import { MealsClient, MealsHero } from "@/components/modules/meals";
import { mealService } from "@/services/meal.service";
import { SearchParamsType } from "@/types/meal.type";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Meals | MealMate - Fresh Multi-Vendor Food Delivery Platform",
    description:
        "Explore a wide variety of delicious meals from top local vendors. Filter by cuisine, diet, spice level, and price to find your perfect dish.",
    keywords: [
        "meals",
        "food",
        "delivery",
        "cuisine",
        "dietary",
        "spice level",
        "mealmate meals",
        "order food online",
    ],
    authors: [{
        name: "Md Abu Sufian Jidan",
        url: "https://mdabusufianjidan.vercel.app"
    }],
    openGraph: {
        title: "Meals | MealMate - Fresh Food Delivered Fast",
        description:
            "Explore a wide variety of delicious meals from top local vendors.",
        url: "https://mealmate-lemon.vercel.app/meals",
        siteName: "MealMate",
        type: "website",
        images: [
            {
                url: "https://i.ibb.co/99pqNzY5/mealmate.png",
                width: 1200,
                height: 630,
                alt: "MealMate Meals",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Meals | MealMate - Food Delivery Platform",
        description:
            "Explore a wide variety of delicious meals from top local vendors.",
        images: ["https://i.ibb.co/99pqNzY5/mealmate.png"],
    },
    metadataBase: new URL("https://mealmate-lemon.vercel.app"),
};

async function getMeals(searchParams: SearchParamsType) {
    try {
        const response = await mealService.getMeals({
            page: searchParams.page ? parseInt(searchParams.page) : 1,
            limit: 9,
            search: searchParams.search,
            cuisine:
                searchParams.cuisine !== "All" ? searchParams.cuisine : undefined,
            dietary: searchParams.dietary,
            mealType:
                searchParams.mealType !== "All"
                    ? searchParams.mealType?.toLowerCase()
                    : undefined,
            spiceLevel:
                searchParams.spiceLevel !== "All"
                    ? searchParams.spiceLevel?.toLowerCase()
                    : undefined,
            minPrice: searchParams.minPrice
                ? parseInt(searchParams.minPrice)
                : undefined,
            maxPrice: searchParams.maxPrice
                ? parseInt(searchParams.maxPrice)
                : undefined,
            sortBy: searchParams.sortBy || "createdAt",
            sortOrder: searchParams.sortOrder || "desc",
        });

        if (response.status && response.data) {
            // console.log("Pagination data:", response.data.data.pagination);
            return {
                meals: response.data.data.data || [],
                pagination: response.data.data.pagination || {
                    total: 0,
                    page: 1,
                    limit: 9,
                    totalPages: 1,
                },
            };
        }
        return {
            meals: [],
            pagination: { total: 0, page: 1, limit: 9, totalPages: 1 },
        };
    } catch (error) {
        console.error("Error fetching meals:", error);
        return {
            meals: [],
            pagination: { total: 0, page: 1, limit: 9, totalPages: 1 },
        };
    }
}

export default async function MealsPage({
    searchParams,
}: {
    searchParams: Promise<SearchParamsType>;
}) {
    const params = await searchParams;
    const [{ meals, pagination }, cuisinesRes, dietaryRes, mealTypesRes] =
        await Promise.all([
            getMeals(params),
            mealService.getCuisineOptions(),
            mealService.getDietaryOptions(),
            mealService.getMealTypes(),
        ]);

    return (
        <div className="min-h-screen bg-linear-to-br from-background via-background to-muted/20">
            <MealsHero />
            <MealsClient
                initialMeals={meals}
                initialPagination={pagination}
                cuisines={cuisinesRes.data || []}
                dietaryOptions={dietaryRes.data || []}
                mealTypes={mealTypesRes.data || []}
            />
        </div>
    );
}