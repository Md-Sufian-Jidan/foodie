import { getAllUsers } from "@/actions/users";
import AllUsersClient from "@/components/modules/admin/AllUsers";
import { Users } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "All Users | MealMate - Fresh Multi-Vendor Food Delivery Platform",
    description:
        "View and manage all registered users as an admin on MealMate platform.",
    keywords: [
        "all users",
        "users",
        "user management",
        "mealmate users",
    ],
    authors: [{
        name: "Md Abu Sufian Jidan",
        url: "https://mdabusufianjidan.vercel.app"
    }],
    openGraph: {
        title: "All Users | MealMate - Fresh Food Delivered Fast",
        description:
            "View and manage all registered users.",
        url: "https://mealmate-lemon.vercel.app/admin-dashboard/all-users",
        siteName: "MealMate",
        type: "website",
        images: [
            {
                url: "https://i.ibb.co/99pqNzY5/mealmate.png",
                width: 1200,
                height: 630,
                alt: "MealMate All Users",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "All Users | MealMate - Food Delivery Platform",
        description:
            "View and manage all registered users.",
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

export default async function AllUsersPage() {
    const { data: response } = await getAllUsers();
    const users = response?.data || [];

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                    <h1 className="text-3xl font-bold">All Users</h1>
                    <p className="text-muted-foreground">
                        Manage and monitor all registered users
                    </p>
                </div>
            </div>

            <AllUsersClient users={users} />
        </div>
    );
}