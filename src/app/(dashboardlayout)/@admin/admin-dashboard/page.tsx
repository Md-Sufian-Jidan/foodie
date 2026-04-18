import { getAdminDashboardStats } from "@/actions/adminDashboard";
import AdminDashboardClient from "@/components/modules/admin/AdminDashboardClient";
import { LayoutDashboard } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Admin Dashboard | MealMate - Fresh Multi-Vendor Food Delivery Platform",
    description:
        "View and manage your admin dashboard as an admin on MealMate platform.",
    keywords: [
        "admin dashboard",
        "admin",
        "dashboard",
        "mealmate admin",
    ],
    authors: [{
        name: "Md Abu Sufian Jidan",
        url: "https://mdabusufianjidan.vercel.app"
    }],
    openGraph: {
        title: "Admin Dashboard | MealMate - Fresh Food Delivered Fast",
        description:
            "View and manage your admin dashboard.",
        url: "https://mealmate-lemon.vercel.app/admin-dashboard",
        siteName: "MealMate",
        type: "website",
        images: [
            {
                url: "https://i.ibb.co/99pqNzY5/mealmate.png",
                width: 1200,
                height: 630,
                alt: "MealMate Admin Dashboard",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Admin Dashboard | MealMate - Food Delivery Platform",
        description:
            "View and manage your admin dashboard.",
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

export default async function AdminDashboard() {
    const { users, orders, categories } = await getAdminDashboardStats();

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <LayoutDashboard className="w-6 h-6 text-primary" />
                </div>
                <div>
                    <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                    <p className="text-muted-foreground">
                        Overview of your platform's performance and statistics
                    </p>
                </div>
            </div>

            <AdminDashboardClient
                users={users}
                orders={orders}
                categories={categories}
            />
        </div>
    );
}