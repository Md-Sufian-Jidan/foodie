'use client'

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import StatCard from "@/components/modules/customer/customer-dashboard/StatCard";
import { adminService } from "@/services/admin.service";
import {
    Users,
    ShoppingBag,
    Store,
    Activity,
    ShieldCheck,
    ArrowUpRight,
    Search
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AdminDashboardPage() {
    const [stats, setStats] = useState({
        totalUsers: 0,
        totalOrders: 0,
        totalProviders: 0,
    });

    useEffect(() => {
        async function fetchStats() {
            // Mocking for visual consistency, replace with your actual service call
            const data = {
                totalUsers: 1240,
                totalOrders: 856,
                totalProviders: 42,
            };
            setStats(data);
        }
        fetchStats();
    }, []);

    return (
        <div className="space-y-10 p-4 lg:p-8 bg-[#FAF9F7] dark:bg-[#121110] min-h-screen rounded-4xl">
            {/* Admin Header */}
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#6B7280]/10 pb-8">
                <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[#6B8E7D] font-bold text-xs uppercase tracking-[0.2em]">
                        <ShieldCheck size={14} />
                        System Administrator
                    </div>
                    <h1 className="font-serif text-4xl font-bold text-[#1F2933] dark:text-[#F5F4F2]">
                        Platform Control
                    </h1>
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto">
                    <div className="relative flex-1 md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280] w-4 h-4" />
                        <Input
                            placeholder="Search orders, users..."
                            className="pl-10 bg-white dark:bg-[#1C1A18] border-none ring-1 ring-[#6B7280]/10 focus-visible:ring-[#D97757]"
                        />
                    </div>
                    <Button className="bg-[#1F2933] hover:bg-[#1F2933]/90 text-white dark:bg-[#F5F4F2] dark:text-[#121110]">
                        Reports
                    </Button>
                </div>
            </header>

            {/* Admin Stats Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                    <StatCard
                        title="Total Community"
                        value={stats.totalUsers.toLocaleString()}
                    />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                    <StatCard
                        title="Platform Orders"
                        value={stats.totalOrders.toLocaleString()}
                    />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                    <StatCard
                        title="Active Kitchens"
                        value={stats.totalProviders.toLocaleString()}
                    />
                </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* System Health Section */}
                <div className="lg:col-span-1 space-y-6">
                    <h2 className="font-serif text-2xl font-bold text-[#1F2933] dark:text-[#F5F4F2]">System Health</h2>
                    <div className="bg-white dark:bg-[#1C1A18] p-6 rounded-2xl shadow-sm border border-[#6B7280]/5 space-y-6">
                        <HealthItem label="Server Latency" value="24ms" status="optimal" />
                        <HealthItem label="API Uptime" value="99.9%" status="optimal" />
                        <HealthItem label="Payment Gateway" value="Active" status="optimal" />

                        <div className="pt-4 mt-4 border-t border-[#6B7280]/10">
                            <Button variant="ghost" className="w-full text-[#D97757] hover:bg-[#D97757]/5 hover:text-[#D97757]">
                                View Full Logs <ArrowUpRight className="ml-2 w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Quick Management Area */}
                <div className="lg:col-span-2 space-y-6">
                    <h2 className="font-serif text-2xl font-bold text-[#1F2933] dark:text-[#F5F4F2]">Quick Management</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <AdminActionCard
                            icon={<Users className="w-5 h-5" />}
                            title="User Moderation"
                            desc="Manage customer accounts and permissions."
                        />
                        <AdminActionCard
                            icon={<Store className="w-5 h-5" />}
                            title="Provider Verifications"
                            desc="Review 5 pending kitchen applications."
                            count={5}
                        />
                        <AdminActionCard
                            icon={<ShoppingBag className="w-5 h-5" />}
                            title="Global Orders"
                            desc="Track and manage all platform shipments."
                        />
                        <AdminActionCard
                            icon={<Activity className="w-5 h-5" />}
                            title="Revenue Analytics"
                            desc="Detailed financial reports and payouts."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

function HealthItem({ label, value, status }: { label: string, value: string, status: 'optimal' | 'warning' | 'error' }) {
    return (
        <div className="flex items-center justify-between">
            <div className="space-y-0.5">
                <p className="text-xs font-bold text-[#6B7280] uppercase tracking-wider">{label}</p>
                <p className="text-lg font-jakarta font-bold text-[#1F2933] dark:text-[#F5F4F2]">{value}</p>
            </div>
            <div className="h-2 w-2 rounded-full bg-[#6B8E7D] animate-pulse" />
        </div>
    );
}

function AdminActionCard({ icon, title, desc, count }: any) {
    return (
        <div className="group p-5 rounded-2xl bg-white dark:bg-[#1C1A18] border border-transparent hover:border-[#D97757]/20 shadow-sm hover:shadow-md transition-all cursor-pointer">
            <div className="flex justify-between items-start mb-4">
                <div className="p-3 rounded-xl bg-[#FAF9F7] dark:bg-[#121110] text-[#1F2933] dark:text-[#F5F4F2] group-hover:bg-[#D97757] group-hover:text-white transition-colors">
                    {icon}
                </div>
                {count && (
                    <span className="bg-[#D97757] text-white text-[10px] font-bold px-2 py-1 rounded-full">
                        {count} ACTION REQUIRED
                    </span>
                )}
            </div>
            <h3 className="font-bold text-[#1F2933] dark:text-[#F5F4F2] mb-1">{title}</h3>
            <p className="text-xs text-[#6B7280] leading-relaxed">{desc}</p>
        </div>
    );
}