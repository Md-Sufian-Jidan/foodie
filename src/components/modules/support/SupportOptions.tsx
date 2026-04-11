import { Card } from "@/components/ui/card";
import { Headset, ShoppingBag, CreditCard, Store } from "lucide-react";

const options = [
    {
        icon: ShoppingBag,
        title: "Order Help",
        desc: "Issues with your food orders",
    },
    {
        icon: CreditCard,
        title: "Payment Issues",
        desc: "Billing & transaction support",
    },
    {
        icon: Store,
        title: "Vendor Support",
        desc: "Help for restaurant partners",
    },
    {
        icon: Headset,
        title: "General Support",
        desc: "Other technical assistance",
    },
];

export default function SupportOptions() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-16">

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

                {options.map((item, i) => (
                    <Card
                        key={i}
                        className="p-6 rounded-2xl bg-white/30 dark:bg-white/10 backdrop-blur-xl border-0 hover:scale-105 transition"
                    >
                        <item.icon className="w-8 h-8 text-[#D97757]" />

                        <h3 className="mt-4 font-bold text-[#1F2933] dark:text-white">
                            {item.title}
                        </h3>

                        <p className="text-sm text-[#6B7280] mt-2">
                            {item.desc}
                        </p>
                    </Card>
                ))}

            </div>
        </section>
    );
}