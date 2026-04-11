"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const faqs = [
    {
        question: "How does MealMate work?",
        answer:
            "MealMate connects you with local food vendors. You can browse meals, place orders, and get fast delivery.",
    },
    {
        question: "Is online payment secure?",
        answer:
            "Yes, we use secure payment gateways to ensure all transactions are safe and encrypted.",
    },
    {
        question: "Can I become a vendor?",
        answer:
            "Absolutely! You can register as a vendor and list your meals to reach thousands of customers.",
    },
    {
        question: "How fast is delivery?",
        answer:
            "Delivery time depends on your location, but most orders are delivered within 30–45 minutes.",
    },
    {
        question: "Do you offer refunds?",
        answer:
            "Yes, refunds are available for incorrect or unsatisfactory orders based on our policy.",
    },
];

export default function FAQSection() {
    return (
        <section className="max-w-4xl mx-auto px-4 py-16">

            <Card className="p-6 md:p-10 rounded-3xl border-0 bg-white/30 dark:bg-white/10 backdrop-blur-xl shadow-xl">

                <Accordion type="single" collapsible className="w-full space-y-4">

                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="border border-white/20 dark:border-white/10 rounded-xl px-4"
                        >
                            <AccordionTrigger className="text-left text-[#1F2933] dark:text-white font-medium">
                                {faq.question}
                            </AccordionTrigger>

                            <AccordionContent className="text-[#6B7280] dark:text-gray-300 text-sm">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}

                </Accordion>

            </Card>
        </section>
    );
}