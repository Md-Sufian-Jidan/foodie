const API_URL = process.env.API_URL;

export const mealService = {
    // Fetch all meals for a provider
    getMeals: async function (providerId?: string) {
        try {
            let url = `${API_URL}/api/v1/meal/get-meal`;
            if (providerId) url += `?providerId=${providerId}`;
            const res = await fetch(url, { cache: "no-store" });
            const data = await res.json();
            return { data, error: null };
        } catch (error: any) {
            return { data: null, error };
        }
    },

    // Add a new meal
    addMeal: async function (mealData: {
        name: string;
        description: string;
        price: number;
        image?: string;
        categoryId: string;
    }) {
        try {
            const res = await fetch(`${API_URL}/api/v1/meal/create-meal`, {
                method: "POST",
                body: JSON.stringify(mealData),
                headers: { "Content-Type": "application/json" },
            });
            const data = await res.json();
            return { data, error: null };
        } catch (error: any) {
            return { data: null, error };
        }
    },

    // Update a meal
    updateMeal: async function (id: string, mealData: Partial<{ name: string; description: string; price: number; isAvailable: boolean }>) {
        try {
            const res = await fetch(`${API_URL}/api/v1/meal/update-meal/${id}`, {
                method: "PATCH",
                body: JSON.stringify(mealData),
                headers: { "Content-Type": "application/json" },
            });
            const data = await res.json();
            return { data, error: null };
        } catch (error: any) {
            return { data: null, error };
        }
    },

    // Delete a meal
    deleteMeal: async function (id: string) {
        try {
            const res = await fetch(`${API_URL}/api/v1/meal/delete-meal/${id}`, { method: "DELETE" });
            const data = await res.json();
            return { data, error: null };
        } catch (error: any) {
            return { data: null, error };
        }
    },
};
