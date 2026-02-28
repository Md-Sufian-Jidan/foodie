import { getUserReviews } from "@/actions/reviews";
import { CustomerReviews } from "@/components/modules/customer/CustomerReview";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { orderService } from "@/services/order.service";
import { userService } from "@/services/user.service";
import {
    ArrowRight,
    CheckCircle2,
    Clock,
    Package,
    ShoppingBag,
    TrendingUp,
    User,
    XCircle,
} from "lucide-react";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

interface OrderStats {
    total: number;
    pending: number;
    delivered: number;
    cancelled: number;
};

export default async function DashboardPage() {
    const { data: user, status: userStatus } = await userService.getCurrentUser();

    if (!userStatus || !user) {
        redirect("/login");
    }

    const cookieStore = await cookies();
    const { data: ordersResponse } = await orderService.getMyOrders(cookieStore);
    const orders = ordersResponse?.data || [];

    const { data: reviewsResponse } = await getUserReviews();
    const reviews = reviewsResponse?.data || [];

    const stats: OrderStats = {
        total: orders.length,
        pending: orders.filter((order: any) =>
            ["PENDING", "ACCEPTED", "COOKING", "ON_THE_WAY"].includes(order.status),
        ).length,
        delivered: orders.filter((order: any) => order.status === "DELIVERED").length,
        cancelled: orders.filter((order: any) => order.status === "CANCELLED").length,
    };

    const totalSpent = orders
        .filter((order: any) => order.status === "DELIVERED")
        .reduce((sum: number, order: any) => sum + order.totalAmount, 0);

    const recentOrders = orders.slice(0, 5);

    const getStatusColor = (status: string) => {
        switch (status) {
            case "DELIVERED":
                return "bg-emerald-50 text-emerald-700 border-emerald-200";
            case "CANCELLED":
                return "bg-rose-50 text-rose-700 border-rose-200";
            case "PENDING":
                return "bg-amber-50 text-amber-700 border-amber-200";
            case "ACCEPTED":
            case "COOKING":
                return "bg-[#D97757]/10 text-[#D97757] border-[#D97757]/20";
            case "ON_THE_WAY":
                return "bg-blue-50 text-blue-700 border-blue-200";
            default:
                return "bg-slate-50 text-slate-700 border-slate-200";
        }
    };

    return (
        <div className="container mx-auto py-8 px-4 space-y-8 font-sans bg-[#FAF9F7]/30 min-h-screen">
            {/* Welcome Section */}
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tight text-[#1F2933] font-serif">
                    Welcome back, {user.name}!
                </h1>
                <p className="text-[#6B7280]">
                    Here&apos;s an overview of your account activity
                </p>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="border-[#D97757]/10 shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-[#6B7280]">Total Orders</CardTitle>
                        <ShoppingBag className="h-4 w-4 text-[#D97757]" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-[#1F2933]">{stats.total}</div>
                        <p className="text-xs text-[#9CA3AF] mt-1 font-sans">All time orders</p>
                    </CardContent>
                </Card>

                <Card className="border-[#D97757]/10 shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-[#6B7280]">Active Orders</CardTitle>
                        <Clock className="h-4 w-4 text-[#D97757]" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-[#1F2933]">{stats.pending}</div>
                        <p className="text-xs text-[#9CA3AF] mt-1 font-sans">Currently in progress</p>
                    </CardContent>
                </Card>

                <Card className="border-[#D97757]/10 shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-[#6B7280]">Delivered</CardTitle>
                        <CheckCircle2 className="h-4 w-4 text-[#D97757]" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-[#1F2933]">{stats.delivered}</div>
                        <p className="text-xs text-[#9CA3AF] mt-1 font-sans">Successfully completed</p>
                    </CardContent>
                </Card>

                <Card className="border-[#D97757]/10 shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-[#6B7280]">Total Spent</CardTitle>
                        <TrendingUp className="h-4 w-4 text-[#D97757]" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-[#1F2933]">${totalSpent.toFixed(2)}</div>
                        <p className="text-xs text-[#9CA3AF] mt-1 font-sans">On delivered orders</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Orders */}
                <Card className="lg:col-span-2 border-[#D97757]/10 shadow-sm">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <div>
                                <CardTitle className="font-serif text-[#1F2933]">Recent Orders</CardTitle>
                                <CardDescription>Your latest meal orders</CardDescription>
                            </div>
                            <Button asChild variant="ghost" size="sm" className="text-[#D97757] hover:text-[#D97757] hover:bg-[#D97757]/5">
                                <Link href="/dashboard/orders">
                                    View All <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent>
                        {recentOrders.length > 0 ? (
                            <div className="space-y-4">
                                {recentOrders.map((order: any) => (
                                    <div
                                        key={order.id}
                                        className="flex items-center justify-between p-4 border border-[#D97757]/5 rounded-lg hover:bg-[#FAF9F7] transition-colors"
                                    >
                                        <div className="flex items-start gap-4 flex-1">
                                            <div className="mt-1">
                                                <Package className="h-5 w-5 text-[#D97757]" />
                                            </div>
                                            <div className="flex-1 space-y-1">
                                                <div className="flex items-center gap-2">
                                                    <p className="font-medium text-[#1F2933]">
                                                        Order #{order.id.slice(0, 8)}
                                                    </p>
                                                    <Badge variant="outline" className={getStatusColor(order.status)}>
                                                        {order.status.replace("_", " ")}
                                                    </Badge>
                                                </div>
                                                <p className="text-sm text-[#6B7280]">
                                                    {order.items?.length || 0} item(s) • ${order.totalAmount.toFixed(2)}
                                                </p>
                                                <p className="text-xs text-[#9CA3AF]">
                                                    {new Date(order.createdAt).toLocaleDateString("en-US", {
                                                        month: "short", day: "numeric", year: "numeric",
                                                        hour: "2-digit", minute: "2-digit",
                                                    })}
                                                </p>
                                            </div>
                                        </div>
                                        <Button asChild variant="ghost" size="sm" className="text-[#D97757] hover:bg-[#D97757]/10 rounded-full">
                                            <Link href={`/dashboard/orders`}>View</Link>
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-12 text-center">
                                <Package className="h-12 w-12 text-[#D97757]/20 mb-4" />
                                <h3 className="font-semibold text-[#1F2933]">No orders yet</h3>
                                <p className="text-sm text-[#6B7280] mb-4">Start ordering delicious meals today</p>
                                <Button asChild className="bg-[#D97757] hover:bg-[#BF664B]">
                                    <Link href="/meals">Browse Meals</Link>
                                </Button>
                            </div>
                        )}
                    </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="border-[#D97757]/10 shadow-sm h-fit">
                    <CardHeader>
                        <CardTitle className="font-serif text-[#1F2933]">Quick Actions</CardTitle>
                        <CardDescription>Shortcuts to common tasks</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <Button asChild className="w-full justify-start border-[#D97757]/20 text-[#1F2933] hover:bg-[#D97757]/5" variant="outline">
                            <Link href="/meals"><ShoppingBag className="mr-2 h-4 w-4 text-[#D97757]" /> Browse Meals</Link>
                        </Button>
                        <Button asChild className="w-full justify-start border-[#D97757]/20 text-[#1F2933] hover:bg-[#D97757]/5" variant="outline">
                            <Link href="/providers"><Package className="mr-2 h-4 w-4 text-[#D97757]" /> View Providers</Link>
                        </Button>
                        <Button asChild className="w-full justify-start border-[#D97757]/20 text-[#1F2933] hover:bg-[#D97757]/5" variant="outline">
                            <Link href="/dashboard/orders"><Clock className="mr-2 h-4 w-4 text-[#D97757]" /> My Orders</Link>
                        </Button>
                        <Button asChild className="w-full justify-start border-[#D97757]/20 text-[#1F2933] hover:bg-[#D97757]/5" variant="outline">
                            <Link href="/dashboard/profile"><User className="mr-2 h-4 w-4 text-[#D97757]" /> My Profile</Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>

            {/* Order Status Summary & Reviews */}
            {orders.length > 0 && (
                <div className="grid grid-cols-1 gap-6">
                    <Card className="border-[#D97757]/10 shadow-sm">
                        <CardHeader>
                            <CardTitle className="font-serif text-[#1F2933]">Order Summary</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                <div className="flex items-center gap-3 p-4 border border-[#D97757]/5 rounded-lg bg-[#FAF9F7]/50">
                                    <div className="p-2 bg-amber-50 rounded-full"><Clock className="h-5 w-5 text-amber-600" /></div>
                                    <div><p className="text-2xl font-bold text-[#1F2933]">{stats.pending}</p><p className="text-sm text-[#6B7280]">Active</p></div>
                                </div>
                                <div className="flex items-center gap-3 p-4 border border-[#D97757]/5 rounded-lg bg-[#FAF9F7]/50">
                                    <div className="p-2 bg-emerald-50 rounded-full"><CheckCircle2 className="h-5 w-5 text-emerald-600" /></div>
                                    <div><p className="text-2xl font-bold text-[#1F2933]">{stats.delivered}</p><p className="text-sm text-[#6B7280]">Delivered</p></div>
                                </div>
                                <div className="flex items-center gap-3 p-4 border border-[#D97757]/5 rounded-lg bg-[#FAF9F7]/50">
                                    <div className="p-2 bg-rose-50 rounded-full"><XCircle className="h-5 w-5 text-rose-600" /></div>
                                    <div><p className="text-2xl font-bold text-[#1F2933]">{stats.cancelled}</p><p className="text-sm text-[#6B7280]">Cancelled</p></div>
                                </div>
                                <div className="flex items-center gap-3 p-4 border border-[#D97757]/5 rounded-lg bg-[#FAF9F7]/50">
                                    <div className="p-2 bg-blue-50 rounded-full"><ShoppingBag className="h-5 w-5 text-blue-600" /></div>
                                    <div><p className="text-2xl font-bold text-[#1F2933]">{stats.total}</p><p className="text-sm text-[#6B7280]">Total</p></div>
                                </div>
                            </div>

                            <CustomerReviews reviews={reviews} />
                        </CardContent>
                    </Card>
                </div>
            )}
        </div>
    );
}