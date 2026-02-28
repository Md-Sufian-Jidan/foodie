"use client";

import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, Utensils } from "lucide-react";
import { cn } from "@/lib/utils";

interface CartItemProps {
    item: {
        id: string;
        name: string;
        price: number;
        quantity: number;
        image?: string;
    };
}

export default function CartItem({ item }: CartItemProps) {
    return (
        <div className="group flex items-center gap-4 p-4 rounded-2xl bg-white border border-transparent hover:border-[#D97757]/10 hover:shadow-[0_8px_30px_rgb(217,119,87,0.04)] transition-all duration-300">
            {/* Thumbnail */}
            <div className="relative h-20 w-20 rounded-xl bg-[#FAF9F7] flex items-center justify-center shrink-0 overflow-hidden border border-black/5">
                {item.image ? (
                    <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition-transform group-hover:scale-110 duration-500"
                    />
                ) : (
                    <Utensils className="h-8 w-8 text-[#D97757]/20" />
                )}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
                <h3 className="font-serif font-bold text-[#1F2933] text-lg truncate leading-tight">
                    {item.name}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                    <span className="text-[#D97757] font-bold">
                        ${item.price.toFixed(2)}
                    </span>
                    <span className="text-[10px] text-[#6B7280] uppercase tracking-widest font-semibold">
                        per serving
                    </span>
                </div>
            </div>

            {/* Controls */}
            <div className="flex flex-col items-end gap-3">
                {/* Delete button appears nicely on hover or stays subtle */}
                <Button
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8 text-[#6B7280] hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                >
                    <Trash2 size={16} />
                </Button>

                <div className="flex items-center bg-[#FAF9F7] rounded-lg p-0.5 border border-black/5">
                    <Button
                        size="icon"
                        variant="ghost"
                        className="h-7 w-7 text-[#1F2933] hover:bg-white hover:shadow-sm rounded-md transition-all disabled:opacity-30"
                        disabled={item.quantity <= 1}
                    >
                        <Minus size={12} strokeWidth={3} />
                    </Button>

                    <span className="w-8 text-center font-sans font-bold text-sm text-[#1F2933]">
                        {item.quantity}
                    </span>

                    <Button
                        size="icon"
                        variant="ghost"
                        className="h-7 w-7 text-[#1F2933] hover:bg-white hover:shadow-sm rounded-md transition-all"
                    >
                        <Plus size={12} strokeWidth={3} />
                    </Button>
                </div>
            </div>
        </div>
    );
}