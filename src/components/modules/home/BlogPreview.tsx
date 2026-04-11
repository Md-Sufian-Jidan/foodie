"use client";

import Image from "next/image";

const blogs = [
    {
        id: 1,
        title: "10 Best Foods to Try in 2026",
        image: "/blogs/blog1.jpg",
        excerpt:
            "Discover the most trending foods that are winning hearts this year across the globe...",
    },
    {
        id: 2,
        title: "How Fast Delivery Changed Food Industry",
        image: "/blogs/blog2.jpg",
        excerpt:
            "A deep dive into how modern delivery systems are transforming customer expectations...",
    },
    {
        id: 3,
        title: "Healthy Eating Made Simple",
        image: "/blogs/blog3.jpg",
        excerpt:
            "Learn how to maintain a balanced diet while still enjoying your favorite meals...",
    },
];

export default function BlogPreview() {
    return (
        <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
                        Latest Blog
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-3">
                        Insights, trends & food stories
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {blogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="group flex flex-col rounded-2xl overflow-hidden
              backdrop-blur-xl bg-white/60 dark:bg-white/10 border border-white/20
              shadow-md hover:shadow-xl hover:-translate-y-1
              transition-all duration-300"
                        >

                            {/* Image */}
                            <div className="relative h-52 w-full overflow-hidden">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                                />

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="p-5 flex flex-col flex-1">

                                {/* Title */}
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                    {blog.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 leading-relaxed flex-1">
                                    {blog.excerpt}
                                </p>

                                {/* Button */}
                                <button className="mt-4 w-full py-2 rounded-full bg-[#D97757] text-white font-medium hover:bg-[#D97757]/90 transition-all">
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}