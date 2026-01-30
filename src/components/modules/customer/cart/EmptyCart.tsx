import Link from "next/link";
import { Button } from "@/components/ui/button";

export function EmptyCart() {
    return (
        <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="text-lg font-medium">Your cart is empty</p>
            <p className="text-muted-foreground mb-4">
                Looks like you haven’t added anything yet
            </p>
            <Button asChild>
                <Link href="/meals">Browse Meals</Link>
            </Button>
        </div>
    );
}
