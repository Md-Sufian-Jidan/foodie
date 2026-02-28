"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ShoppingBag, ShieldCheck, Truck } from "lucide-react";

interface CartSummaryProps {
    summary: {
        subtotal: number;
        delivery: number;
        total: number;
    };
}

export function CartSummary({ summary }: CartSummaryProps) {
    return (
        <Card className="border-none shadow-[0_20px_50px_rgba(217,119,87,0.08)] bg-white rounded-[2.5rem] overflow-hidden">
            <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-bold text-[#1F2933] mb-8">
                    Order Summary
                </h2>

                <div className="space-y-5">
                    {/* Subtotal */}
                    <div className="flex items-center justify-between">
                        <span className="text-[#6B7280] font-medium font-sans">Subtotal</span>
                        <span className="font-bold text-[#1F2933]">
                            ${summary.subtotal.toFixed(2)}
                        </span>
                    </div>

                    {/* Delivery */}
                    <div className="flex items-center justify-between">
                        <span className="text-[#6B7280] font-medium font-sans">Delivery Fee</span>
                        <span className="font-bold">
                            {summary.delivery === 0 ? (
                                <span className="text-green-600 bg-green-50 px-3 py-1 rounded-full text-xs font-bold tracking-tight">
                                    FREE
                                </span>
                            ) : (
                                <span className="text-[#1F2933]">${summary.delivery.toFixed(2)}</span>
                            )}
                        </span>
                    </div>

                    <Separator className="bg-[#FAF9F7]" />

                    {/* Total */}
                    <div className="flex items-center justify-between py-2">
                        <span className="font-serif text-xl font-bold text-[#1F2933]">Total</span>
                        <div className="text-right">
                            <span className="block font-bold text-[#D97757] text-3xl">
                                ${summary.total.toFixed(2)}
                            </span>
                            <span className="text-[10px] text-[#6B7280] uppercase tracking-tighter">
                                Includes all taxes
                            </span>
                        </div>
                    </div>
                </div>

                {/* Checkout Button */}
                <Button
                    size="lg"
                    className="w-full mt-10 bg-[#D97757] hover:bg-[#D97757]/90 text-white h-14 rounded-2xl shadow-lg shadow-[#D97757]/20 transition-all active:scale-[0.98] group font-bold text-lg"
                >
                    <ShoppingBag className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                    Proceed to Checkout
                </Button>

                {/* Trust Badges */}
                <div className="mt-8 space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-[#FAF9F7] rounded-xl border border-black/5 group cursor-default">
                        <div className="bg-white p-1.5 rounded-lg shadow-sm">
                            <ShieldCheck className="w-4 h-4 text-[#D97757]" />
                        </div>
                        <span className="text-xs font-semibold text-[#6B7280]">
                            100% Secure Checkout
                        </span>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-[#FAF9F7] rounded-xl border border-black/5 group cursor-default">
                        <div className="bg-white p-1.5 rounded-lg shadow-sm">
                            <Truck className="w-4 h-4 text-[#D97757]" />
                        </div>
                        <span className="text-xs font-semibold text-[#6B7280]">
                            Estimated Delivery: 30-45 min
                        </span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}