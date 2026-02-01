import { MealData } from "@/constants/mealData";
import { meals } from "@/lib/fakeData";
// import { cookies } from "next/headers";
const API_URL = process.env.API_URL || "http://localhost:5000";

export const mealService = {
    async getMeals(providerId?: string) {
        try {
            const url = providerId
                ? `${API_URL}/api/v1/meals?providerId=${providerId}`
                : `${API_URL}/api/v1/meals/get-all-meals`;

            const res = await fetch(url, { cache: "no-store" });

            if (!res.ok) {
                return { data: meals, error: { message: "Failed to fetch meals" } };
            }

            const data = await res.json();
            return { data, error: null };
        } catch (error: any) {
            return { data: null, error };
        }
    },

    getMealById: async (id: string) => {
        try {
            const res = await fetch(`${API_URL}/api/v1/meals/${id}`, {
                cache: "no-store",
            });

            if (!res.ok) throw new Error("API failed");

            const data = await res.json();
            return { data, error: null };
        } catch {
            const meal = meals.find((m) => m.id === Number(id));
            return { data: meal, error: null };
        }
    },

    async addMeal(mealData: MealData) {
        try {
            // No need to manually set "Cookie" header if credentials are included
            const res = await fetch(`${API_URL}/api/v1/meals/create-meal`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(mealData),
            });

            if (!res.ok) {
                let errorBody: any = { message: res.statusText };
                try {
                    errorBody = await res.json();
                } catch (e) {
                    try {
                        errorBody = await res.text();
                    } catch (e) {
                        /* ignore */
                    }
                }

                return { data: null, error: errorBody };
            }

            const data = await res.json();
            return { data, error: null };
        } catch (error: any) {
            return { data: null, error };
        }
    },

    async updateMeal(id: string, mealData: Partial<MealData>) {
        try {
            const res = await fetch(`${API_URL}/api/v1/meals/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                credentials: "include", // Added for auth
                body: JSON.stringify(mealData),
            });

            if (!res.ok) {
                let errorBody: any = { message: res.statusText };
                try {
                    errorBody = await res.json();
                } catch (e) {
                    try {
                        errorBody = await res.text();
                    } catch (e) {
                        /* ignore */
                    }
                }

                return { data: null, error: errorBody };
            }

            const data = await res.json();
            return { data, error: null };
        } catch (error: any) {
            return { data: null, error };
        }
    },

    async deleteMeal(id: string) {
        try {
            const res = await fetch(`${API_URL}/api/v1/meals/${id}`, {
                method: "DELETE",
                credentials: "include", // Added for auth
            });

            if (!res.ok) {
                let errorBody: any = { message: res.statusText };
                try {
                    errorBody = await res.json();
                } catch (e) {
                    try {
                        errorBody = await res.text();
                    } catch (e) {
                        /* ignore */
                    }
                }

                return { data: null, error: errorBody };
            }

            const data = await res.json();
            if (!res.ok) return { data: null, error: data };

            return { data, error: null };
        } catch (error: any) {
            return { data: null, error };
        }
    },
};