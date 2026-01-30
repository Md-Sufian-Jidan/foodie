const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const orderService = {
    // Fetch all orders for the provider
    getOrders: async function (providerId?: string) {
        try {
            let url = `${API_URL}/api/v1/orders/get-all-meals`;
            if (providerId) url += `?providerId=${providerId}`;
            const res = await fetch(url, { cache: "no-store" });
            const data = await res.json();
            return { data, error: null };
        } catch (error: any) {
            return { data: null, error };
        }
    },

    // Update order status
    updateOrderStatus: async function (orderId: string, status: string) {
        try {
            const res = await fetch(`${API_URL}/api/v1/orders/update-order-status/${orderId}`, {
                method: "PATCH",
                body: JSON.stringify({ status }),
                headers: { "Content-Type": "application/json" },
            });
            const data = await res.json();
            return { data, error: null };
        } catch (error: any) {
            return { data: null, error };
        }
    },
};
