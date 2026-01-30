export function OrderSummary({ order }: any) {
    return (
        <div className="space-y-3 font-jakarta pt-2">
            <div className="flex justify-between text-sm text-[#6B7280] dark:text-[#B3B3B0]">
                <span>Subtotal</span>
                <span className="text-[#1F2933] dark:text-[#F5F4F2]">₹{order.subtotal}</span>
            </div>
            <div className="flex justify-between text-sm text-[#6B7280] dark:text-[#B3B3B0]">
                <span>Delivery Fee</span>
                <span className="text-[#6B8E7D] font-medium">₹{order.delivery}</span>
            </div>
            <div className="flex justify-between pt-3 border-t border-[#1F2933]/10 dark:border-[#F5F4F2]/10 font-bold text-lg text-[#1F2933] dark:text-[#F5F4F2]">
                <span>Total Amount</span>
                <span className="text-[#D97757]">₹{order.total}</span>
            </div>
        </div>
    );
}