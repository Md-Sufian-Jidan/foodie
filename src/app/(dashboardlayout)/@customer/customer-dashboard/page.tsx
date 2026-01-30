"use client";

import { useState, useEffect } from "react";
import StatCard from "@/components/modules/customer-dashboard/StatCard";
import { useSession } from "@/lib/auth-client";
import OrdersChart from "@/components/modules/customer-dashboard/OrdersChat";
import { motion } from "framer-motion";

type Stats = {
  totalOrders: number;
  pendingOrders: number;
  deliveredOrders: number;
  ordersByMonth: { month: string; orders: number }[];
};

export default function CustomerDashboard() {
  const { data: session } = useSession();
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    // Simulate data fetching or just setting local data
    const chartData = {
      totalOrders: 12,
      pendingOrders: 2,
      deliveredOrders: 10,
      ordersByMonth: [
        { month: "Jan", orders: 2 },
        { month: "Feb", orders: 3 },
        { month: "Mar", orders: 1 },
        { month: "Apr", orders: 6 },
      ],
    };
    setStats(chartData);
  }, []);

  if (!stats) {
    return (
      <div className="flex h-64 items-center justify-center">
        <p className="text-[#6B7280] animate-pulse font-jakarta">Loading your kitchen stats...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8 p-4 lg:p-8 dark:bg-[#121110] min-h-screen">
      <header className="space-y-2">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-serif text-4xl font-bold text-[#1F2933] dark:text-[#F5F4F2]"
        >
          Welcome back, {session?.user?.name || "Chef"} 👋
        </motion.h1>
        <p className="text-[#6B7280] dark:text-[#B3B3B0] font-sans">
          Here’s what is happening with your MealMate account today.
        </p>
      </header>

      {/* Stat Cards with Staggered Entrance */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
          }
        }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <StatCard title="Total Orders" value={stats.totalOrders.toString()} />
        <StatCard title="Pending Orders" value={stats.pendingOrders.toString()} />
        <StatCard title="Delivered" value={stats.deliveredOrders.toString()} />
      </motion.div>

      {/* Chart Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="rounded-xl overflow-hidden shadow-sm"
      >
        <OrdersChart data={stats.ordersByMonth} />
      </motion.div>
    </div>
  );
}