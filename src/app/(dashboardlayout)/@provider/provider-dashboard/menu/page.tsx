"use client";

import { useState } from "react";
import { useSession } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Edit3, Trash2, Plus, CheckCircle2, Clock, ChefHat } from "lucide-react";

// --- Types ---
type Meal = {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    isAvailable: boolean;
    categoryId: string;
};

// --- Updated Provider Page ---
export default function ProviderManagementPage() {
    const { data, isPending } = useSession();

    // State for Meals and Orders
    const [mealsList, setMealsList] = useState<Meal[]>(initialMeals);
    const [orderList, setOrderList] = useState(mockOrders);

    // Status Update Logic
    const updateOrderStatus = (orderId: string, status: string) => {
        setOrderList((prev) =>
            prev.map((o) => (o.id === orderId ? { ...o, status } : o))
        );
    };

    if (isPending) return <div className="flex justify-center p-20 animate-pulse text-[#D97757]">Loading Kitchen...</div>;
    if (!data || data.user.role !== "PROVIDER") redirect("/login");

    return (
        <div className="max-w-7xl mx-auto space-y-8 p-4 lg:p-8 bg-[#FAF9F7] dark:bg-[#121110] min-h-screen rounded-4xl">

            {/* Dynamic Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                    <h1 className="font-serif text-4xl font-bold text-[#1F2933] dark:text-[#F5F4F2]">
                        Kitchen Command
                    </h1>
                    <p className="text-[#6B7280] font-jakarta">Welcome back, Chef {data.user.name.split(' ')[0]}</p>
                </div>
                <Button className="bg-[#D97757] hover:bg-[#D97757]/90 text-white rounded-full shadow-lg h-12 px-6">
                    <Plus className="mr-2 h-5 w-5" /> New Creation
                </Button>
            </div>

            <Tabs defaultValue="orders" className="w-full">
                <TabsList className="bg-white dark:bg-[#1C1A18] border border-[#6B7280]/10 p-1 rounded-xl mb-8">
                    <TabsTrigger value="orders" className="rounded-lg data-[state=active]:bg-[#D97757] data-[state=active]:text-white">
                        Live Orders
                        <Badge className="ml-2 bg-white/20 text-current">{orderList.filter(o => o.status !== 'DELIVERED').length}</Badge>
                    </TabsTrigger>
                    <TabsTrigger value="menu" className="rounded-lg data-[state=active]:bg-[#D97757] data-[state=active]:text-white">
                        Menu Manager
                    </TabsTrigger>
                </TabsList>

                {/* Orders Management Tab */}
                <TabsContent value="orders" className="space-y-4">
                    <div className="grid gap-4">
                        <AnimatePresence mode="popLayout">
                            {orderList.map((order) => (
                                <OrderActionCard
                                    key={order.id}
                                    order={order}
                                    onUpdateStatus={updateOrderStatus}
                                />
                            ))}
                        </AnimatePresence>
                    </div>
                </TabsContent>

                {/* Menu Manager Tab (Previous Design Integrated) */}
                <TabsContent value="menu">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {mealsList.map((meal) => (
                            <MealCard key={meal.id} meal={meal} />
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}

// --- Order Action Component ---
function OrderActionCard({ order, onUpdateStatus }: any) {
    const isPending = order.status === "PENDING";

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, x: -20 }}
        >
            <Card className="border-none shadow-sm bg-white dark:bg-[#1C1A18] overflow-hidden">
                <CardContent className="p-0 flex flex-col md:flex-row">
                    <div className={`w-2 md:w-3 ${isPending ? 'bg-[#D97757]' : 'bg-black'}`} />
                    <div className="p-6 flex-1 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="space-y-1 text-center md:text-left">
                            <div className="flex items-center gap-2 justify-center md:justify-start">
                                <span className="font-serif text-xl font-bold uppercase tracking-tight">#{order.id}</span>
                                <Badge variant="outline" className={isPending ? "text-[#D97757] border-[#D97757]" : "text-black border-black"}>
                                    {order.status}
                                </Badge>
                            </div>
                            <p className="text-sm text-[#6B7280] font-jakarta">{order.items} • ₹{order.total}</p>
                        </div>

                        <div className="flex gap-3 w-full md:w-auto">
                            {isPending ? (
                                <Button
                                    onClick={() => onUpdateStatus(order.id, "PREPARING")}
                                    className="w-full bg-[#D97757] hover:bg-[#D97757]/90 text-white"
                                >
                                    <ChefHat className="mr-2 h-4 w-4" /> Start Cooking
                                </Button>
                            ) : (
                                <Button
                                    onClick={() => onUpdateStatus(order.id, "DELIVERED")}
                                    variant="outline"
                                    className="w-full border-[#D97757] text-[#D97757] hover:bg-[#D97757] hover:text-white"
                                >
                                    <CheckCircle2 className="mr-2 h-4 w-4" /> Mark Delivered
                                </Button>
                            )}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}

// --- Simplified MealCard for the tab ---
function MealCard({ meal }: { meal: Meal }) {
    return (
        <Card className="border-none shadow-sm bg-white dark:bg-[#1C1A18] overflow-hidden group">
            <div className="h-40 relative">
                <img src={meal.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <Button size="sm" variant="secondary" className="rounded-full"><Edit3 size={14} /></Button>
                    <Button size="sm" variant="destructive" className="rounded-full"><Trash2 size={14} /></Button>
                </div>
            </div>
            <CardContent className="p-4">
                <h3 className="font-bold text-[#1F2933] dark:text-[#F5F4F2]">{meal.name}</h3>
                <p className="text-sm text-[#D97757] font-bold">₹{meal.price}</p>
            </CardContent>
        </Card>
    );
}

// --- Mock Data ---
const initialMeals: Meal[] = [/* Previous meals here */];
const mockOrders = [
    { id: "ORD-9921", status: "PENDING", items: "2x Classic Burger, 1x Coke", total: 450 },
    { id: "ORD-9922", status: "PREPARING", items: "1x Cheese Pizza", total: 320 },
];