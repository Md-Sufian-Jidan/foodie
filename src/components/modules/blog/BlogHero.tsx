"use client";

export default function BlogHero() {
    return (
        <section className="relative py-20 text-center overflow-hidden">

            <div className="absolute inset-0 bg-gradient-to-br from-[#FAF9F7] via-white to-[#D97757]/10 dark:from-[#0B0F17] dark:via-[#0F172A] dark:to-[#1E293B]" />

            <div className="relative max-w-3xl mx-auto px-4">

                <h1 className="text-4xl md:text-5xl font-bold font-serif text-[#1F2933] dark:text-white">
                    MealMate Blog
                </h1>

                <p className="mt-4 text-[#6B7280] dark:text-gray-300">
                    Discover food stories, vendor insights, delivery tips, and culinary inspiration.
                </p>

                {/* Search */}
                <div className="mt-8">
                    <input
                        placeholder="Search articles..."
                        className="w-full md:w-2/3 px-5 py-3 rounded-full bg-white/40 dark:bg-white/10 backdrop-blur-xl border border-white/20 focus:outline-none"
                    />
                </div>
            </div>
        </section>
    );
}