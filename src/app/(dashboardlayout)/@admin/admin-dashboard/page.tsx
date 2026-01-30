"use client";

import { useEffect, useState } from "react";
import StatCard from "@/components/modules/customer/customer-dashboard/StatCard";
import { adminService } from "@/services/admin.service";

export default function AdminDashboardPage() {
    const [stats, setStats] = useState({
        totalUsers: 0,
        totalOrders: 0,
        totalProviders: 0,
    });

    useEffect(() => {
        async function fetchStats() {
            const { data } = await adminService.getStatistics();
            setStats(data);
        }
        fetchStats();
    }, []);

    return (
        <div className="space-y-6">
            <h1 className="font-serif text-3xl font-bold">Admin Dashboard</h1>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <StatCard title="Total Users" value={stats.totalUsers.toString()} />
                <StatCard title="Total Orders" value={stats.totalOrders.toString()} />
                <StatCard title="Total Providers" value={stats.totalProviders.toString()} />
            </div>
        </div>
    );
}
