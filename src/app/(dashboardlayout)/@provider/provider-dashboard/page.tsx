'use client'

import { useEffect, useState } from "react";
import { useSession } from "@/lib/auth-client";
import StatCard from "@/components/modules/customer/customer-dashboard/StatCard";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PlusCircle, Utensils, TrendingUp, Clock } from "lucide-react";
import OrdersChart from "@/components/modules/customer/customer-dashboard/OrdersChat";
import Link from "next/link";
import { providerService } from "@/services/provider.service";

export default function ProviderDashboard() {
    const { data, isPending } = useSession();
    const [stats, setStats] = useState({
        totalOrders: 0,
        pendingOrders: 0,
        completedOrders: 0,
        totalRevenue: 0,
    });

    const getProviderStats = async () => {

        const { data, error } = await providerService.getProviderStats();
        if (error) {
            console.log("Error fetching stats:", error);
            return;
        }
        setStats(data.data || {
            totalUsers: 0,
            totalOrders: 0,
            totalProviders: 0,
        });
    };

    useEffect(() => {
        getProviderStats();
    }, []);

    if (isPending) return (
        <div className="flex items-center justify-center min-h-[60vh]">
            <div className="w-8 h-8 border-4 border-[#D97757] border-t-transparent rounded-full animate-spin" />
        </div>
    );

    return (
        <div className="max-w-7xl mx-auto space-y-10 p-4 lg:p-8 bg-[#FAF9F7] dark:bg-[#121110] min-h-screen rounded-4xl">
            {/* Header with Quick Actions */}
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#6B7280]/10 pb-8">
                <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[#D97757] font-semibold text-sm uppercase tracking-widest">
                        <TrendingUp size={16} />
                        Business Overview
                    </div>
                    <h1 className="font-serif text-4xl font-bold text-[#1F2933] dark:text-[#F5F4F2]">
                        Kitchen Command, {data?.user.name.split(' ')[0]}
                    </h1>
                </div>

                <div className="flex items-center gap-3">
                    <Button variant="outline" className="border-[#D97757] text-[#D97757] hover:bg-[#D97757] hover:text-white transition-all">
                        <Clock className="mr-2 h-4 w-4" />
                        Kitchen Status: Open
                    </Button>
                    <Link href='/provider-dashboard/create-meal'>
                        <Button className="bg-[#D97757] hover:bg-[#D97757]/90 text-white shadow-md hover:cursor-pointer">
                            <PlusCircle className="mr-2 h-4 w-4" />
                            Add New Dish
                        </Button>
                    </Link>
                </div>
            </header>

            {/* Business Stats Grid */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            >
                <StatCard title="Active Orders" value={stats.pendingOrders.toString()} />
                <StatCard title="Lifetime Orders" value={stats.totalOrders.toString()} />
                <StatCard title="Monthly Revenue" value={`₹${stats.totalRevenue.toLocaleString()}`} />
                <StatCard title="Completion Rate" value="98%" />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Revenue/Orders Chart */}
                <div className="lg:col-span-2 space-y-4">
                    <h2 className="font-serif text-2xl font-bold text-[#1F2933] dark:text-[#F5F4F2]">Sales Performance</h2>
                    <div className="bg-white dark:bg-[#1C1A18] rounded-2xl p-6 shadow-sm">
                        <OrdersChart data={[
                            { month: "Mon", orders: 12 },
                            { month: "Tue", orders: 19 },
                            { month: "Wed", orders: 15 },
                            { month: "Thu", orders: 22 },
                            { month: "Fri", orders: 30 },
                            { month: "Sat", orders: 45 },
                            { month: "Sun", orders: 38 },
                        ]} />
                    </div>
                </div>

                {/* Quick Management Panel */}
                <div className="space-y-6">
                    <h2 className="font-serif text-2xl font-bold text-[#1F2933] dark:text-[#F5F4F2]">Quick Links</h2>
                    <div className="grid gap-4">
                        <QuickLinkCard icon={<Utensils />} title="Manage Menu" description="Update prices & availability" />
                        <QuickLinkCard icon={<Clock />} title="Kitchen Timing" description="Set your operating hours" />
                    </div>
                </div>
            </div>
        </div>
    );
}

function QuickLinkCard({ icon, title, description }: any) {
    return (
        <motion.div
            whileHover={{ x: 5 }}
            className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-[#1C1A18] shadow-sm border border-transparent hover:border-[#D97757]/20 transition-all cursor-pointer group"
        >
            <div className="p-3 rounded-lg bg-[#FAF9F7] dark:bg-[#121110] text-[#D97757] group-hover:bg-[#D97757] group-hover:text-white transition-colors">
                {icon}
            </div>
            <div>
                <p className="font-semibold text-[#1F2933] dark:text-[#F5F4F2]">{title}</p>
                <p className="text-xs text-[#6B7280] dark:text-[#B3B3B0]">{description}</p>
            </div>
        </motion.div>
    );
}