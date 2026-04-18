
import { orderActions } from "@/actions/orders";
import { MyOrders } from "@/components/modules/customer/MyOrders";
import { ShoppingBag } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "My Orders | MealMate - Fresh Multi-Vendor Food Delivery Platform",
    description:
        "View and manage your order history as a customer on MealMate platform.",
    keywords: [
        "orders",
        "my orders",
        "order history",
        "mealmate orders",
    ],
    authors: [{
        name: "Md Abu Sufian Jidan",
        url: "https://mdabusufianjidan.vercel.app"
    }],
    openGraph: {
        title: "My Orders | MealMate - Fresh Food Delivered Fast",
        description:
            "View and manage your order history.",
        url: "https://mealmate-lemon.vercel.app/dashboard/orders",
        siteName: "MealMate",
        type: "website",
        images: [
            {
                url: "https://i.ibb.co/99pqNzY5/mealmate.png",
                width: 1200,
                height: 630,
                alt: "MealMate My Orders",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "My Orders | MealMate - Food Delivery Platform",
        description:
            "View and manage your order history.",
        images: ["https://i.ibb.co/99pqNzY5/mealmate.png"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            'max-snippet': -1,
            'max-image-preview': 'large',
            'max-video-preview': -1,
        }
    },
    metadataBase: new URL("https://mealmate-lemon.vercel.app"),
};

export default async function CustomerOrdersPage() {
    const ordersData = await orderActions();
    const orders = ordersData?.data?.data || [];
    return (
        <div className="space-y-6">
            <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <ShoppingBag className="w-6 h-6 text-primary" />
                </div>
                <div>
                    <h1 className="text-3xl font-bold">My Orders</h1>
                    <p className="text-muted-foreground">
                        Track and manage your order history
                    </p>
                </div>
            </div>

            <MyOrders orders={orders} />
        </div>
    );
}
