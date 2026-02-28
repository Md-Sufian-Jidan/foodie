"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCartStore } from "@/store/userCartStore";
import {
    ArrowLeft,
    Minus,
    Plus,
    ShoppingBag,
    ShoppingCart,
    Trash2,
    Utensils,
    ShieldCheck,
    Truck,
    Star
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils"; // Ensure you have this shadcn utility

export function CartClient() {
    const [mounted, setMounted] = useState(false);
    const items = useCartStore((state) => state.items);
    const updateQuantity = useCartStore((state) => state.updateQuantity);
    const removeItem = useCartStore((state) => state.removeItem);
    const clearCart = useCartStore((state) => state.clearCart);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="min-h-screen bg-[#FAF9F7] flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-[#D97757]/20 border-t-[#D97757] rounded-full animate-spin" />
                    <p className="font-serif text-[#1F2933] animate-pulse">Preparing your kitchen...</p>
                </div>
            </div>
        );
    }

    const subtotal = items.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
    );
    const deliveryFee = subtotal > 30 ? 0 : 5;
    const total = subtotal + deliveryFee;

    const handleIncrement = (id: string, currentQuantity: number) => {
        if (currentQuantity < 99) {
            updateQuantity(id, currentQuantity + 1);
        }
    };

    const handleDecrement = (id: string, currentQuantity: number) => {
        if (currentQuantity > 1) {
            updateQuantity(id, currentQuantity - 1);
        }
    };

    const handleRemove = (id: string, name: string) => {
        removeItem(id);
        toast.success(`${name} removed from cart`);
    };

    const handleClearCart = () => {
        clearCart();
        toast.success("Cart cleared");
    };

    if (items.length === 0) {
        return (
            <div className="min-h-screen bg-[#FAF9F7]">
                <div className="container mx-auto px-4 py-12">
                    <Button variant="ghost" asChild className="gap-2 mb-8 text-[#6B7280] hover:text-[#D97757] hover:bg-transparent group">
                        <Link href="/meals">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Continue Shopping
                        </Link>
                    </Button>

                    <div className="flex flex-col items-center justify-center py-20 bg-white rounded-[3rem] shadow-sm border border-black/5">
                        <div className="relative mb-8">
                            <div className="w-28 h-28 rounded-full bg-[#FAF9F7] flex items-center justify-center border-2 border-dashed border-[#D97757]/30">
                                <ShoppingCart className="h-12 w-12 text-[#D97757]/40" />
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-white p-2 rounded-full shadow-lg">
                                <Utensils className="w-6 h-6 text-[#D97757]" />
                            </div>
                        </div>
                        <h2 className="text-3xl font-serif font-bold text-[#1F2933] mb-3 text-center">Your cart is feeling light</h2>
                        <p className="text-[#6B7280] mb-10 text-center max-w-sm px-6">
                            Explore our delicious menu and start adding your favorite meals today!
                        </p>
                        <Button size="lg" asChild className="bg-[#D97757] hover:bg-[#D97757]/90 text-white rounded-xl px-10 h-14 shadow-lg shadow-[#D97757]/20">
                            <Link href="/meals">
                                <ShoppingBag className="w-5 h-5 mr-2" />
                                Browse Menu
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#FAF9F7]">
            <div className="container mx-auto px-4 py-12">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
                    <div>
                        <Button variant="ghost" asChild className="gap-2 mb-4 p-0 h-auto text-[#D97757] hover:bg-transparent font-medium">
                            <Link href="/meals">
                                <ArrowLeft className="w-4 h-4" />
                                Back to Menu
                            </Link>
                        </Button>
                        <h1 className="text-5xl font-serif font-bold text-[#1F2933] tracking-tight">My Basket</h1>
                        <p className="text-[#6B7280] mt-2 flex items-center gap-2">
                            <span className="bg-[#D97757]/10 text-[#D97757] px-2 py-0.5 rounded text-sm font-bold">
                                {items.length} {items.length === 1 ? "Item" : "Items"}
                            </span>
                            Selected for your meal
                        </p>
                    </div>
                    {items.length > 0 && (
                        <Button
                            variant="outline"
                            onClick={handleClearCart}
                            className="gap-2 border-red-100 text-red-500 hover:bg-red-50 hover:text-red-600 rounded-xl px-6"
                        >
                            <Trash2 className="w-4 h-4" />
                            Empty Cart
                        </Button>
                    )}
                </div>

                <div className="grid lg:grid-cols-3 gap-10">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-6">
                        {items.map((item) => (
                            <Card key={item.id} className="border-none shadow-sm hover:shadow-md transition-shadow bg-white rounded-[2rem] overflow-hidden">
                                <CardContent className="p-6">
                                    <div className="flex flex-col sm:flex-row gap-6">
                                        {/* Image Placeholder */}
                                        <div className="relative w-full sm:w-32 h-32 rounded-2xl overflow-hidden bg-[#FAF9F7] shrink-0 border border-black/5">
                                            <div className="flex items-center justify-center h-full">
                                                <Utensils className="h-10 w-10 text-[#D97757]/20" />
                                            </div>
                                            <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg shadow-sm border border-black/5">
                                                <Star className="w-3 h-3 text-[#D97757] fill-[#D97757]" />
                                            </div>
                                        </div>

                                        {/* Details */}
                                        <div className="flex-1 flex flex-col justify-between">
                                            <div className="flex items-start justify-between gap-4">
                                                <div>
                                                    <h3 className="font-serif font-bold text-xl text-[#1F2933]">
                                                        {item.name}
                                                    </h3>
                                                    <p className="text-2xl font-bold text-[#D97757] mt-1">
                                                        ${item.price.toFixed(2)}
                                                    </p>
                                                </div>

                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    onClick={() => handleRemove(item.id, item.name)}
                                                    className="h-10 w-10 text-[#6B7280] hover:text-red-500 hover:bg-red-50 rounded-full shrink-0 transition-colors"
                                                >
                                                    <Trash2 className="h-5 w-5" />
                                                </Button>
                                            </div>

                                            {/* Quantity and Subtotal Row */}
                                            <div className="flex items-center justify-between mt-6 pt-4 border-t border-[#FAF9F7]">
                                                <div className="flex items-center bg-[#FAF9F7] rounded-xl p-1 border border-black/5">
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        onClick={() => handleDecrement(item.id, item.quantity)}
                                                        disabled={item.quantity <= 1}
                                                        className="h-9 w-9 text-[#1F2933] hover:bg-white rounded-lg disabled:opacity-30"
                                                    >
                                                        <Minus className="h-4 w-4" />
                                                    </Button>
                                                    <span className="w-10 text-center font-bold text-[#1F2933]">
                                                        {item.quantity}
                                                    </span>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        onClick={() => handleIncrement(item.id, item.quantity)}
                                                        disabled={item.quantity >= 99}
                                                        className="h-9 w-9 text-[#1F2933] hover:bg-white rounded-lg"
                                                    >
                                                        <Plus className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-xs font-medium text-[#6B7280] uppercase tracking-wider">Item Total</p>
                                                    <p className="text-xl font-bold text-[#1F2933]">
                                                        ${(item.price * item.quantity).toFixed(2)}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <Card className="sticky top-12 border-none shadow-[0_20px_50px_rgba(217,119,87,0.08)] bg-white rounded-[2.5rem] overflow-hidden">
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-serif font-bold text-[#1F2933] mb-8">Billing Details</h2>

                                <div className="space-y-5">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[#6B7280]">Item Subtotal</span>
                                        <span className="font-bold text-[#1F2933]">
                                            ${subtotal.toFixed(2)}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span className="text-[#6B7280]">Service & Delivery</span>
                                        <span className="font-bold">
                                            {deliveryFee === 0 ? (
                                                <span className="text-green-600 bg-green-50 px-2 py-1 rounded text-xs">FREE DELIVERY</span>
                                            ) : (
                                                <span className="text-[#1F2933]">${deliveryFee.toFixed(2)}</span>
                                            )}
                                        </span>
                                    </div>

                                    {subtotal < 30 && (
                                        <div className="bg-[#D97757]/5 border border-[#D97757]/10 rounded-2xl p-4">
                                            <p className="text-xs text-[#D97757] leading-relaxed">
                                                <span className="font-bold block mb-1">💡 Save $5.00</span>
                                                Add <span className="underline font-bold">${(30 - subtotal).toFixed(2)}</span> more to unlock <strong>Free Delivery</strong>!
                                            </p>
                                        </div>
                                    )}

                                    <Separator className="bg-[#FAF9F7]" />

                                    <div className="flex items-center justify-between py-2">
                                        <span className="font-serif text-xl font-bold text-[#1F2933]">Grand Total</span>
                                        <span className="font-bold text-[#D97757] text-3xl">
                                            ${total.toFixed(2)}
                                        </span>
                                    </div>
                                </div>

                                <Button size="lg" className="w-full mt-10 bg-[#D97757] hover:bg-[#D97757]/90 text-white h-14 rounded-2xl shadow-lg shadow-[#D97757]/20 transition-all active:scale-[0.98]" asChild>
                                    <Link href="/checkout">
                                        <ShoppingBag className="w-5 h-5 mr-2" />
                                        Complete Purchase
                                    </Link>
                                </Button>

                                {/* Trust Badges */}
                                <div className="mt-10 grid grid-cols-1 gap-4">
                                    <div className="flex items-center gap-3 p-3 bg-[#FAF9F7] rounded-xl border border-black/5">
                                        <ShieldCheck className="w-5 h-5 text-[#D97757]" />
                                        <span className="text-xs font-medium text-[#6B7280]">Encrypted Secure Payments</span>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 bg-[#FAF9F7] rounded-xl border border-black/5">
                                        <Truck className="w-5 h-5 text-[#D97757]" />
                                        <span className="text-xs font-medium text-[#6B7280]">Freshness Guarantee & Fast Delivery</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}