import AboutCallToAction from "@/components/modules/about/AboutCallToAction";
import AboutCustomerTrust from "@/components/modules/about/AboutCustomerTrust";
import AboutHero from "@/components/modules/about/AboutHero";
import AboutHowItWorks from "@/components/modules/about/AboutHowItWorks";
import AboutMeetVendors from "@/components/modules/about/AboutMeetVendors";
import AboutMissionVision from "@/components/modules/about/AboutMissionVision";
import AboutOurStory from "@/components/modules/about/AboutOurStory";
import AboutServiceCoverage from "@/components/modules/about/AboutServiceCoverage";
import AboutWhyMealMate from "@/components/modules/about/AboutWhyMealMate";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | MealMate - Fresh Multi-Vendor Food Delivery Platform",
    description:
        "Order fresh meals from trusted local vendors. MealMate connects food lovers with restaurants, home chefs, and delivery partners in real-time.",
    keywords: [
        "food delivery",
        "multi vendor food app",
        "meal delivery",
        "order food online",
        "restaurant delivery",
        "home cooked food",
    ],
    authors: [{
        name: "Md Abu Sufian Jidan",
        url: "https://mdabusufianjidan.vercel.app"
    }],
    openGraph: {
        title: "About | MealMate - Fresh Food Delivered Fast",
        description:
            "Discover, order, and enjoy meals from top local vendors with real-time tracking.",
        url: "https://mealmate-lemon.vercel.app/about",
        siteName: "MealMate",
        type: "website",
        images: [
            {
                url: "https://i.ibb.co/99pqNzY5/mealmate.png",
                width: 1200,
                height: 630,
                alt: "MealMate Food Delivery",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "About | MealMate - Food Delivery Platform",
        description:
            "Order delicious meals from trusted vendors with fast delivery.",
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

export default function AboutPage() {
    return (
        <main>
            <AboutHero />
            <AboutOurStory />
            <AboutMissionVision />
            <AboutHowItWorks />
            <AboutMeetVendors />
            <AboutCustomerTrust />
            <AboutWhyMealMate />
            <AboutServiceCoverage />
            <AboutCallToAction />
        </main>
    );
};

