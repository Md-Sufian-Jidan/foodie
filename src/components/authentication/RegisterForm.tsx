"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import * as z from "zod";
import { authClient } from "@/lib/auth-client";
import { Eye, EyeClosed } from "lucide-react";
import { useRouter } from "next/navigation";

// Zod validation schema
const formSchema = z.object({
    name: z.string().min(2, "Name is required"),
    role: z.enum(["CUSTOMER", "PROVIDER"]),
    email: z.string().email("Invalid email"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
    terms: z.boolean().refine((val) => val, "You must agree to the terms"),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

export function RegisterForm({ ...props }: React.ComponentProps<typeof Card>) {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const router = useRouter();

    const form = useForm({
        defaultValues: {
            name: "",
            role: "CUSTOMER",
            email: "",
            password: "",
            confirmPassword: "",
            terms: false,
        },
        validators: {
            onSubmit: formSchema,
        },
        onSubmit: async ({ value }) => {
            const toastId = toast.loading("Registering...");
            try {
                const { data, error } = await authClient.signUp.email(value);

                if (error) {
                    toast.error(error.message, { id: toastId });
                    return;
                }

                toast.success("Registered Successfully!", { id: toastId });
                setTimeout(() => {
                    router.push("/login");
                }, 1200);
            } catch {
                toast.error("Something went wrong, please try again.", { id: toastId });
            }
        },
    });

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#FAF9F7] px-4 py-10">
            <Card
                {...props}
                className="w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto rounded-2xl shadow-xl overflow-hidden"
            >
                <CardHeader className="bg-[#D97757] text-white text-center py-6">
                    <CardTitle className="font-heading text-2xl">Create an Account</CardTitle>
                    <CardDescription className="font-body text-white text-sm mt-1">
                        Join MealMate to order meals or become a provider
                    </CardDescription>
                </CardHeader>

                <CardContent className="px-6 py-8 sm:px-10">
                    <form
                        id="register-form"
                        onSubmit={(e) => {
                            e.preventDefault();
                            form.handleSubmit();
                        }}
                    >
                        <FieldGroup className="space-y-5">
                            {/* Name */}
                            <form.Field
                                name="name"
                                children={(field) => {
                                    const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                                    return (
                                        <Field>
                                            <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                                            <Input
                                                id={field.name}
                                                value={field.state.value}
                                                onChange={(e) => field.handleChange(e.target.value)}
                                                placeholder="Your full name"
                                                className={`border ${isInvalid ? "border-red-500" : "border-[#E5E7EB]"
                                                    } focus:border-[#D97757]`}
                                            />
                                            {isInvalid && <FieldError errors={field.state.meta.errors} />}
                                        </Field>
                                    );
                                }}
                            />

                            {/* Role */}
                            <form.Field
                                name="role"
                                children={(field) => (
                                    <Field>
                                        <FieldLabel htmlFor="role">Role</FieldLabel>
                                        <Select
                                            value={field.state.value}
                                            onValueChange={(val) => field.handleChange(val)}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select Role" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="CUSTOMER">Customer</SelectItem>
                                                <SelectItem value="PROVIDER">Provider</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </Field>
                                )}
                            />

                            {/* Email */}
                            <form.Field
                                name="email"
                                children={(field) => {
                                    const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                                    return (
                                        <Field>
                                            <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                                            <Input
                                                id={field.name}
                                                type="email"
                                                value={field.state.value}
                                                onChange={(e) => field.handleChange(e.target.value)}
                                                placeholder="you@example.com"
                                                className={`border ${isInvalid ? "border-red-500" : "border-[#E5E7EB]"
                                                    } focus:border-[#D97757]`}
                                            />
                                            {isInvalid && <FieldError errors={field.state.meta.errors} />}
                                        </Field>
                                    );
                                }}
                            />

                            {/* Password */}
                            <form.Field
                                name="password"
                                children={(field) => {
                                    const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                                    return (
                                        <Field>
                                            <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                                            <div className="relative">
                                                <Input
                                                    id={field.name}
                                                    type={showPassword ? "text" : "password"}
                                                    value={field.state.value}
                                                    onChange={(e) => field.handleChange(e.target.value)}
                                                    placeholder="********"
                                                    className={`border ${isInvalid ? "border-red-500" : "border-[#E5E7EB]"
                                                        } focus:border-[#D97757]`}
                                                />
                                                <div
                                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                >
                                                    {showPassword ? <Eye /> : <EyeClosed />}
                                                </div>
                                            </div>
                                            {isInvalid && <FieldError errors={field.state.meta.errors} />}
                                        </Field>
                                    );
                                }}
                            />

                            {/* Confirm Password */}
                            <form.Field
                                name="confirmPassword"
                                children={(field) => {
                                    const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                                    return (
                                        <Field>
                                            <FieldLabel htmlFor={field.name}>Confirm Password</FieldLabel>
                                            <div className="relative">
                                                <Input
                                                    id={field.name}
                                                    type={showConfirmPassword ? "text" : "password"}
                                                    value={field.state.value}
                                                    onChange={(e) => field.handleChange(e.target.value)}
                                                    placeholder="********"
                                                    className={`border ${isInvalid ? "border-red-500" : "border-[#E5E7EB]"
                                                        } focus:border-[#D97757]`}
                                                />
                                                <div
                                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1"
                                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                >
                                                    {showConfirmPassword ? <Eye /> : <EyeClosed />}
                                                </div>
                                            </div>
                                            {isInvalid && <FieldError errors={field.state.meta.errors} />}
                                        </Field>
                                    );
                                }}
                            />

                            {/* Terms Checkbox */}
                            <form.Field
                                name="terms"
                                children={(field) => (
                                    <Field className="flex flex-col gap-2">
                                        <div className="flex items-center space-x-2">
                                            <Checkbox
                                                id={field.name}
                                                checked={field.state.value}
                                                onCheckedChange={(val) => field.handleChange(Boolean(val))}
                                                // Terracotta styling for the checkbox
                                                className="border-[#6B7280] data-[state=checked]:bg-[#D97757] data-[state=checked]:border-[#D97757] dark:data-[state=checked]:bg-[#E08B6B] dark:data-[state=checked]:border-[#E08B6B]"
                                            />
                                            <FieldLabel
                                                htmlFor={field.name}
                                                className="text-sm font-jakarta text-[#1F2933] dark:text-[#F5F4F2] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                I agree to the{" "}
                                                <a href="/terms" className="text-[#D97757] dark:text-[#E08B6B] underline hover:opacity-80 transition-opacity">
                                                    Terms and Conditions
                                                </a>
                                            </FieldLabel>
                                        </div>
                                        {field.state.meta.isTouched && field.state.meta.errors.length > 0 && (
                                            <FieldError className="text-[#D97757] text-xs" errors={field.state.meta.errors} />
                                        )}
                                    </Field>
                                )}
                            />
                        </FieldGroup>
                    </form>
                </CardContent>

                <CardFooter className="flex flex-col gap-4 px-6 py-6 sm:px-10">
                    <Button
                        form="register-form"
                        type="submit"
                        className="w-full bg-[#D97757] hover:bg-[#c96a4f] text-white py-3 hover:cursor-pointer"
                        onClick={() => form.handleSubmit()}
                    >
                        Register
                    </Button>

                    <p className="text-center text-sm font-body text-[#6B7280] mt-2">
                        Already have an account?{" "}
                        <a href="/login" className="text-[#D97757] hover:underline">
                            Login
                        </a>
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
}
