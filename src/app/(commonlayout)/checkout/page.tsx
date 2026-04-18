import { CheckoutClient } from "@/components/modules/checkout/Checkout";
import { userService } from "@/services/user.service";
import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Checkout | MealMate - Fresh Multi-Vendor Food Delivery Platform",
    description:
        "Review and checkout your selected meals from top local vendors with fast delivery.",
    keywords: [
        "cart",
        "checkout",
        "food delivery",
        "mealmate cart",
        "order food",
    ],
    authors: [{
        name: "Md Abu Sufian Jidan",
        url: "https://mdabusufianjidan.vercel.app"
    }],
    openGraph: {
        title: "Cart | MealMate - Fresh Food Delivered Fast",
        description:
            "Review and checkout your selected meals with fast delivery.",
        url: "https://mealmate-lemon.vercel.app/cart",
        siteName: "MealMate",
        type: "website",
        images: [
            {
                url: "https://i.ibb.co/99pqNzY5/mealmate.png",
                width: 1200,
                height: 630,
                alt: "MealMate Cart",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Cart | MealMate - Food Delivery Platform",
        description:
            "Review and checkout your selected meals with fast delivery.",
        images: ["https://i.ibb.co/99pqNzY5/mealmate.png"],
    },
    metadataBase: new URL("https://mealmate-lemon.vercel.app"),
};

export const dynamic = "force-dynamic";
export default async function CheckoutPage() {
    const { data } = await userService.getSession();
    if (!data?.user) {
        redirect("/login?redirect=/checkout");
    }

    return <CheckoutClient user={data?.user} />;
}