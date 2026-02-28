"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, MessageSquare, Calendar, Utensils } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Review {
    id: string;
    rating: number;
    comment: string | null;
    createdAt: string;
    meal: {
        id: string;
        name: string;
        image: string | null;
    };
}

interface CustomerReviewsProps {
    reviews: Review[];
}

export function CustomerReviews({ reviews }: CustomerReviewsProps) {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    };

    if (reviews.length === 0) {
        return (
            <Card className="border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] overflow-hidden bg-white">
                <CardContent className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-20 h-20 bg-[#FAF9F7] rounded-full flex items-center justify-center mb-4 border border-[#D97757]/10">
                        <MessageSquare className="w-8 h-8 text-[#D97757]/20" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-[#1F2933]">No reviews yet</h3>
                    <p className="text-[#6B7280] text-sm max-w-[200px] mt-2 font-sans">
                        Share your food experiences with the community!
                    </p>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className="border-none shadow-[0_20px_50px_rgba(0,0,0,0.03)] rounded-[2.5rem] bg-white overflow-hidden">
            <CardHeader className="p-8 pb-4">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl font-serif font-bold text-[#1F2933]">
                        My Culinary Journey
                    </CardTitle>
                    <Badge className="bg-[#D97757]/10 text-[#D97757] hover:bg-[#D97757]/20 border-none px-4 py-1 rounded-full font-bold">
                        {reviews.length} Reviews
                    </Badge>
                </div>
            </CardHeader>

            <CardContent className="p-8 pt-0">
                <div className="grid gap-6">
                    {reviews.slice(0, 5).map((review) => (
                        <div
                            key={review.id}
                            className="group relative flex flex-col sm:flex-row gap-6 p-6 rounded-[2rem] bg-[#FAF9F7] hover:bg-white border border-transparent hover:border-[#D97757]/10 hover:shadow-[0_15px_40px_rgba(217,119,87,0.08)] transition-all duration-500"
                        >
                            {/* Meal Image */}
                            <div className="relative w-full sm:w-24 h-24 rounded-2xl overflow-hidden shrink-0 border border-black/5 bg-white">
                                {review.meal.image ? (
                                    <Image
                                        src={review.meal.image}
                                        alt={review.meal.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center h-full">
                                        <Utensils className="h-8 w-8 text-[#D97757]/20" />
                                    </div>
                                )}
                            </div>

                            {/* Review Content */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-4 mb-2">
                                    <h4 className="font-serif text-lg font-bold text-[#1F2933] group-hover:text-[#D97757] transition-colors truncate">
                                        {review.meal.name}
                                    </h4>
                                    <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow-sm border border-black/5">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={cn(
                                                    "w-3 h-3",
                                                    i < review.rating
                                                        ? "fill-[#D97757] text-[#D97757]"
                                                        : "fill-gray-100 text-gray-200"
                                                )}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {review.comment ? (
                                    <p className="text-[#4B5563] text-sm leading-relaxed italic mb-4 font-sans line-clamp-3">
                                        "{review.comment}"
                                    </p>
                                ) : (
                                    <p className="text-[#9CA3AF] text-sm italic mb-4 font-sans">
                                        No written feedback provided.
                                    </p>
                                )}

                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#9CA3AF]">
                                        <Calendar className="w-3 h-3" />
                                        {formatDate(review.createdAt)}
                                    </div>
                                    <div className="h-1 w-1 rounded-full bg-gray-300" />
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#D97757]">
                                        Verified Experience
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}