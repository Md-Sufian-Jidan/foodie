"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingBag, UtensilsCrossed, ArrowRight } from "lucide-react";

export function EmptyCart() {
    return (
        <div className="flex flex-col items-center justify-center py-24 px-6 text-center bg-white rounded-[3rem] shadow-sm border border-[#D97757]/5 max-w-2xl mx-auto my-12">
            {/* Visual Icon Group */}
            <div className="relative mb-10">
                <div className="w-32 h-32 rounded-full bg-[#FAF9F7] flex items-center justify-center border-2 border-dashed border-[#D97757]/20 relative">
                    <ShoppingBag className="h-14 w-14 text-[#D97757]/30 stroke-[1.5]" />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-white p-3 rounded-2xl shadow-lg border border-[#FAF9F7]">
                    <UtensilsCrossed className="w-7 h-7 text-[#D97757]" />
                </div>
            </div>

            {/* Text Content */}
            <h2 className="text-4xl font-serif font-bold text-[#1F2933] mb-4 tracking-tight">
                Your kitchen is quiet
            </h2>
            <p className="text-[#6B7280] mb-10 max-w-[320px] mx-auto leading-relaxed font-sans">
                It looks like you haven't added any of our chef-crafted meals to your cart yet.
            </p>

            {/* Call to Action */}
            <Button
                asChild
                size="lg"
                className="bg-[#D97757] hover:bg-[#D97757]/90 text-white rounded-2xl px-10 h-16 shadow-lg shadow-[#D97757]/20 group transition-all active:scale-[0.98] font-bold text-lg"
            >
                <Link href="/meals" className="flex items-center">
                    Browse Our Menu
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
            </Button>

            {/* Subtle Footer Suggestion */}
            <p className="mt-8 text-xs font-semibold text-[#D97757]/60 uppercase tracking-[0.2em]">
                Fresh ingredients delivered to your door
            </p>
        </div>
    );
}