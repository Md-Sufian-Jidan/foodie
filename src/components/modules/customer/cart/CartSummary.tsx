import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function CartSummary({ summary }: any) {
    return (
        <Card className="p-4 space-y-4">
            <h2 className="font-semibold">Order Summary</h2>

            <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{summary.subtotal}</span>
                </div>
                <div className="flex justify-between">
                    <span>Delivery</span>
                    <span>₹{summary.delivery}</span>
                </div>
                <div className="flex justify-between font-semibold text-base">
                    <span>Total</span>
                    <span>₹{summary.total}</span>
                </div>
            </div>

            <Button className="w-full">
                Proceed to Checkout
            </Button>
        </Card>
    );
}
