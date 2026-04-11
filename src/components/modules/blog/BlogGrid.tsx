import { Card } from "@/components/ui/card";

const blogs = Array.from({ length: 6 }).map((_, i) => ({
    title: `Food Blog Title ${i + 1}`,
    desc: "Discover amazing food stories and vendor insights.",
}));

export default function BlogGrid() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-10">

            <h2 className="text-2xl font-bold mb-6 text-[#1F2933] dark:text-white">
                Latest Articles
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {blogs.map((blog, i) => (
                    <Card
                        key={i}
                        className="p-5 rounded-2xl bg-white/30 dark:bg-white/10 backdrop-blur-xl border-0 hover:scale-105 transition"
                    >
                        <div className="h-40 rounded-xl bg-gradient-to-br from-orange-200 to-orange-400 mb-4" />

                        <h3 className="font-bold text-[#1F2933] dark:text-white">
                            {blog.title}
                        </h3>

                        <p className="text-sm text-[#6B7280] mt-2">
                            {blog.desc}
                        </p>

                        <button className="mt-4 text-[#D97757] font-medium">
                            Read More →
                        </button>
                    </Card>
                ))}
            </div>
        </section>
    );
}