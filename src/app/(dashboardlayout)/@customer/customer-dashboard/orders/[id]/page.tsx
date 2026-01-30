import { OrderHeader } from "@/components/modules/customer/orders/OrderHeader";
import { OrderItemRow } from "@/components/modules/customer/orders/OrderItemRow";
import { OrderSummary } from "@/components/modules/customer/orders/OrderSummary";
import { OrderTimeline } from "@/components/modules/customer/orders/OrderTimeline";
import { Card } from "@/components/ui/card";

const order = {
    id: "MM-1023",
    status: "DELIVERED",
    items: [
        { name: "Chicken Biryani", quantity: 1, price: 180 },
        { name: "Paneer Butter Masala", quantity: 1, price: 150 },
    ],
    subtotal: 330,
    delivery: 40,
    total: 370,
};

export default function OrderDetailsPage() {
    return (
        <div className="space-y-6">
            <OrderHeader order={order} />

            <Card className="p-4">
                <OrderTimeline status={order.status} />
            </Card>

            <Card className="p-4 space-y-3">
                <h2 className="font-semibold">Items Ordered</h2>
                {order.items.map((item, i) => (
                    <OrderItemRow key={i} item={item} />
                ))}
            </Card>

            <Card className="p-4 space-y-3">
                <h2 className="font-semibold">Order Summary</h2>
                <OrderSummary order={order} />
            </Card>
        </div>
    );
}
