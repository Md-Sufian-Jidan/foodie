"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import confetti from "canvas-confetti";
import { CheckCircle, Home, Package } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Order Success | MealMate - Fresh Multi-Vendor Food Delivery Platform",
    description:
        "Thank you for your order! Track your meal delivery in real-time and enjoy fresh, delicious food delivered to your doorstep.",
    keywords: [
        "order success",
        "meal delivery",
        "order tracking",
        "food delivery",
        "mealmate order",
    ],
    authors: [{
        name: "Md Abu Sufian Jidan",
        url: "https://mdabusufianjidan.vercel.app"
    }],
    openGraph: {
        title: "Order Success | MealMate - Fresh Food Delivered Fast",
        description:
            "Thank you for your order! Track your meal delivery in real-time.",
        url: "https://mealmate-lemon.vercel.app/orders/success",
        siteName: "MealMate",
        type: "website",
        images: [
            {
                url: "https://i.ibb.co/99pqNzY5/mealmate.png",
                width: 1200,
                height: 630,
                alt: "MealMate Order Success",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Order Success | MealMate - Food Delivery Platform",
        description:
            "Thank you for your order! Track your meal delivery in real-time.",
        images: ["https://i.ibb.co/99pqNzY5/mealmate.png"],
    },
    metadataBase: new URL("https://mealmate-lemon.vercel.app"),
};

export default function OrderSuccessPage() {
    useEffect(() => {
        // Trigger confetti animation on page load
        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        function randomInRange(min: number, max: number) {
            return Math.random() * (max - min) + min;
        }

        const interval: NodeJS.Timeout = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
            });
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
            });
        }, 250);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-linear-to-b from-background via-background to-muted/20 flex items-center justify-center px-4 py-12">
            <div className="max-w-2xl w-full">
                <Card className="border-2 border-green-500/20 shadow-2xl">
                    <CardHeader className="text-center pb-8 pt-12">
                        <div className="flex justify-center mb-6">
                            <div className="relative">
                                <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl animate-pulse"></div>
                                <div className="relative bg-green-500 rounded-full p-6">
                                    <CheckCircle className="w-16 h-16 text-white" />
                                </div>
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
                            Order Placed Successfully! 🎉
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Thank you for your order!
                        </p>
                    </CardHeader>

                    <CardContent className="space-y-6 pb-12">
                        <div className="bg-muted/50 rounded-lg p-6 space-y-3">
                            <h2 className="text-lg font-semibold flex items-center gap-2">
                                <Package className="w-5 h-5 text-primary" />
                                What's Next?
                            </h2>
                            <ul className="space-y-2 text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500 mt-1">✓</span>
                                    <span>
                                        Your order has been received and is being prepared by the
                                        provider
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500 mt-1">✓</span>
                                    <span>
                                        You can track your order status in real-time from your
                                        dashboard
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500 mt-1">✓</span>
                                    <span>
                                        The provider will accept and start preparing your meal
                                        shortly
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500 mt-1">✓</span>
                                    <span>
                                        You'll receive updates as your order moves through each
                                        stage
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button asChild size="lg" className="flex-1">
                                <Link href="/dashboard/orders" className="gap-2">
                                    <Package className="w-4 h-4" />
                                    Track My Order
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="flex-1">
                                <Link href="/" className="gap-2">
                                    <Home className="w-4 h-4" />
                                    Back to Home
                                </Link>
                            </Button>
                        </div>

                        <div className="text-center text-sm text-muted-foreground pt-4">
                            <p>
                                Need help?{" "}
                                <Link href="/" className="text-primary hover:underline">
                                    Contact Support
                                </Link>
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Order Timeline Info */}
                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="space-y-2">
                        <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                            <span className="text-2xl">📋</span>
                        </div>
                        <p className="text-sm font-medium">Pending</p>
                        <p className="text-xs text-muted-foreground">Order received</p>
                    </div>
                    <div className="space-y-2">
                        <div className="w-12 h-12 mx-auto bg-muted rounded-full flex items-center justify-center">
                            <span className="text-2xl">👨‍🍳</span>
                        </div>
                        <p className="text-sm font-medium">Cooking</p>
                        <p className="text-xs text-muted-foreground">Being prepared</p>
                    </div>
                    <div className="space-y-2">
                        <div className="w-12 h-12 mx-auto bg-muted rounded-full flex items-center justify-center">
                            <span className="text-2xl">🚗</span>
                        </div>
                        <p className="text-sm font-medium">On the Way</p>
                        <p className="text-xs text-muted-foreground">Out for delivery</p>
                    </div>
                    <div className="space-y-2">
                        <div className="w-12 h-12 mx-auto bg-muted rounded-full flex items-center justify-center">
                            <span className="text-2xl">✅</span>
                        </div>
                        <p className="text-sm font-medium">Delivered</p>
                        <p className="text-xs text-muted-foreground">Enjoy your meal!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};