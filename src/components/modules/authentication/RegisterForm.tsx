"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Field,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { defaultValues, RegisterFormSchema } from "@/schema/registerSchema";
import { useForm } from "@tanstack/react-form";
import { Eye, EyeOff, Lock, Mail, User, UtensilsCrossed } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import * as React from "react";
import { toast } from "sonner";

export function RegisterForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const [showPassword, setShowPassword] = React.useState(false);
    const providerPath = "/become-provider";
    const path = usePathname();
    const router = useRouter();

    // Set default role based on path
    React.useEffect(() => {
        if (path === providerPath) {
            defaultValues.role = "PROVIDER";
        } else {
            defaultValues.role = "CUSTOMER";
        }
    }, [path]);

    const form = useForm({
        defaultValues: defaultValues,
        validators: { onSubmit: RegisterFormSchema },
        onSubmit: async ({ value }: { value: typeof defaultValues }) => {
            const toastId = toast.loading("Creating your account...");
            try {
                const { error } = await authClient.signUp.email(value);
                if (error) {
                    toast.error(error.message, { id: toastId });
                    return;
                }
                toast.success("Account created! Please check your email.", {
                    id: toastId,
                });
                router.push(
                    `/verify-request?email=${encodeURIComponent(value.email)}`
                );
            } catch (error) {
                toast.error("An unexpected error occurred. Please try again.", {
                    id: toastId,
                });
            }
        },
    });

    const isProviderPage = path === providerPath;

    return (
        <div
            className={cn(
                "min-h-[90vh] flex items-center justify-center p-4 md:p-8",
                className
            )}
            {...props}
        >
            <div className="w-full max-w-lg">
                {/* Decorative elements - Top Left */}
                <div className="hidden md:block absolute top-10 left-10 w-24 h-24 bg-white rounded-full blur-2xl" />

                <Card className="border border-[#D97757] shadow-[0_15px_60px_rgba(217,119,87,0.08)] bg-[#FAF9F7] rounded-3xl overflow-hidden relative z-10">
                    <CardContent className="p-8 md:p-12">
                        {/* Header */}
                        <div className="text-center mb-10">
                            <Link href="/" className="inline-block mb-4 group">
                                <div className="w-14 h-14 bg-[#D97757] rounded-2xl flex items-center justify-center mx-auto transition-transform group-hover:scale-105">
                                    <div className="bg-[#D97757] p-2 rounded-lg group-hover:rotate-12 transition-transform shadow-lg shadow-[#D97757]/20">
                                        <UtensilsCrossed size={18} className="text-white" />
                                    </div>
                                </div>
                            </Link>
                            <h1 className="text-3xl md:text-4xl font-bold text-[#1F2933] font-serif tracking-tight">
                                {isProviderPage ? "Join as a Provider" : "Get Started"}
                            </h1>
                            <p className="text-[#6B7280] mt-2 font-sans text-sm md:text-base">
                                {isProviderPage
                                    ? "Share your meals with thousands of users."
                                    : "Create your free account on MealMate today."}
                            </p>
                        </div>

                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                form.handleSubmit();
                            }}
                        >
                            <FieldGroup className="gap-6">
                                {/* Name Field */}
                                <form.Field
                                    name="name"
                                    children={(field) => {
                                        const isInvalid =
                                            field.state.meta.isTouched && !field.state.meta.isValid;
                                        return (
                                            <Field>
                                                <FieldLabel
                                                    htmlFor={field.name}
                                                    className="text-[#1F2933] font-semibold"
                                                >
                                                    Full Name
                                                </FieldLabel>
                                                <div className="relative">
                                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6B7280]" />
                                                    <Input
                                                        type="text"
                                                        id={field.name}
                                                        value={field.state.value ?? ""}
                                                        placeholder="John Doe"
                                                        onChange={(e) => field.handleChange(e.target.value)}
                                                        className="pl-10 h-12 rounded-xl bg-white border border-[#FAF9F7] focus-visible:border-[#D97757]/30 focus-visible:ring-[#D97757]/10"
                                                    />
                                                </div>
                                                {isInvalid && (
                                                    <FieldError errors={field.state.meta.errors} />
                                                )}
                                            </Field>
                                        );
                                    }}
                                />

                                {/* Email Field */}
                                <form.Field
                                    name="email"
                                    children={(field) => {
                                        const isInvalid =
                                            field.state.meta.isTouched && !field.state.meta.isValid;
                                        return (
                                            <Field>
                                                <FieldLabel
                                                    htmlFor={field.name}
                                                    className="text-[#1F2933] font-semibold"
                                                >
                                                    Email
                                                </FieldLabel>
                                                <div className="relative">
                                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6B7280]" />
                                                    <Input
                                                        type="email"
                                                        id={field.name}
                                                        value={field.state.value ?? ""}
                                                        placeholder="you@email.com"
                                                        onChange={(e) => field.handleChange(e.target.value)}
                                                        className="pl-10 h-12 rounded-xl bg-white border border-[#FAF9F7] focus-visible:border-[#D97757]/30 focus-visible:ring-[#D97757]/10"
                                                    />
                                                </div>
                                                {isInvalid && (
                                                    <FieldError errors={field.state.meta.errors} />
                                                )}
                                            </Field>
                                        );
                                    }}
                                />

                                {/* Password Field */}
                                <form.Field
                                    name="password"
                                    children={(field) => {
                                        const isInvalid =
                                            field.state.meta.isTouched && !field.state.meta.isValid;
                                        return (
                                            <Field>
                                                <FieldLabel
                                                    htmlFor={field.name}
                                                    className="text-[#1F2933] font-semibold"
                                                >
                                                    Password
                                                </FieldLabel>
                                                <div className="relative">
                                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6B7280]" />
                                                    <Input
                                                        type={showPassword ? "text" : "password"}
                                                        id={field.name}
                                                        value={field.state.value ?? ""}
                                                        placeholder="••••••••"
                                                        onChange={(e) => field.handleChange(e.target.value)}
                                                        className="pl-10 pr-10 h-12 rounded-xl bg-white border border-[#FAF9F7] focus-visible:border-[#D97757]/30 focus-visible:ring-[#D97757]/10"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => setShowPassword(!showPassword)}
                                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-[#1F2933]"
                                                    >
                                                        {showPassword ? (
                                                            <EyeOff className="h-4 w-4" />
                                                        ) : (
                                                            <Eye className="h-4 w-4" />
                                                        )}
                                                    </button>
                                                </div>
                                                {isInvalid && (
                                                    <FieldError errors={field.state.meta.errors} />
                                                )}
                                            </Field>
                                        );
                                    }}
                                />

                                {/* Submit Button */}
                                <div className="pt-2">
                                    <Button
                                        type="submit"
                                        className="w-full h-12 bg-[#D97757] hover:bg-[#D97757]/90 text-white font-bold rounded-xl shadow-md transition-all duration-300 hover:scale-[1.01]"
                                    >
                                        {isProviderPage
                                            ? "Create a Provider Account"
                                            : "Create My Account"}
                                    </Button>
                                </div>

                                {/* Provider Call-to-action */}
                                {!isProviderPage && (
                                    <div className="text-center p-4 rounded-xl bg-[#D97757]/5 border border-[#D97757]/10">
                                        <p className="text-sm text-[#1F2933]">
                                            Are you a meal provider?{" "}
                                            <Link
                                                href="/become-provider"
                                                className="text-[#D97757] font-semibold hover:underline"
                                            >
                                                Join our platform today
                                            </Link>
                                        </p>
                                    </div>
                                )}

                                {/* Login Link */}
                                <FieldDescription className="text-center text-[#6B7280] pt-2">
                                    Already have an account?{" "}
                                    <Link
                                        href="/login"
                                        className="text-[#D97757] font-semibold hover:underline"
                                    >
                                        Log In
                                    </Link>
                                </FieldDescription>
                            </FieldGroup>
                        </form>
                    </CardContent>
                </Card>
            </div>

            {/* Decorative elements - Bottom Right */}
            <div className="hidden md:block absolute bottom-10 right-10 w-24 h-24 bg-[#D97757]/5 rounded-full blur-2xl" />
        </div>
    );
}