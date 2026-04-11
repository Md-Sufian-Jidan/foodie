import { Card } from "@/components/ui/card";

export default function FeaturedBlog() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-12">

            <h2 className="text-2xl font-bold mb-6 text-[#1F2933] dark:text-white">
                Featured Article
            </h2>

            <Card className="overflow-hidden rounded-3xl bg-white/30 dark:bg-white/10 backdrop-blur-xl border-0 shadow-xl grid md:grid-cols-2">

                <div className="h-64 md:h-full bg-gradient-to-br from-orange-200 to-orange-400" />

                <div className="p-6 md:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-[#1F2933] dark:text-white">
                        How MealMate is Changing Local Food Delivery
                    </h3>

                    <p className="mt-3 text-[#6B7280] dark:text-gray-300">
                        Learn how we connect local vendors with thousands of customers using smart logistics and real-time tracking.
                    </p>

                    <button className="mt-6 w-fit px-6 py-2 rounded-full bg-[#D97757] text-white hover:scale-105 transition">
                        Read More
                    </button>
                </div>
            </Card>
        </section>
    );
}