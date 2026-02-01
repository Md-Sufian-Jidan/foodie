"use client";

import { useForm } from "@tanstack/react-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

// ---------------- Schema ----------------
const categorySchema = z.object({
    name: z.string().min(2, "Category name must be at least 2 characters"),
});

type CategoryForm = z.infer<typeof categorySchema>;

// ---------------- Page ----------------
export default function AdminCategoriesPage() {
    const router = useRouter();

    const form = useForm<CategoryForm>({
        defaultValues: {
            name: "",
        },
        onSubmit: async ({ value }) => {
            const toastId = toast.loading("Creating category...");

            try {
                const res = await fetch("/api/categories", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(value),
                });

                if (!res.ok) {
                    const text = await res.text();
                    throw new Error(text);
                }

                toast.success("Category created successfully", { id: toastId });
                form.reset();
                router.refresh();
            } catch (err: any) {
                toast.error(err.message || "Failed to create category", { id: toastId });
            }
        },
    });

    return (
        <div className="p-6 space-y-6">
            <Card className="max-w-xl">
                <CardHeader>
                    <CardTitle className="text-xl">Create New Category</CardTitle>
                </CardHeader>
                <CardContent>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            form.handleSubmit();
                        }}
                        className="space-y-4"
                    >
                        <form.Field
                            name="name"
                            validators={{ onChange: categorySchema.shape.name }}
                        >
                            {(field) => (
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Category Name</label>
                                    <Input
                                        placeholder="e.g. Starters, Desserts"
                                        value={field.state.value}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                        onBlur={field.handleBlur}
                                    />
                                    <FieldError field={field} />
                                </div>
                            )}
                        </form.Field>

                        <Button type="submit" className="w-full">
                            Add Category
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}

// ---------------- Error Helper ----------------
function FieldError({ field }: { field: any }) {
    if (!field.state.meta.errors.length) return null;

    return (
        <p className="text-xs text-red-500">{field.state.meta.errors[0]}</p>
    );
}
