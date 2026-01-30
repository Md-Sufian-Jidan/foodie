"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useSession } from "@/lib/auth-client";
import { redirect } from "next/navigation";

export const orders = [
    {
        id: "order-1",
        customerName: "John Doe",
        totalAmount: 29.99,
        status: "PENDING",
        address: "123 Main St, Cityville",
        createdAt: new Date("2026-01-20T10:30:00"),
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
        createdAt: new Date("2026-01-21T14:00:00"),
        items: [
            { mealName: "Veggie Burger", quantity: 2, price: 7.99 },
            { mealName: "Mango Smoothie", quantity: 1, price: 4.99 },
        ],
    },
    {
        id: "order-3",
        customerName: "Bob Johnson",
        totalAmount: 13.99,
        status: "DELIVERED",
        address: "789 Elm St, Villageville",
        createdAt: new Date("2026-01-19T16:45:00"),
        items: [
            { mealName: "Pepperoni Pizza", quantity: 1, price: 13.99 },
        ],
    },
];


export default function ProviderOrdersPage() {
    // const { data, isPending } = useSession();
    // const [orders, setOrders] = useState([]);

    // if (isPending) return null;
    // if (!data || data.user.role !== "PROVIDER") redirect("/login");

    // useEffect(() => {
    //     const fetchOrders = async () => {
    //         const res = await fetch("/api/provider/orders");
    //         const result = await res.json();
    //         setOrders(result);
    //     };
    //     fetchOrders();
    // }, []);

    const updateStatus = async (id: string, status: string) => {
        await fetch(`/api/provider/orders/${id}`, {
            method: "PATCH",
            body: JSON.stringify({ status }),
            headers: { "Content-Type": "application/json" },
        });
        // setOrders((prev: any) =>
        //     prev.map((o: any) => (o.id === id ? { ...o, status } : o))
        // );
    };

    return (
        <div className="space-y-6">
            <h1 className="font-serif text-3xl font-bold">Incoming Orders</h1>

            <div className="space-y-4">
                {orders.map((order: any) => (
                    <Card key={order.id} className="p-4 flex justify-between items-center">
                        <div>
                            <p className="font-medium">Order #{order.id}</p>
                            <p className="text-muted-foreground">{order.status}</p>
                        </div>
                        <div className="flex gap-2">
                            {order.status !== "DELIVERED" && (
                                <Button
                                    onClick={() => updateStatus(order.id, "DELIVERED")}
                                    size="sm"
                                >
                                    Mark Delivered
                                </Button>
                            )}
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
