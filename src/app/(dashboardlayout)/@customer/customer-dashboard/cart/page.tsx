import CartItem from "@/components/modules/customer/cart/CartItem";
import { CartSummary } from "@/components/modules/customer/cart/CartSummary";
import { EmptyCart } from "@/components/modules/customer/cart/EmptyCart";

const cartItems = [
    { id: 1, name: "Chicken Biryani", price: 180, quantity: 1 },
    { id: 2, name: "Paneer Butter Masala", price: 150, quantity: 1 },
];

export default function CartPage() {
    if (cartItems.length === 0) {
        return <EmptyCart />;
    }

    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const summary = {
        subtotal,
        delivery: 40,
        total: subtotal + 40,
    };

    return (
        <div className="space-y-6 bg-[#FAF9F7] rounded-4xl p-5">
            <h1 className="font-serif text-3xl font-bold">
                My Cart
            </h1>

            <div className="grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2 space-y-2">
                    {cartItems.map(item => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </div>

                <CartSummary summary={summary} />
            </div>
        </div>
    );
}
