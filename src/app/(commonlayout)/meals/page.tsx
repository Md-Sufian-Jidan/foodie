'use client';

import { mealService } from "@/services/meal.service";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, UtensilsCrossed } from "lucide-react";
import { useEffect, useState } from "react";

export default function MealsPage() {
    const [meals, setMeals] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const getAllMeals = async () => {
        try {
            setIsLoading(true);
            const { data, error } = await mealService.getMeals();

            if (error) {
                // console.error("Failed to fetch meals:", error);
                return;
            }

            const mealsList = data?.data || data || [];
            setMeals(mealsList);
        } catch (err) {
            // console.error("Fetch error:", err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getAllMeals();
    }, []);

    const hasMeals = meals && meals.length > 0;

    return (
        <div className="min-h-screen bg-[#FAF9F7] dark:bg-[#121110] font-jakarta">
            <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div className="space-y-4">
                        <Badge className="bg-[#D97757]/10 text-[#D97757] border-none px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                            Fresh from local kitchens
                        </Badge>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1F2933] dark:text-[#F5F4F2]">
                            Browse All Meals <span className="text-[#D97757]">.</span>
                        </h1>
                    </div>
                    <p className="text-[#6B7280] max-w-sm text-sm leading-relaxed">
                        Discover authentic flavors crafted by passionate neighborhood chefs.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex gap-3 overflow-x-auto pb-8 no-scrollbar">
                    {['All', 'Healthy', 'Traditional', 'Spicy', 'Vegan', 'Fast Food'].map((cat) => (
                        <Button key={cat} variant="outline" className="rounded-full border-[#1F2933]/10 hover:border-[#D97757] hover:text-[#D97757] shrink-0">
                            {cat}
                        </Button>
                    ))}
                </div>

                {/* Logic for Rendering */}
                {isLoading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {/* You can put a Skeleton here later */}
                        <p className="text-[#6B7280]">Loading meals...</p>
                    </div>
                ) : !hasMeals ? (
                    /* --- FULL WIDTH EMPTY STATE --- */
                    <div className="w-full flex flex-col items-center justify-center py-24 px-6 text-center animate-in fade-in zoom-in duration-500">
                        <div className="w-24 h-24 bg-white rounded-[2rem] flex items-center justify-center shadow-xl shadow-[#D97757]/5 border border-[#1F2933]/5 mb-8">
                            <UtensilsCrossed className="w-10 h-10 text-[#D97757]/40" />
                        </div>
                        <h2 className="font-serif text-3xl font-bold text-[#1F2933] mb-3">
                            The kitchen is quiet...
                        </h2>
                        <p className="text-[#6B7280] max-w-sm mb-8 leading-relaxed">
                            We couldn't find any meals. Our chefs might be busy prepping something special!
                        </p>
                        <Link href="/">
                            <Button className="bg-[#D97757] hover:bg-[#D97757]/90 rounded-full px-10 py-6 h-auto font-bold shadow-lg shadow-[#D97757]/20">
                                Return to Home
                            </Button>
                        </Link>
                    </div>
                ) : (
                    /* --- MEALS GRID --- */
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {meals.map((meal: any) => (
                            <div
                                key={meal.id || meal._id}
                                className="group relative flex flex-col bg-white dark:bg-[#1C1A18] rounded-3xl overflow-hidden border border-[#1F2933]/5 hover:shadow-2xl hover:shadow-[#D97757]/10 transition-all duration-500"
                            >
                                <div className="relative h-64 w-full overflow-hidden">
                                    <Link href={`/meals/${meal.id || meal._id}`} className="block h-full">
                                        <Image
                                            src={meal.image || "/placeholder-food.jpg"}
                                            alt={meal.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </Link>
                                    <Button
                                        size="icon"
                                        className="absolute bottom-4 right-4 rounded-2xl bg-[#D97757] text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                                    >
                                        <ShoppingCart size={18} />
                                    </Button>
                                </div>

                                <div className="p-6 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h2 className="text-xl font-bold text-[#1F2933] dark:text-[#F5F4F2] mb-2 group-hover:text-[#D97757] transition-colors line-clamp-1">
                                            {meal.name}
                                        </h2>
                                        <p className="text-sm text-[#6B7280] line-clamp-2 leading-relaxed mb-4">
                                            {meal.description}
                                        </p>
                                    </div>

                                    <div className="flex justify-between items-center mt-auto pt-4 border-t border-[#1F2933]/5">
                                        <span className="text-2xl font-black text-[#D97757]">
                                            ৳{meal.price}
                                        </span>
                                        <span className="text-xs font-bold text-[#1F2933] dark:text-[#F5F4F2]">
                                            {meal.provider?.name || "Local Chef"}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}