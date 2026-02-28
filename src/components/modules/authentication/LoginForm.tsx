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
import { useForm } from "@tanstack/react-form";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, Mail, UtensilsCrossed } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as React from "react";
import { toast } from "sonner";
import * as z from "zod";

const LoginFormSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

export function LoginForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const [showPassword, setShowPassword] = React.useState(false);
    const router = useRouter();

    const form = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        validators: { onSubmit: LoginFormSchema },
        onSubmit: async ({ value }) => {
            const toastId = toast.loading("Verifying credentials...");
            try {
                const { error } = await authClient.signIn.email(value);
                if (error) {
                    toast.error(error.message, { id: toastId });
                    return;
                }
                toast.success("Welcome back to MealMate!", { id: toastId });
                router.push("/");
            } catch (error) {
                toast.error("An unexpected error occurred.", { id: toastId });
            }
        },
    });

    return (
        <div className={cn("min-h-[80vh] flex items-center justify-center p-4 bg-[#FAF9F7]", className)} {...props}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md"
            >
                <Card className="border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white overflow-hidden rounded-[2rem]">
                    <CardContent className="p-8 md:p-10">
                        {/* Header */}
                        <div className="text-center mb-10">
                            <motion.div
                                initial={{ scale: 0.5 }}
                                animate={{ scale: 1 }}
                                className="w-16 h-16 bg-[#D97757] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#D97757]/20"
                            >
                                <div className="bg-[#D97757] p-2 rounded-lg group-hover:rotate-12 transition-transform shadow-lg shadow-[#D97757]/20">
                                    <UtensilsCrossed size={18} className="text-white" />
                                </div>
                            </motion.div>
                            <h1 className="text-3xl font-serif font-bold text-[#1F2933]">Welcome Back</h1>
                            <p className="text-[#6B7280] mt-2 font-sans">Delicious meals are just a login away.</p>
                        </div>

                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                form.handleSubmit();
                            }}
                        >
                            <FieldGroup className="gap-6">
                                <form.Field
                                    name="email"
                                    children={(field) => {
                                        const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                                        return (
                                            <Field>
                                                <FieldLabel className="text-[#1F2933] font-semibold">Email</FieldLabel>
                                                <div className="relative">
                                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6B7280]" />
                                                    <Input
                                                        type="email"
                                                        value={field.state.value ?? ""}
                                                        placeholder="name@example.com"
                                                        onChange={(e) => field.handleChange(e.target.value)}
                                                        className="pl-10 bg-[#FAF9F7] border-none focus-visible:ring-2 focus-visible:ring-[#D97757]/20 h-12 rounded-xl"
                                                    />
                                                </div>
                                                {isInvalid && <FieldError className="text-sm font-medium" errors={field.state.meta.errors} />}
                                            </Field>
                                        );
                                    }}
                                />

                                <form.Field
                                    name="password"
                                    children={(field) => {
                                        const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                                        return (
                                            <Field>
                                                <div className="flex items-center justify-between">
                                                    <FieldLabel className="text-[#1F2933] font-semibold">Password</FieldLabel>
                                                    <Link href="#" className="text-xs text-[#D97757] hover:underline font-medium">Forgot Password?</Link>
                                                </div>
                                                <div className="relative">
                                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6B7280]" />
                                                    <Input
                                                        type={showPassword ? "text" : "password"}
                                                        value={field.state.value ?? ""}
                                                        placeholder="••••••••"
                                                        onChange={(e) => field.handleChange(e.target.value)}
                                                        className="pl-10 pr-10 bg-[#FAF9F7] border-none focus-visible:ring-2 focus-visible:ring-[#D97757]/20 h-12 rounded-xl"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => setShowPassword(!showPassword)}
                                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-[#1F2933]"
                                                    >
                                                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                                    </button>
                                                </div>
                                                {isInvalid && <FieldError className="text-sm font-medium" errors={field.state.meta.errors} />}
                                            </Field>
                                        );
                                    }}
                                />

                                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                    <Button type="submit" className="w-full h-12 bg-[#D97757] hover:bg-[#D97757]/90 text-white font-bold rounded-xl shadow-md transition-all">
                                        Log In
                                    </Button>
                                </motion.div>

                                <div className="relative py-2">
                                    <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-[#FAF9F7]" /></div>
                                    <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-[#6B7280]">Or continue with</span></div>
                                </div>

                                <Button variant="outline" type="button" className="w-full h-12 border-[#FAF9F7] hover:bg-[#FAF9F7] text-[#1F2933] rounded-xl flex gap-2">
                                    <svg className="h-5 w-5" viewBox="0 0 24 24">
                                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                    </svg>
                                    Google
                                </Button>

                                <p className="text-center text-sm text-[#6B7280] font-sans">
                                    Don&apos;t have an account?{" "}
                                    <Link href="/register" className="text-[#D97757] font-bold hover:underline">
                                        Sign Up
                                    </Link>
                                </p>
                            </FieldGroup>
                        </form>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
}