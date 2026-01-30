export function OrderItemRow({ item }: any) {
    return (
        <div className="flex justify-between items-center py-4 border-b border-[#6B7280]/5 last:border-0">
            <div className="space-y-0.5">
                <p className="font-jakarta font-semibold text-[#1F2933] dark:text-[#F5F4F2]">{item.name}</p>
                <p className="text-xs text-[#6B7280] dark:text-[#B3B3B0]">
                    Quantity: <span className="text-[#1F2933] dark:text-[#F5F4F2] font-medium">{item.quantity}</span>
                </p>
            </div>
            <p className="font-jakarta font-bold text-[#1F2933] dark:text-[#F5F4F2]">₹{item.price}</p>
        </div>
    );
}