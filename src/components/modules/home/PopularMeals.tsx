"use client";

import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import {
    Clock,
    DollarSign,
    EyeIcon,
    Flame,
    Star,
    Utensils,
} from "lucide-react";
import Link from "next/link";

interface Meal {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    rating?: number;
    prepTime?: number;
    calories?: number;
    category?: {
        name: string;
    };
    isAvailable?: boolean;
}

interface ProviderMealsGridProps {
    meals: Meal[];
}

export function PopularMeals({ meals }: ProviderMealsGridProps) {
    if (!meals || meals.length === 0) {
        return (
            <section className="max-w-7xl mx-auto px-4 py-16">
                <div className="text-center py-20 backdrop-blur-xl bg-white/60 dark:bg-white/10 border border-white/20 rounded-3xl shadow-lg">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#D97757]/10 mb-4">
                        <Utensils className="h-8 w-8 text-[#D97757]" />
                    </div>

                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                        No Meals Available
                    </h3>

                    <p className="text-gray-500 dark:text-gray-400">
                        This provider hasn’t added any meals yet.
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section className="max-w-7xl mx-auto px-4 py-20">

            {/* Header */}
            <div className="mb-10 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
                    Popular Meals
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                    Browse through {meals.length} delicious meal{meals.length !== 1 ? "s" : ""}
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                {meals.map((meal) => (
                    <Card
                        key={meal.id}
                        className="group overflow-hidden rounded-2xl border border-white/20 dark:border-white/10
            backdrop-blur-xl bg-white/60 dark:bg-white/10
            shadow-md hover:shadow-2xl hover:-translate-y-2
            transition-all duration-300"
                    >

                        {/* IMAGE SECTION */}
                        <CardHeader className="p-0 relative">

                            <div className="relative h-48 w-full overflow-hidden">

                                {/* Placeholder / Image layer */}
                                <div className="flex items-center justify-center h-full bg-gradient-to-br from-[#D97757]/10 to-transparent">
                                    <Utensils className="h-14 w-14 text-gray-300 dark:text-gray-600" />
                                </div>

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                                {/* Category badge */}
                                {meal?.category && (
                                    <Badge className="absolute top-3 right-3 bg-[#D97757]/90 text-white backdrop-blur">
                                        {meal.category.name}
                                    </Badge>
                                )}

                                {/* Out of stock */}
                                {!meal.isAvailable && (
                                    <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                                        <Badge variant="destructive" className="px-4 py-2 text-sm">
                                            Out of Stock
                                        </Badge>
                                    </div>
                                )}
                            </div>
                        </CardHeader>

                        {/* CONTENT */}
                        <CardContent className="p-4 space-y-3">

                            <h3 className="font-bold text-lg text-gray-800 dark:text-white group-hover:text-[#D97757] transition-colors line-clamp-1">
                                {meal.name}
                            </h3>

                            <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                                {meal.description}
                            </p>

                            {/* Meta Info */}
                            <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">

                                {meal.rating && (
                                    <div className="flex items-center gap-1">
                                        <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                                        <span>{meal.rating.toFixed(1)}</span>
                                    </div>
                                )}

                                {meal.prepTime && (
                                    <div className="flex items-center gap-1">
                                        <Clock className="h-3 w-3" />
                                        <span>{meal.prepTime}m</span>
                                    </div>
                                )}

                                {meal.calories && (
                                    <div className="flex items-center gap-1">
                                        <Flame className="h-3 w-3 text-orange-400" />
                                        <span>{meal.calories}</span>
                                    </div>
                                )}

                            </div>
                        </CardContent>

                        {/* FOOTER */}
                        <CardFooter className="p-4 pt-0 flex items-center justify-between">

                            {/* Price */}
                            <div className="flex items-center gap-1 text-[#D97757]">
                                <DollarSign className="h-5 w-5" />
                                <span className="text-xl font-bold">{meal.price}</span>
                            </div>

                            {/* CTA */}
                            <Link
                                href={`/meals/${meal.id}`}
                                className="inline-flex items-center px-4 py-2 rounded-full
                bg-[#D97757]/10 text-[#D97757]
                hover:bg-[#D97757] hover:text-white
                transition-all text-sm font-medium"
                            >
                                <EyeIcon className="h-4 w-4 mr-1" />
                                View
                            </Link>

                        </CardFooter>
                    </Card>
                ))}

            </div>

            {/* VIEW ALL */}
            <div className="mt-12 text-center">
                <Link
                    href="/meals"
                    className="inline-flex items-center px-6 py-3 rounded-full
          bg-[#D97757] text-white font-medium
          hover:bg-[#c96a4f] transition-all shadow-md"
                >
                    View All Meals
                </Link>
            </div>

        </section>
    );
}