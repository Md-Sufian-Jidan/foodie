const API_URL = process.env.API_URL || "http://localhost:5000";

export interface CategoryData {
    name: string;
    image?: string;
    description?: string;
}

export const adminService = {
    /**
     * Create a new category
     * Required Role: ADMIN
     */
    async createCategory(categoryData: CategoryData) {
        try {
            const res = await fetch(`${API_URL}/api/v1/admin/categories`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(categoryData),
            });

            const data = await res.json();
            if (!res.ok) return { data: null, error: data };

            return { data, error: null };
        } catch (error: any) {
            return { data: null, error };
        }
    },

    async getCategories() {
        try {
            // cookieHeader?: string
            const res = await fetch(`http://localhost:5000/api/v1/admin/get-all-category`, {
                method: "GET",
                cache: "no-store",
                // headers: cookieHeader ? { "Cookie": cookieHeader } : {}
            });

            if (!res.ok) {
                // Better error reporting
                const errorData = await res.json().catch(() => ({}));
                return { data: null, error: errorData.message || "Failed to fetch categories" };
            }

            const data = await res.json();
            return { data, error: null };
        } catch (error: any) {
            console.error("GET_CATEGORIES_ERROR:", error);
            return { data: null, error };
        }
    },

    /**
     * Update an existing category
     * Required Role: ADMIN
     */
    async updateCategory(id: string, categoryData: Partial<CategoryData>) {
        try {
            const res = await fetch(`${API_URL}/api/v1/admin/categories/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(categoryData),
            });

            const data = await res.json();
            if (!res.ok) return { data: null, error: data };

            return { data, error: null };
        } catch (error: any) {
            return { data: null, error };
        }
    },

    /**
     * Delete a category
     * Required Role: ADMIN
     */
    async deleteCategory(id: string) {
        try {
            const res = await fetch(`${API_URL}/api/v1/admin/categories/${id}`, {
                method: "DELETE",
                credentials: "include",
            });

            const data = await res.json();
            if (!res.ok) return { data: null, error: data };

            return { data, error: null };
        } catch (error: any) {
            return { data: null, error };
        }
    },
};