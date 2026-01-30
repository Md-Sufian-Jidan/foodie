"use client";

import { useForm } from "@tanstack/react-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { mealService } from "@/services/meal.service";
import { categories } from "@/lib/fakeData";
import { useRouter } from "next/navigation";
import { Utensils, IndianRupee, Info, LayoutGrid } from "lucide-react";

// 1. Unified Schema
const formSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    description: z.string().min(10, "Description must be at least 10 characters"),
    price: z.number().min(1, "Price must be at least 1"),
    categoryId: z.string().min(1, "Please select a category"),
    isAvailable: z.boolean(),
});

type FormType = z.infer<typeof formSchema>;

export default function NewMealPage() {
    const router = useRouter();

    // 2. Form with explicit types and Zod Adapter
    const form = useForm({
        defaultValues: {
            name: "",
            description: "",
            price: 0,
            categoryId: categories[0]?.id || "",
            isAvailable: true,
        } as FormType,
        onSubmit: async ({ value }) => {
            const toastId = toast.loading("Adding to menu...");
            try {
                // Ensure price is a number and categoryId is a string
                const { error } = await mealService.addMeal({
                    ...value,
                    price: Number(value.price),
                });

                if (error) {
                    toast.error(error.message, { id: toastId });
                    return;
                }

                toast.success("New dish added to your kitchen!", { id: toastId });
                router.push("/provider/menu");
            } catch {
                toast.error("Failed to connect to kitchen", { id: toastId });
            }
        },
    });

    return (
        <div className="py-10 px-4 bg-[#FAF9F7] dark:bg-[#121110] min-h-screen rounded-4xl">
            <header className="mb-8 space-y-2">
                <h1 className="font-serif text-4xl font-bold text-[#1F2933] dark:text-[#F5F4F2]">
                    Create Signature Dish
                </h1>
                <p className="text-[#6B7280] font-jakarta">Define the flavors and details of your new offering.</p>
            </header>

            <Card className="border-none shadow-sm bg-white dark:bg-[#1C1A18]">
                <CardContent className="pt-8">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            form.handleSubmit();
                        }}
                        className="space-y-8"
                    >
                        {/* Name Field */}
                        <form.Field
                            name="name"
                            validators={{ onChange: formSchema.shape.name }}
                            children={(field) => (
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-bold text-[#1F2933] dark:text-[#F5F4F2] font-jakarta uppercase tracking-wider">
                                        <Utensils size={16} className="text-[#D97757]" /> Dish Name
                                    </label>
                                    <Input
                                        placeholder="e.g. Truffle Mushroom Risotto"
                                        value={field.state.value}
                                        onBlur={field.handleBlur}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                        className="bg-[#FAF9F7] dark:bg-[#121110] border-none ring-1 ring-[#6B7280]/10 focus-visible:ring-[#D97757]"
                                    />
                                    <FieldError field={field} />
                                </div>
                            )}
                        />

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Category Field */}
                            <form.Field
                                name="categoryId"
                                children={(field) => (
                                    <div className="space-y-2">
                                        <label className="flex items-center gap-2 text-sm font-bold text-[#1F2933] dark:text-[#F5F4F2] font-jakarta uppercase tracking-wider">
                                            <LayoutGrid size={16} className="text-[#D97757]" /> Category
                                        </label>
                                        <Select
                                            value={field.state.value}
                                            onValueChange={(val) => field.handleChange(val)}
                                        >
                                            <SelectTrigger className="bg-[#FAF9F7] dark:bg-[#121110] border-none ring-1 ring-[#6B7280]/10 w-full">
                                                <SelectValue placeholder="Select a category" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {categories.map((cat) => (
                                                    <SelectItem key={cat.id} value={cat.id}>{cat.name}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                )}
                            />

                            {/* Price Field */}
                            <form.Field
                                name="price"
                                validators={{ onChange: formSchema.shape.price }}
                                children={(field) => (
                                    <div className="space-y-2">
                                        <label className="flex items-center gap-2 text-sm font-bold text-[#1F2933] dark:text-[#F5F4F2] font-jakarta uppercase tracking-wider">
                                            <IndianRupee size={16} className="text-[#D97757]" /> Price
                                        </label>
                                        <Input
                                            type="number"
                                            value={field.state.value}
                                            onChange={(e) => field.handleChange(Number(e.target.value))}
                                            className="bg-[#FAF9F7] dark:bg-[#121110] border-none ring-1 ring-[#6B7280]/10"
                                        />
                                        <FieldError field={field} />
                                    </div>
                                )}
                            />
                        </div>

                        {/* Description Field */}
                        <form.Field
                            name="description"
                            validators={{ onChange: formSchema.shape.description }}
                            children={(field) => (
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-bold text-[#1F2933] dark:text-[#F5F4F2] font-jakarta uppercase tracking-wider">
                                        <Info size={16} className="text-[#D97757]" /> Description
                                    </label>
                                    <Textarea
                                        placeholder="Describe the ingredients and taste..."
                                        className="bg-[#FAF9F7] dark:bg-[#121110] border-none ring-1 ring-[#6B7280]/10 min-h-[120px]"
                                        value={field.state.value}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                    />
                                    <FieldError field={field} />
                                </div>
                            )}
                        />

                        {/* Availability Toggle */}
                        <form.Field
                            name="isAvailable"
                            children={(field) => (
                                <div className="flex items-center justify-between p-4 rounded-xl bg-[#FAF9F7] dark:bg-[#121110] border border-[#6B7280]/10">
                                    <div className="space-y-0.5">
                                        <p className="font-bold text-[#1F2933] dark:text-[#F5F4F2]">Active on Menu</p>
                                        <p className="text-xs text-[#6B7280]">Make this dish available for order immediately</p>
                                    </div>
                                    <Switch
                                        checked={field.state.value}
                                        onCheckedChange={(val) => field.handleChange(val)}
                                    />
                                </div>
                            )}
                        />

                        <div className="flex gap-4 pt-4">
                            <Button
                                type="button"
                                variant="outline"
                                className="flex-1 rounded-full h-12"
                                onClick={() => router.back()}
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                className="flex-[2] bg-[#D97757] hover:bg-[#D97757]/90 text-white rounded-full h-12 shadow-lg shadow-[#D97757]/20"
                            >
                                Publish to Menu
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}

// Helper component for errors
function FieldError({ field }: { field: any }) {
    return (
        <div className="min-h-[20px]">
            {field.state.meta.errors.length > 0 && (
                <p className="text-red-500 text-xs font-medium animate-in fade-in slide-in-from-top-1">
                    {field.state.meta.errors[0]}
                </p>
            )}
        </div>
    );
}