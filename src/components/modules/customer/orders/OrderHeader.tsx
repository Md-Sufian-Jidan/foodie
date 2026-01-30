"use client";
import { OrderStatusBadge } from "./OrderStatusBadge";

export function OrderHeader({ order }: any) {
    return (
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-[#6B7280]/10 pb-6">
            <div className="space-y-1">
                <p className="text-xs font-bold tracking-widest text-[#6B7280] dark:text-[#B3B3B0] uppercase">Receipt</p>
                <h1 className="font-serif text-3xl font-bold text-[#1F2933] dark:text-[#F5F4F2]">
                    Order <span className="text-[#D97757]">#{order.id}</span>
                </h1>
            </div>
            <OrderStatusBadge status={order.status} />
        </div>
    );
}