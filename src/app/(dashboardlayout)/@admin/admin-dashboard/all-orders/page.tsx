import { getAllOrdersAdmin } from "@/actions/orders";
import AllOrdersClient from "@/components/modules/admin/AllOrders";
import { ShoppingBag } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "All Orders | MealMate - Fresh Multi-Vendor Food Delivery Platform",
    description:
        "View and manage all orders as an admin on MealMate platform.",
    keywords: [
        "all orders",
        "orders",
        "order management",
        "mealmate orders",
    ],
    authors: [{
        name: "Md Abu Sufian Jidan",
        url: "https://mdabusufianjidan.vercel.app"
    }],
    openGraph: {
        title: "All Orders | MealMate - Fresh Food Delivered Fast",
        description:
            "View and manage all orders.",
        url: "https://mealmate-lemon.vercel.app/admin-dashboard/all-orders",
        siteName: "MealMate",
        type: "website",
        images: [
            {
                url: "https://i.ibb.co/99pqNzY5/mealmate.png",
                width: 1200,
                height: 630,
                alt: "MealMate All Orders",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "All Orders | MealMate - Food Delivery Platform",
        description:
            "View and manage all orders.",
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

export default async function AllOrdersPage() {
    const { data: response } = await getAllOrdersAdmin();
    const orders = response?.data || [];

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <ShoppingBag className="w-6 h-6 text-primary" />
                </div>
                <div>
                    <h1 className="text-3xl font-bold">All Orders</h1>
                    <p className="text-muted-foreground">
                        Monitor and manage all orders across the platform
                    </p>
                </div>
            </div>

            <AllOrdersClient orders={orders} />
        </div>
    );
}