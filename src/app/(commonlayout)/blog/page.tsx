import BlogHero from "@/components/modules/blog/BlogHero";
import BlogGrid from "@/components/modules/blog/BlogGrid";
import BlogCategories from "@/components/modules/blog/BlogCategories";
import Newsletter from "@/components/modules/home/Newsletter";
import FeaturedBlog from "@/components/modules/blog/FeaturedBlog";

export const metadata = {
    title: "MealMate Blog | Food Stories & Updates",
    description:
        "Read the latest food stories, vendor insights, recipes, and updates from MealMate.",
};

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-[#FAF9F7] dark:bg-[#0B0F17]">
            <BlogHero />
            <FeaturedBlog />
            <BlogCategories />
            <BlogGrid />
            <Newsletter />
        </main>
    );
}