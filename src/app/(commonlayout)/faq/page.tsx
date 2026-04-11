import FAQSection from "@/components/modules/faq/FAQSection";

export const metadata = {
    title: "FAQ | MealMate",
    description:
        "Find answers to frequently asked questions about MealMate food delivery service.",
};

export default function FAQPage() {
    return (
        <main className="min-h-screen bg-[#FAF9F7] dark:bg-[#0B0F17] mt-0 md:mt-5">

            {/* HERO */}
            <section className="relative py-20 text-center overflow-hidden">

                <div className="absolute inset-0 bg-gradient-to-br from-[#FAF9F7] via-white to-[#D97757]/10 dark:from-[#0B0F17] dark:via-[#0F172A] dark:to-[#1E293B]" />

                <div className="relative max-w-3xl mx-auto px-4">

                    <h1 className="text-4xl md:text-5xl font-bold font-serif text-[#1F2933] dark:text-white">
                        Frequently Asked Questions
                    </h1>

                    <p className="mt-4 text-[#6B7280] dark:text-gray-300">
                        Everything you need to know about MealMate.
                    </p>
                </div>
            </section>

            {/* FAQ SECTION */}
            <FAQSection />
        </main>
    );
}