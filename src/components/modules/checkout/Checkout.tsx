"use client";

import { createOrder } from "@/actions/orders";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useCartStore } from "@/store/userCartStore";
import {
    ArrowLeft,
    CheckCircle2,
    CreditCard,
    MapPin,
    Package,
    Wallet,
    Truck,
    Info
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export function CheckoutClient({
    user,
}: {
    user: { name: string; email: string } | null;
}) {
    const [mounted, setMounted] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const router = useRouter();
    const items = useCartStore((state) => state.items);
    const clearCart = useCartStore((state) => state.clearCart);

    const [formData, setFormData] = useState({
        fullName: user?.name || "",
        phone: "",
        email: user?.email || "",
        address: "",
        notes: "",
        paymentMethod: "cod",
    });

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="min-h-screen bg-[#FAF9F7] flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <div className="h-12 w-12 border-4 border-[#D97757] border-t-transparent rounded-full animate-spin" />
                    <p className="font-serif font-bold text-[#1F2933]">Preparing your kitchen...</p>
                </div>
            </div>
        );
    }

    if (items.length === 0) return null;

    const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
    const deliveryFee = subtotal > 30 ? 0 : 5;
    const total = subtotal + deliveryFee;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.fullName || !formData.phone || !formData.address) {
            toast.error("Please fill in all required fields");
            return;
        }
        setIsProcessing(true);
        try {
            const orderData = {
                providerId: items[0]?.providerId || "",
                address: formData.address,
                items: items.map((item) => ({ mealId: item.id, quantity: item.quantity })),
            };
            const result = await createOrder(orderData);
            if (!result.data?.success) {
                toast.error(result.message || "Failed to place order");
                return;
            }
            toast.success("Order placed successfully!");
            clearCart();
            router.push("/orders/success");
        } catch (error) {
            toast.error("Failed to place order. Please try again.");
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#FAF9F7] pb-20">
            {/* Top Navigation */}
            <div className="bg-white border-b border-black/5 sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <Button variant="ghost" asChild className="hover:bg-[#FAF9F7] rounded-full group">
                        <Link href="/cart" className="flex items-center gap-2">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span className="font-sans font-bold text-sm">Review Cart</span>
                        </Link>
                    </Button>
                    <div className="hidden md:flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#D97757]" />
                        <span className="text-xs font-bold uppercase tracking-widest text-[#1F2933]">Secure Checkout</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-10">
                <div className="max-w-6xl mx-auto">
                    <header className="mb-10">
                        <h1 className="text-5xl font-serif font-bold text-[#1F2933]">Finalize Order</h1>
                        <p className="text-[#6B7280] mt-3 font-sans text-lg">Almost there! Just a few more details to bring the food home.</p>
                    </header>

                    <form onSubmit={handleSubmit} className="grid lg:grid-cols-12 gap-10">
                        {/* Left Column */}
                        <div className="lg:col-span-7 space-y-8">
                            {/* Delivery Info */}
                            <Card className="border-none shadow-[0_10px_40px_rgba(0,0,0,0.03)] rounded-[2rem] overflow-hidden">
                                <CardHeader className="bg-white pb-2">
                                    <CardTitle className="flex items-center gap-3 text-xl font-serif">
                                        <div className="p-2 bg-[#FAF9F7] rounded-xl">
                                            <Truck className="w-5 h-5 text-[#D97757]" />
                                        </div>
                                        Delivery Details
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6 pt-6">
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label className="text-xs font-bold uppercase text-[#6B7280]">Full Name</Label>
                                            <Input disabled name="fullName" value={formData.fullName} className="h-12 rounded-xl bg-[#FAF9F7] border-none font-bold" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="text-xs font-bold uppercase text-[#6B7280]">Phone Number *</Label>
                                            <Input name="phone" type="tel" placeholder="017XXXXXXXX" value={formData.phone} onChange={handleInputChange} required className="h-12 rounded-xl border-black/5 focus-visible:ring-[#D97757]" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-xs font-bold uppercase text-[#6B7280]">Delivery Address *</Label>
                                        <Textarea name="address" placeholder="House no, Flat, Street address..." value={formData.address} onChange={handleInputChange} required rows={3} className="rounded-2xl border-black/5 focus-visible:ring-[#D97757]" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-xs font-bold uppercase text-[#6B7280]">Chef Instructions (Optional)</Label>
                                        <Input name="notes" placeholder="e.g. Please make it spicy or leave at the door." value={formData.notes} onChange={handleInputChange} className="h-12 rounded-xl border-black/5 focus-visible:ring-[#D97757]" />
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Payment Method */}
                            <Card className="border-none shadow-[0_10px_40px_rgba(0,0,0,0.03)] rounded-[2rem]">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 text-xl font-serif">
                                        <div className="p-2 bg-[#FAF9F7] rounded-xl">
                                            <Wallet className="w-5 h-5 text-[#D97757]" />
                                        </div>
                                        Payment Method
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <RadioGroup value={formData.paymentMethod} onValueChange={(v) => setFormData(p => ({ ...p, paymentMethod: v }))} className="grid gap-4">
                                        <Label htmlFor="cod" className={cn(
                                            "flex items-center justify-between p-5 rounded-2xl border-2 transition-all cursor-pointer",
                                            formData.paymentMethod === "cod" ? "border-[#D97757] bg-[#D97757]/5" : "border-[#FAF9F7] hover:border-black/5"
                                        )}>
                                            <div className="flex items-center gap-4">
                                                <RadioGroupItem value="cod" id="cod" className="text-[#D97757]" />
                                                <div>
                                                    <p className="font-bold text-[#1F2933]">Cash on Delivery</p>
                                                    <p className="text-xs text-[#6B7280]">Pay when your meal arrives</p>
                                                </div>
                                            </div>
                                            <Package className="w-6 h-6 text-[#D97757]" />
                                        </Label>

                                        <div className="flex items-center justify-between p-5 rounded-2xl border-2 border-dashed border-gray-200 opacity-60">
                                            <div className="flex items-center gap-4">
                                                <div className="h-4 w-4 rounded-full border border-gray-300" />
                                                <div>
                                                    <p className="font-bold text-[#1F2933]">Digital Payment</p>
                                                    <p className="text-xs text-[#6B7280]">bKash, Card (Coming Soon)</p>
                                                </div>
                                            </div>
                                            <CreditCard className="w-6 h-6 text-gray-400" />
                                        </div>
                                    </RadioGroup>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Right Column - Summary */}
                        <div className="lg:col-span-5">
                            <Card className="sticky top-28 border-none shadow-[0_30px_60px_rgba(217,119,87,0.12)] bg-white rounded-[2.5rem] overflow-hidden">
                                <CardHeader className="p-8 pb-0">
                                    <CardTitle className="font-serif text-2xl">Order Summary</CardTitle>
                                </CardHeader>
                                <CardContent className="p-8 space-y-6">
                                    <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                                        {items.map((item) => (
                                            <div key={item.id} className="flex items-center gap-4">
                                                <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-[#FAF9F7] shrink-0 border border-black/5">
                                                    {item.image ? (
                                                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                                                    ) : (
                                                        <div className="flex items-center justify-center h-full"><Package className="h-5 w-5 text-[#D97757]/20" /></div>
                                                    )}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="font-bold text-sm text-[#1F2933] truncate">{item.name}</p>
                                                    <p className="text-xs text-[#6B7280]">Qty: {item.quantity}</p>
                                                </div>
                                                <p className="font-bold text-sm">${(item.price * item.quantity).toFixed(2)}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <Separator className="bg-[#FAF9F7]" />

                                    <div className="space-y-3">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-[#6B7280]">Subtotal</span>
                                            <span className="font-bold text-[#1F2933]">${subtotal.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-[#6B7280]">Delivery Fee</span>
                                            <span className="font-bold text-[#1F2933]">
                                                {deliveryFee === 0 ? <span className="text-green-600 font-bold">FREE</span> : `$${deliveryFee.toFixed(2)}`}
                                            </span>
                                        </div>
                                        <div className="pt-4 flex justify-between items-end">
                                            <div>
                                                <span className="block font-serif text-xl font-bold text-[#1F2933]">Grand Total</span>
                                                <span className="text-[10px] uppercase tracking-widest text-[#6B7280]">Inclusive of all taxes</span>
                                            </div>
                                            <span className="text-4xl font-bold text-[#D97757]">${total.toFixed(2)}</span>
                                        </div>
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={isProcessing}
                                        className="w-full h-16 rounded-2xl bg-[#D97757] hover:bg-[#D97757]/90 text-white font-bold text-lg shadow-xl shadow-[#D97757]/20 transition-all active:scale-[0.98]"
                                    >
                                        {isProcessing ? (
                                            <div className="flex items-center gap-2">
                                                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                Processing...
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-2">
                                                <CheckCircle2 className="w-5 h-5" />
                                                Place My Order
                                            </div>
                                        )}
                                    </Button>

                                    <div className="flex items-center justify-center gap-2 p-4 bg-[#FAF9F7] rounded-xl border border-black/5">
                                        <Info className="w-4 h-4 text-[#D97757]" />
                                        <p className="text-[10px] text-[#6B7280] leading-tight">
                                            By clicking "Place My Order", you agree to MealMate&apos;s Terms of Service.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}