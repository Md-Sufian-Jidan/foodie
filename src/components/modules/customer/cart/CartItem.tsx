"use client";

import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash } from "lucide-react";

export default function CartItem({ item }: any) {
    return (
        <div className="flex items-center justify-between gap-4 border-b py-4">
            <div>
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-muted-foreground">
                    ₹{item.price} × {item.quantity}
                </p>
            </div>

            <div className="flex items-center gap-2">
                <Button size="icon" variant="outline">
                    <Minus size={14} />
                </Button>
                <span className="w-6 text-center">{item.quantity}</span>
                <Button size="icon" variant="outline">
                    <Plus size={14} />
                </Button>
                <Button size="icon" variant="ghost">
                    <Trash size={14} />
                </Button>
            </div>
        </div>
    );
}
