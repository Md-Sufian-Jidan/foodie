"use client";

import { useState } from "react";
import { useSession } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, MapPin, CheckCircle2, ChefHat, PackageCheck } from "lucide-react";

// Mock Data integrated into State
const initialOrders = [
    {
        id: "order-1",
        customerName: "John Doe",
        totalAmount: 29.99,
        status: "PENDING",
        address: "123 Main St, Cityville",
        createdAt: "10:30 AM",
        items: [
            { mealName: "Classic Beef Burger", quantity: 1, price: 8.99 },
            { mealName: "Mango Smoothie", quantity: 2, price: 4.99 },
            { mealName: "Chocolate Cake", quantity: 1, price: 6.5 },
        ],
    },
    {
        id: "order-2",
        customerName: "Alice Smith",
        totalAmount: 18.99,
        status: "PREPARING",
        address: "456 Park Ave, Townsville",
        createdAt: "02:00 PM",
        items: [
            { mealName: "Veggie Burger", quantity: 2, price: 7.99 },
            { mealName: "Mango Smoothie", quantity: 1, price: 4.99 },
        ],
    },
];

export default function ProviderOrdersPage() {
    const { data: session, isPending } = useSession();
    const [orderList, setOrderList] = useState(initialOrders);

    if (isPending) return <div className="p-10 text-center font-jakarta animate-pulse">Syncing with kitchen...</div>;
    if (!session || session.user.role !== "PROVIDER") redirect("/login");

    const updateStatus = (id: string, newStatus: string) => {
        // Here you would also call your API
        setOrderList((prev) =>
            prev.map((o) => (o.id === id ? { ...o, status: newStatus } : o))
        );
    };

    return (
        <div className="space-y-8 p-4 lg:p-8 bg-[#FAF9F7] dark:bg-[#121110] min-h-screen rounded-4xl">
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="space-y-1">
                    <h1 className="font-serif text-4xl font-bold text-[#1F2933] dark:text-[#F5F4F2]">
                        Order Queue
                    </h1>
                    <p className="text-[#6B7280] font-jakarta">Manage live orders and delivery readiness.</p>
                </div>
                <div className="flex gap-2">
                    <Badge className="bg-[#D97757]/10 text-[#D97757] border-[#D97757]/20 py-1 px-3">
                        {orderList.filter(o => o.status === 'PENDING').length} New
                    </Badge>
                    <Badge className="bg-[#6B8E7D]/10 text-[#6B8E7D] border-[#6B8E7D]/20 py-1 px-3">
                        {orderList.filter(o => o.status === 'PREPARING').length} Cooking
                    </Badge>
                </div>
            </header>

            <div className="grid gap-6">
                <AnimatePresence>
                    {orderList.map((order) => (
                        <motion.div
                            key={order.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            layout
                        >
                            <Card className="border-none shadow-sm overflow-hidden bg-white dark:bg-[#1C1A18] group">
                                <CardHeader className="flex flex-row items-center justify-between border-b border-[#6B7280]/5 bg-[#FAF9F7]/50 dark:bg-[#121110]/50 p-4">
                                    <div className="flex items-center gap-4">
                                        <div className="p-2 rounded-lg bg-white dark:bg-[#1C1A18] shadow-sm">
                                            <PackageCheck className="text-[#D97757] w-5 h-5" />
                                        </div>
                                        <div>
                                            <CardTitle className="text-lg font-serif">Order #{order.id.split('-')[1]}</CardTitle>
                                            <p className="text-xs text-[#6B7280] flex items-center gap-1 font-jakarta">
                                                <Clock className="w-3 h-3" /> Received at {order.createdAt}
                                            </p>
                                        </div>
                                    </div>
                                    <StatusBadge status={order.status} />
                                </CardHeader>

                                <CardContent className="p-6">
                                    <div className="grid md:grid-cols-3 gap-8">
                                        {/* Items Column */}
                                        <div className="md:col-span-1 space-y-3">
                                            <p className="text-[10px] uppercase tracking-widest font-bold text-[#6B7280]">Items to Prepare</p>
                                            <ul className="space-y-2">
                                                {order.items.map((item, idx) => (
                                                    <li key={idx} className="flex justify-between text-sm font-jakarta">
                                                        <span className="text-[#1F2933] dark:text-[#F5F4F2]">
                                                            <span className="font-bold text-[#D97757]">{item.quantity}x</span> {item.mealName}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Customer Column */}
                                        <div className="md:col-span-1 space-y-3">
                                            <p className="text-[10px] uppercase tracking-widest font-bold text-[#6B7280]">Delivery To</p>
                                            <div className="space-y-1">
                                                <p className="text-sm font-bold text-[#1F2933] dark:text-[#F5F4F2]">{order.customerName}</p>
                                                <p className="text-xs text-[#6B7280] flex items-start gap-1">
                                                    <MapPin className="w-3 h-3 mt-0.5 shrink-0" /> {order.address}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Actions Column */}
                                        <div className="md:col-span-1 flex flex-col justify-center gap-3">
                                            {order.status === "PENDING" && (
                                                <Button
                                                    onClick={() => updateStatus(order.id, "PREPARING")}
                                                    className="w-full bg-[#D97757] hover:bg-[#D97757]/90 text-white shadow-md"
                                                >
                                                    <ChefHat className="mr-2 w-4 h-4" /> Start Preparing
                                                </Button>
                                            )}
                                            {order.status === "PREPARING" && (
                                                <Button
                                                    onClick={() => updateStatus(order.id, "DELIVERED")}
                                                    className="w-full bg-[#6B8E7D] hover:bg-[#6B8E7D]/90 text-white shadow-md"
                                                >
                                                    <CheckCircle2 className="mr-2 w-4 h-4" /> Mark Delivered
                                                </Button>
                                            )}
                                            {order.status === "DELIVERED" && (
                                                <div className="flex items-center justify-center gap-2 text-[#6B8E7D] font-bold text-sm">
                                                    <CheckCircle2 size={18} /> Order Complete
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
}

function StatusBadge({ status }: { status: string }) {
    const styles: any = {
        PENDING: "bg-orange-100 text-orange-700 border-orange-200",
        PREPARING: "bg-blue-100 text-blue-700 border-blue-200",
        DELIVERED: "bg-emerald-100 text-emerald-700 border-emerald-200",
    };
    return (
        <Badge className={`${styles[status]} border font-jakarta`}>
            {status}
        </Badge>
    );
}