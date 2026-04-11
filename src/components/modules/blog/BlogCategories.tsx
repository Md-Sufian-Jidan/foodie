const categories = ["All", "Food Tips", "Vendor Stories", "Recipes", "Delivery"];

export default function BlogCategories() {
    return (
        <div className="max-w-7xl mx-auto px-4 mb-8 flex gap-3 flex-wrap">

            {categories.map((cat, i) => (
                <button
                    key={i}
                    className="px-4 py-2 rounded-full bg-white/30 dark:bg-white/10 backdrop-blur-xl border border-white/20 text-sm hover:bg-[#D97757] hover:text-white transition"
                >
                    {cat}
                </button>
            ))}

        </div>
    );
}