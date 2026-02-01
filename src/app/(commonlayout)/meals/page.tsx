import { mealService } from "@/services/meal.service";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Clock, Utensils } from "lucide-react";

export default async function MealsPage() {
    const { data: meals } = await mealService.getMeals();
    console.log(meals);
    return (
        <div className="min-h-screen bg-[#FAF9F7] dark:bg-[#121110] font-jakarta">
            <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div className="space-y-4">
                        <Badge className="bg-[#D97757]/10 text-[#D97757] hover:bg-[#D97757]/20 border-none px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                            Fresh from local kitchens
                        </Badge>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1F2933] dark:text-[#F5F4F2]">
                            Browse All Meals <span className="text-[#D97757]">.</span>
                        </h1>
                    </div>
                    <p className="text-[#6B7280] max-w-sm text-sm leading-relaxed">
                        Discover authentic flavors crafted by passionate neighborhood chefs,
                        delivered straight to your doorstep.
                    </p>
                </div>

                {/* Filters/Categories Placeholder (Optional) */}
                <div className="flex gap-3 overflow-x-auto pb-8 no-scrollbar">
                    {['All', 'Healthy', 'Traditional', 'Spicy', 'Vegan', 'Fast Food'].map((cat) => (
                        <Button key={cat} variant="outline" className="rounded-full border-[#1F2933]/10 hover:border-[#D97757] hover:text-[#D97757] transition-all shrink-0">
                            {cat}
                        </Button>
                    ))}
                </div>

                {/* Meals Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {meals.data?.map((meal: any) => (
                        <div
                            key={meal.id}
                            className="group relative flex flex-col bg-white dark:bg-[#1C1A18] rounded-3xl overflow-hidden border border-[#1F2933]/5 hover:shadow-2xl hover:shadow-[#D97757]/10 transition-all duration-500"
                        >
                            {/* Image Container */}
                            <div className="relative h-64 w-full overflow-hidden">
                                <Link href={`/meals/${meal.id}`} className="block h-full">
                                    <Image
                                        src={meal.image}
                                        alt={meal.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </Link>

                                {/* Overlay Badges */}
                                <div className="absolute top-4 left-4 flex flex-col gap-2">
                                    <Badge className="bg-white/90 backdrop-blur text-[#1F2933] border-none shadow-sm flex gap-1 items-center">
                                        <Star size={12} className="fill-[#D97757] text-[#D97757]" />
                                        4.8
                                    </Badge>
                                </div>

                                <Button
                                    size="icon"
                                    className="absolute bottom-4 right-4 rounded-2xl bg-[#D97757] text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-xl shadow-[#D97757]/40"
                                >
                                    <ShoppingCart size={18} />
                                </Button>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-[10px] font-bold text-[#6B7280] uppercase tracking-widest flex items-center gap-1">
                                            <Utensils size={10} /> {meal.category?.name || "Main Course"}
                                        </span>
                                        <div className="flex items-center gap-1 text-[#6B7280] text-[10px] font-bold uppercase tracking-widest">
                                            <Clock size={10} /> 25-30 min
                                        </div>
                                    </div>

                                    <Link href={`/meals/${meal.id}`}>
                                        <h2 className="text-xl font-bold text-[#1F2933] dark:text-[#F5F4F2] mb-2 group-hover:text-[#D97757] transition-colors line-clamp-1">
                                            {meal.name}
                                        </h2>
                                    </Link>

                                    <p className="text-sm text-[#6B7280] line-clamp-2 leading-relaxed mb-4">
                                        {meal.description}
                                    </p>
                                </div>

                                <div className="flex justify-between items-center mt-auto pt-4 border-t border-[#1F2933]/5">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] text-[#9CA3AF] uppercase font-bold tracking-tighter leading-none mb-1">Price</span>
                                        <span className="text-2xl font-black text-[#D97757]">
                                            ৳{meal.price}
                                        </span>
                                    </div>

                                    <div className="text-right">
                                        <span className="block text-[10px] text-[#9CA3AF] uppercase font-bold tracking-tighter leading-none mb-1">Kitchen</span>
                                        <span className="text-xs font-bold text-[#1F2933] dark:text-[#F5F4F2]">
                                            {meal.provider?.name || "Local Chef"}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}