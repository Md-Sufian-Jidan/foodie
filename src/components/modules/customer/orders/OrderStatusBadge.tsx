import { Badge } from "@/components/ui/badge";
import { OrderStatus } from "@/constants/role";
import { cn } from "@/lib/utils";

const statusStyles: Record<OrderStatus, string> = {
    PLACED: "bg-yellow-500/10 text-yellow-600",
    PREPARING: "bg-blue-500/10 text-blue-600",
    DELIVERED: "bg-green-500/10 text-green-600",
    CANCELLED: "bg-red-500/10 text-red-600",
};

export function OrderStatusBadge({ status }: { status: OrderStatus }) {
    return (
        <Badge className={cn("rounded-md", statusStyles[status])}>
            {status}
        </Badge>
    );
}

