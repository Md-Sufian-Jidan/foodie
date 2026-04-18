import { userService } from "@/services/user.service";
import { User } from "@/types";
import ProfileCard from "./ProfileCard";
import ProfileForm from "./ProfileForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Profile | MealMate - Fresh Multi-Vendor Food Delivery Platform",
    description:
        "View and manage your profile information as a customer on MealMate platform.",
    keywords: [
        "profile",
        "my profile",
        "account settings",
        "mealmate profile",
    ],
    authors: [{
        name: "Md Abu Sufian Jidan",
        url: "https://mdabusufianjidan.vercel.app"
    }],
    openGraph: {
        title: "Profile | MealMate - Fresh Food Delivered Fast",
        description:
            "View and manage your profile information.",
        url: "https://mealmate-lemon.vercel.app/dashboard/profile",
        siteName: "MealMate",
        type: "website",
        images: [
            {
                url: "https://i.ibb.co/99pqNzY5/mealmate.png",
                width: 1200,
                height: 630,
                alt: "MealMate Profile",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Profile | MealMate - Food Delivery Platform",
        description:
            "View and manage your profile information.",
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

export default async function ProfilePage() {
    const { data: user, status } = await userService.getCurrentUser();

    return (
        <div className="container mx-auto py-8 px-4">
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight">My Profile</h1>
                <p className="text-muted-foreground mt-2">
                    Manage your account information and preferences
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Profile Card - Takes 1 column on large screens */}
                <div className="lg:col-span-1">
                    <ProfileCard user={user as User} />
                </div>

                {/* Profile Form - Takes 2 columns on large screens */}
                <div className="lg:col-span-2">
                    <ProfileForm user={user as User} />
                </div>
            </div>
        </div>
    );
}