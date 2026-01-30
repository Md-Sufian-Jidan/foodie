"use client";

import { useEffect, useState } from "react";
import { adminService } from "@/services/admin.service";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function OrdersPage() {
    const [orders, setOrders] = useState<any[]>([]);

    useEffect(() => {
        async function fetchOrders() {
            const { data } = await adminService.getOrders();
            setOrders(data);
        }
        fetchOrders();
    }, []);

    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-bold">All Orders</h1>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Order ID</TableHead>
                        <TableHead>User</TableHead>
                        <TableHead>Total</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {orders.map((order) => (
                        <TableRow key={order.id}>
                            <TableCell>{order.id}</TableCell>
                            <TableCell>{order.userName}</TableCell>
                            <TableCell>${order.totalAmount}</TableCell>
                            <TableCell>{order.status}</TableCell>
                            <TableCell>{new Date(order.createdAt).toLocaleDateString()}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
