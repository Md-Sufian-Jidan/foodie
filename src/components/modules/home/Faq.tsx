"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        id: 1,
        question: "How does MealMate delivery work?",
        answer:
            "MealMate connects you with nearby vendors. Once you place an order, our delivery partners pick up and deliver your food quickly and safely.",
    },
    {
        id: 2,
        question: "Can I track my order in real time?",
        answer:
            "Yes! You can track your order live from preparation to delivery using our real-time tracking system.",
    },
    {
        id: 3,
        question: "Do you offer cash on delivery?",
        answer:
            "Yes, we support both online payments and cash on delivery depending on vendor availability.",
    },
    {
        id: 4,
        question: "How do I become a vendor on MealMate?",
        answer:
            "You can register as a vendor from the signup page. After verification, you can start listing your meals and receiving orders.",
    },
    {
        id: 5,
        question: "Is there a delivery fee?",
        answer:
            "Delivery fees depend on your location and vendor distance. Some offers include free delivery.",
    },
    {
        id: 6,
        question: "Can I cancel my order?",
        answer:
            "Yes, orders can be canceled before preparation starts. After that, cancellation may not be possible.",
    },
];

export default function Faq() {
    const [openId, setOpenId] = useState<number | null>(null);

    const toggle = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-3">
                        Everything you need to know about MealMate
                    </p>
                </div>

                {/* Accordion */}
                <div className="space-y-4">

                    {faqs.map((faq) => {
                        const isOpen = openId === faq.id;

                        return (
                            <div
                                key={faq.id}
                                className="rounded-2xl backdrop-blur-xl bg-white/60 dark:bg-white/10
                border border-white/20 shadow-md transition-all"
                            >
                                {/* Question */}
                                <button
                                    onClick={() => toggle(faq.id)}
                                    className="w-full flex items-center justify-between p-5 text-left"
                                >
                                    <span className="font-semibold text-gray-800 dark:text-white">
                                        {faq.question}
                                    </span>

                                    <ChevronDown
                                        className={`w-5 h-5 text-[#D97757] transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                {/* Answer */}
                                <div
                                    className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}