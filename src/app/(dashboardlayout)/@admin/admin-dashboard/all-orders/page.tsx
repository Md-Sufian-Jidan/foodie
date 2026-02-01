"use client";

import { useEffect, useState } from "react";
import { adminService } from "@/services/admin.service";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Search,
    Filter,
    Download,
    ExternalLink,
    ShoppingBag,
    User,
    CalendarDays
} from "lucide-react";
import { Input } from "@/components/ui/input";

export default function OrdersPage() {
    const [orders, setOrders] = useState<any[]>([]);

    useEffect(() => {
        async function fetchOrders() {
            const { data } = await adminService.getOrders();
            // Fallback mock data for visual consistency
            setOrders(data || [
                { id: "ORD-7721", userName: "Marcus Wright", totalAmount: 45.50, status: "DELIVERED", createdAt: "2026-01-28" },
                { id: "ORD-7722", userName: "Elena Rodriguez", totalAmount: 128.00, status: "PREPARING", createdAt: "2026-01-30" },
                { id: "ORD-7723", userName: "James Wilson", totalAmount: 12.99, status: "PENDING", createdAt: "2026-01-31" },
            ]);
        }
        fetchOrders();
    }, []);

    return (
        <div className="space-y-8 p-4 lg:p-8 bg-[#FAF9F7] dark:bg-[#121110] min-h-screen font-jakarta rounded-4xl">
            {/* Page Header */}
            <header className="flex flex-col md:flex-row justify-between items-end gap-6">
                <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[#6B8E7D] font-bold text-xs uppercase tracking-[0.2em]">
                        <ShoppingBag size={14} /> Logistics Overview
                    </div>
                    <h1 className="font-serif text-4xl font-bold text-[#1F2933] dark:text-[#F5F4F2]">
                        Order Registry
                    </h1>
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto">
                    <Button variant="outline" className="border-[#6B7280]/20 rounded-full">
                        <Download className="mr-2 w-4 h-4" /> Export CSV
                    </Button>
                </div>
            </header>

            {/* Filters Bar */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white dark:bg-[#1C1A18] p-4 rounded-2xl shadow-sm border border-[#6B7280]/5">
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280] w-4 h-4" />
                    <Input
                        placeholder="Search by ID or customer..."
                        className="pl-10 bg-[#FAF9F7] dark:bg-[#121110] border-none ring-1 ring-[#6B7280]/10 focus-visible:ring-[#D97757]"
                    />
                </div>
                <div className="flex items-center gap-2 w-full md:w-auto">
                    <Button variant="ghost" className="text-[#6B7280]">
                        <Filter className="mr-2 w-4 h-4" /> Filter
                    </Button>
                    <div className="h-6 w-[1px] bg-[#6B7280]/20 mx-2 hidden md:block" />
                    <p className="text-sm font-bold text-[#1F2933] dark:text-[#F5F4F2]">
                        {orders.length} <span className="text-[#6B7280] font-normal">Transactions</span>
                    </p>
                </div>
            </div>

            {/* Table Container */}
            <Card className="border-none shadow-sm bg-white dark:bg-[#1C1A18] overflow-hidden">
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-[#FAF9F7]/50 dark:bg-[#121110]/50">
                            <TableRow className="border-b border-[#6B7280]/10">
                                <TableHead className="py-5 pl-6 text-[10px] uppercase font-bold tracking-widest">Reference</TableHead>
                                <TableHead className="py-5 text-[10px] uppercase font-bold tracking-widest">Customer</TableHead>
                                <TableHead className="py-5 text-[10px] uppercase font-bold tracking-widest">Date</TableHead>
                                <TableHead className="py-5 text-[10px] uppercase font-bold tracking-widest">Amount</TableHead>
                                <TableHead className="py-5 text-[10px] uppercase font-bold tracking-widest">Status</TableHead>
                                <TableHead className="py-5 pr-6 text-right text-[10px] uppercase font-bold tracking-widest">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {orders.map((order) => (
                                <TableRow key={order.id} className="border-b border-[#6B7280]/5 hover:bg-[#FAF9F7]/30 dark:hover:bg-[#121110]/30 transition-colors group">
                                    <TableCell className="py-4 pl-6 font-bold text-[#1F2933] dark:text-[#F5F4F2]">
                                        #{order.id}
                                    </TableCell>
                                    <TableCell className="py-4">
                                        <div className="flex items-center gap-2">
                                            <div className="p-1.5 rounded-full bg-[#FAF9F7] dark:bg-[#121110]">
                                                <User size={14} className="text-[#6B7280]" />
                                            </div>
                                            <span className="font-medium">{order.userName}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="py-4 text-[#6B7280] text-sm">
                                        <div className="flex items-center gap-2">
                                            <CalendarDays size={14} />
                                            {new Date(order.createdAt).toLocaleDateString()}
                                        </div>
                                    </TableCell>
                                    <TableCell className="py-4 font-bold text-[#D97757]">
                                        ${order.totalAmount.toFixed(2)}
                                    </TableCell>
                                    <TableCell className="py-4">
                                        <StatusBadge status={order.status} />
                                    </TableCell>
                                    <TableCell className="py-4 pr-6 text-right">
                                        <Button size="sm" variant="ghost" className="hover:text-[#D97757] hover:bg-[#D97757]/5">
                                            Details <ExternalLink className="ml-2 w-3 h-3" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}

function StatusBadge({ status }: { status: string }) {
    const config: Record<string, string> = {
        PENDING: "bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-400",
        PREPARING: "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400",
        DELIVERED: "bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-400",
        CANCELLED: "bg-red-100 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-400",
    };

    return (
        <Badge className={`${config[status] || config.PENDING} border shadow-none font-jakarta font-bold px-2.5 py-0.5`}>
            {status}
        </Badge>
    );
}