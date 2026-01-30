const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const adminService = {
    getStatistics: async () => {
        // Fake data for now
        return {
            data: { totalUsers: 120, totalOrders: 50, totalProviders: 12 },
            error: null,
        };
    },

    getUsers: async () => {
        return {
            data: [
                { id: "1", name: "Alice", email: "alice@mail.com", role: "CUSTOMER", isActive: true },
                { id: "2", name: "Bob", email: "bob@mail.com", role: "PROVIDER", isActive: false },
            ],
            error: null,
        };
    },

    updateUserStatus: async (id: string, isActive: boolean) => {
        return { data: { id, isActive }, error: null };
    },

    getOrders: async () => {
        return {
            data: [
                { id: "1", userName: "Alice", totalAmount: 25.5, status: "DELIVERED", createdAt: new Date() },
                { id: "2", userName: "Bob", totalAmount: 15.0, status: "PENDING", createdAt: new Date() },
            ],
            error: null,
        };
    },

    getCategories: async () => {
        return {
            data: [
                { id: "1", name: "Italian" },
                { id: "2", name: "Chinese" },
            ],
            error: null,
        };
    },
};
