"use client";

import Image from "next/image";

const offers = [
    {
        id: 1,
        title: "Delicious Pizza Combo",
        image: "/offers/offer1.jpg",
        discount: "20% OFF",
        description: "Get cheesy pizza with drinks at a special price.",
    },
    {
        id: 2,
        title: "Burger Feast Deal",
        image: "/offers/offer2.jpg",
        discount: "15% OFF",
        description: "Enjoy juicy burgers with crispy fries combo.",
    },
    {
        id: 3,
        title: "Healthy Meal Pack",
        image: "/offers/offer3.jpg",
        discount: "25% OFF",
        description: "Fresh and healthy meals for your daily diet.",
    },
];

export default function SpecialOffers() {
    return (
        <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
                        Special Offers
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-3">
                        Grab exclusive deals before they’re gone!
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {offers.map((offer) => (
                        <div
                            key={offer.id}
                            className="relative group rounded-2xl overflow-hidden backdrop-blur-xl bg-white/60 dark:bg-white/10 border border-white/20 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.03]"
                        >
                            {/* Image */}
                            <div className="relative h-56 w-full">
                                <Image
                                    src={offer.image}
                                    alt={offer.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                            </div>

                            {/* Discount Badge */}
                            <span className="absolute top-4 left-4 bg-[#D97757] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                                {offer.discount}
                            </span>

                            {/* Content */}
                            <div className="absolute bottom-0 p-5 text-white">
                                <h3 className="text-lg font-bold mb-1">
                                    {offer.title}
                                </h3>
                                <p className="text-sm text-gray-200 mb-3">
                                    {offer.description}
                                </p>

                                <button className="px-4 py-2 text-sm rounded-full bg-[#D97757] hover:bg-[#D97757]/90 transition-all">
                                    Order Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}