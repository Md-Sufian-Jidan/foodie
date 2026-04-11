import SupportFaq from "@/components/modules/support/SupportFaq";
import SupportForm from "@/components/modules/support/SupportForm";
import SupportHero from "@/components/modules/support/SupportHero";
import SupportOptions from "@/components/modules/support/SupportOptions";

export const metadata = {
    title: "Support | MealMate",
    description:
        "Get help with orders, payments, vendors, and technical issues at MealMate support center.",
};

export default function SupportPage() {
    return (
        <main className="min-h-screen bg-[#FAF9F7] dark:bg-[#0B0F17]">
            <SupportHero />
            <SupportOptions />
            <SupportForm />
            <SupportFaq />
        </main>
    );
}