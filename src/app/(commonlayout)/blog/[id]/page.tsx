import { notFound } from "next/navigation";
import { Card } from "@/components/ui/card";

export const metadata = {
    title: "Blog Details | MealMate",
    description: "Read detailed food stories and updates from MealMate.",
};

// 🔥 Dummy data (replace with DB later)
const blogs = [
    {
        id: "1",
        title: "How MealMate is Changing Food Delivery",
        image: "/blog/blog1.jpg",
        author: "MealMate Team",
        date: "April 11, 2026",
        readTime: "5 min read",
        content: `
MealMate is revolutionizing local food delivery by connecting customers with trusted vendors.

We focus on:
- Fast delivery
- Quality food
- Real-time tracking

Our mission is to empower local kitchens and bring fresh meals to your doorstep.
        `,
    },
];

export default async function BlogDetailsPage({ params, }: { params: { id: string }; }) {
    const { id } = await params;
    const blog = blogs.find((b) => b.id === id);

    if (!blog) return notFound();

    return (
        <main className="min-h-screen bg-[#FAF9F7] dark:bg-[#0B0F17]">

            {/* HERO */}
            <section className="relative py-20 overflow-hidden">

                <div className="absolute inset-0 bg-gradient-to-br from-[#FAF9F7] via-white to-[#D97757]/10 dark:from-[#0B0F17] dark:via-[#0F172A] dark:to-[#1E293B]" />

                <div className="relative max-w-4xl mx-auto px-4 text-center">

                    <h1 className="text-3xl md:text-5xl font-bold font-serif text-[#1F2933] dark:text-white">
                        {blog.title}
                    </h1>

                    <div className="mt-4 text-sm text-[#6B7280] dark:text-gray-300 flex justify-center gap-4 flex-wrap">
                        <span>✍️ {blog.author}</span>
                        <span>📅 {blog.date}</span>
                        <span>⏱ {blog.readTime}</span>
                    </div>
                </div>
            </section>

            {/* CONTENT */}
            <section className="max-w-4xl mx-auto px-4 py-12">

                {/* Featured Image */}
                <Card className="overflow-hidden rounded-3xl border-0 bg-white/30 dark:bg-white/10 backdrop-blur-xl shadow-xl mb-10">
                    <div className="h-72 bg-gradient-to-br from-orange-200 to-orange-400" />
                </Card>

                {/* Article */}
                <Card className="p-8 rounded-3xl border-0 bg-white/30 dark:bg-white/10 backdrop-blur-xl shadow-xl">

                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        {blog.content.split("\n").map((line, i) => (
                            <p key={i} className="mb-4 text-[#6B7280] dark:text-gray-300">
                                {line}
                            </p>
                        ))}
                    </div>

                </Card>
            </section>

            {/* RELATED POSTS */}
            <section className="max-w-7xl mx-auto px-4 py-16">

                <h2 className="text-2xl font-bold mb-6 text-[#1F2933] dark:text-white">
                    Related Articles
                </h2>

                <div className="grid md:grid-cols-3 gap-6">

                    {[1, 2, 3].map((item) => (
                        <Card
                            key={item}
                            className="p-5 rounded-2xl bg-white/30 dark:bg-white/10 backdrop-blur-xl border-0 hover:scale-105 transition"
                        >
                            <div className="h-40 bg-gradient-to-br from-orange-200 to-orange-400 rounded-xl mb-4" />

                            <h3 className="font-bold text-[#1F2933] dark:text-white">
                                Related Blog {item}
                            </h3>

                            <p className="text-sm text-[#6B7280] mt-2">
                                Short description about food story or vendor update.
                            </p>

                            <button className="mt-4 text-[#D97757] font-medium">
                                Read More →
                            </button>
                        </Card>
                    ))}

                </div>
            </section>

        </main>
    );
}