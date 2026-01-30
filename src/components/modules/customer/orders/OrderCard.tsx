"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { OrderStatusBadge } from "./OrderStatusBadge";
import { motion } from "framer-motion";
import { CalendarDays, ShoppingBag } from "lucide-react";

type Order = {
    id: string;
    total: number;
    status: string;
    createdAt: string;
    itemsCount: number;
};

export default function OrderCard({ order }: { order: Order }) {
    return (
        <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
        >
            <Card className="group flex items-center justify-between p-5 border-none shadow-sm bg-white dark:bg-[#1C1A18] hover:shadow-md transition-all">
                <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                        <h3 className="font-serif text-lg font-bold text-[#1F2933] dark:text-[#F5F4F2]">
                            Order <span className="text-[#D97757]">#{order.id.slice(-5)}</span>
                        </h3>
                        <OrderStatusBadge status={order.status} />
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-jakarta text-[#6B7280] dark:text-[#B3B3B0]">
                        <span className="flex items-center gap-1.5">
                            <ShoppingBag className="w-3.5 h-3.5" />
                            {order.itemsCount} {order.itemsCount === 1 ? 'item' : 'items'}
                        </span>
                        <span className="font-semibold text-[#1F2933] dark:text-[#F5F4F2]">
                            ₹{order.total.toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs opacity-80">
                            <CalendarDays className="w-3.5 h-3.5" />
                            {order.createdAt}
                        </span>
                    </div>
                </div>

                <div className="flex items-end">
                    <Link
                        href={`/customer-dashboard/orders/${order.id}`}
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FAF9F7] dark:bg-[#121110] text-[#D97757] dark:text-[#E08B6B] hover:bg-[#D97757] hover:text-white dark:hover:bg-[#E08B6B] dark:hover:text-[#121110] transition-all"
                    >
                        <span className="sr-only">View Order</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20" height="20"
                            viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2.5"
                            strokeLinecap="round" strokeLinejoin="round"
                        >
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </Link>
                </div>
            </Card>
        </motion.div>
    );
}