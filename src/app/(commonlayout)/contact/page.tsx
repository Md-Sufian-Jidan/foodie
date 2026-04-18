import AboutCallToAction from '@/components/modules/about/AboutCallToAction';
import ContactForm from '@/components/modules/contact/ContactForm';
import ContactHero from '@/components/modules/contact/ContactHero';
import ContactInfo from '@/components/modules/contact/ContactInfo';
import ContactMap from '@/components/modules/contact/ContactMap';
import Faq from '@/components/modules/home/Faq';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contact Us | MealMate - Fresh Multi-Vendor Food Delivery Platform",
    description:
        "Get in touch with MealMate for support, feedback, or business inquiries. We're here to help you enjoy fresh, local food delivered fast.",
    keywords: [
        "contact",
        "support",
        "feedback",
        "business inquiry",
        "mealmate contact",
        "food delivery support",
    ],
    authors: [{
        name: "Md Abu Sufian Jidan",
        url: "https://mdabusufianjidan.vercel.app"
    }],
    openGraph: {
        title: "Contact Us | MealMate - Fresh Food Delivered Fast",
        description:
            "Get in touch with MealMate for support, feedback, or business inquiries.",
        url: "https://mealmate-lemon.vercel.app/contact",
        siteName: "MealMate",
        type: "website",
        images: [
            {
                url: "https://i.ibb.co/99pqNzY5/mealmate.png",
                width: 1200,
                height: 630,
                alt: "MealMate Contact",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Us | MealMate - Food Delivery Platform",
        description:
            "Get in touch with MealMate for support, feedback, or business inquiries.",
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

const ContactPage = () => {
    return (
        <main>
            <ContactHero />
            <ContactInfo />
            <ContactForm />
            <ContactMap />
            <Faq />
            <AboutCallToAction />
        </main>
    );
};

export default ContactPage;