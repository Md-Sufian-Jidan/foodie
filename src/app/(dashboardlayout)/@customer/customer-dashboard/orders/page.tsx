"use client";

import OrderCard from "@/components/modules/customer/orders/OrderCard";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";

const orders = [
    {
        id: "MM-1023",
        total: 450,
        status: "DELIVERED",
        itemsCount: 3,
        createdAt: "12 Sep 2024",
    },
    {
        id: "MM-1024",
        total: 320,
        status: "PREPARING",
        itemsCount: 2,
        createdAt: "14 Sep 2024",
    },
    {
        id: "MM-1025",
        total: 890,
        status: "PENDING",
        itemsCount: 5,
        createdAt: "15 Sep 2024",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export default function OrdersPage() {
    return (
        <div className="min-h-screen dark:bg-[#121110] p-6 lg:p-10 space-y-10">
            {/* Header Section */}
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="space-y-2">
                    <h1 className="font-serif text-4xl font-bold text-[#1F2933] dark:text-[#F5F4F2]">
                        Order History
                    </h1>
                    <p className="font-jakarta text-[#6B7280] dark:text-[#B3B3B0]">
                        Manage your cravings and track your recent feasts.
                    </p>
                </div>

                {/* Subtle Search/Filter bar for better UX */}
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
                        <Input
                            placeholder="Search orders..."
                            className="pl-10 bg-white dark:bg-[#1C1A18] border-none shadow-sm w-full md:w-64 focus-visible:ring-[#D97757]"
                        />
                    </div>
                    <button className="p-2.5 rounded-md bg-white dark:bg-[#1C1A18] text-[#1F2933] dark:text-[#F5F4F2] shadow-sm hover:text-[#D97757] transition-colors">
                        <Filter className="w-5 h-5" />
                    </button>
                </div>
            </header>

            {/* Orders List */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-4 grid grid-cols-3 gap-5"
            >
                {orders.map((order) => (
                    <motion.div
                        key={order.id}
                        variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: { opacity: 1, y: 0 }
                        }}
                    >
                        <OrderCard order={order} />
                    </motion.div>
                ))}

                {orders.length === 0 && (
                    <div className="text-center py-20 bg-white dark:bg-[#1C1A18] rounded-2xl border-2 border-dashed border-[#6B7280]/10">
                        <p className="font-serif text-xl text-[#6B7280]">No orders found. Time to eat?</p>
                    </div>
                )}
            </motion.div>
        </div>
    );
}