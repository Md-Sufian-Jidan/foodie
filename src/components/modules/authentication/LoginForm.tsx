"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { useForm } from "@tanstack/react-form";
import { motion } from "framer-motion";
import {
    Eye,
    EyeOff,
    Lock,
    Mail,
    UtensilsCrossed,
    Sun,
    Moon,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as React from "react";
import { toast } from "sonner";
import * as z from "zod";
import { useTheme } from "next-themes";

const LoginFormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

export function LoginForm({ className }: React.ComponentProps<"div">) {
    const [showPassword, setShowPassword] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const router = useRouter();
    const { theme, setTheme } = useTheme();

    const form = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        validators: { onSubmit: LoginFormSchema },
        onSubmit: async ({ value }) => {
            setLoading(true);
            const toastId = toast.loading("Logging in...");
            try {
                const { error } = await authClient.signIn.email(value);
                if (error) {
                    toast.error(error.message, { id: toastId });
                    return;
                }
                toast.success("Welcome back!", { id: toastId });
                router.push("/");
            } catch {
                toast.error("Login failed", { id: toastId });
            } finally {
                setLoading(false);
            }
        },
    });

    // ✅ Quick Login Function
    const quickLogin = async (email: string, password: string) => {
        setLoading(true);
        const toastId = toast.loading("Quick login...");
        try {
            const { error } = await authClient.signIn.email({ email, password });
            if (error) {
                toast.error(error.message, { id: toastId });
                return;
            }
            toast.success("Logged in successfully!", { id: toastId });
            router.push("/");
        } catch {
            toast.error("Login failed", { id: toastId });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className={cn(
                "min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-[#FAF9F7] to-white dark:from-[#0F172A] dark:to-[#020617]",
                className
            )}
        >
            {/* 🌗 Theme Toggle */}
            <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/60 dark:bg-white/10 backdrop-blur-md border border-white/20"
            >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md"
            >
                <Card className="rounded-3xl border border-white/20 bg-white/60 dark:bg-white/10 backdrop-blur-xl shadow-xl">
                    <CardContent className="p-8">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <div className="w-14 h-14 bg-[#D97757] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                <UtensilsCrossed className="text-white" />
                            </div>
                            <h1 className="text-2xl font-bold text-[#1F2933] dark:text-white">
                                Welcome Back
                            </h1>
                        </div>

                        {/* ✅ Quick Login Buttons */}
                        <div className="grid grid-cols-3 gap-2 mb-6">
                            <Button
                                variant="outline"
                                onClick={() =>
                                    quickLogin("adminfoodie@gmail.com", "Admin@1234")
                                }
                            >
                                Admin
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() =>
                                    quickLogin("superprovider@gmail.com", "Superprovider@com")
                                }
                            >
                                Provider
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() =>
                                    quickLogin("supercustomer@gmail.com", "Supercustomer@com")
                                }
                            >
                                User
                            </Button>
                        </div>

                        {/* Form */}
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                form.handleSubmit();
                            }}
                        >
                            <FieldGroup className="gap-5">
                                {/* Email */}
                                <form.Field
                                    name="email"
                                    children={(field) => (
                                        <Field>
                                            <FieldLabel>Email</FieldLabel>
                                            <div className="relative">
                                                <Mail className="absolute left-3 top-3 w-4 h-4" />
                                                <Input
                                                    value={field.state.value}
                                                    onChange={(e) =>
                                                        field.handleChange(e.target.value)
                                                    }
                                                    className="pl-10"
                                                />
                                            </div>
                                            <FieldError errors={field.state.meta.errors} />
                                        </Field>
                                    )}
                                />

                                {/* Password */}
                                <form.Field
                                    name="password"
                                    children={(field) => (
                                        <Field>
                                            <FieldLabel>Password</FieldLabel>
                                            <div className="relative">
                                                <Lock className="absolute left-3 top-3 w-4 h-4" />
                                                <Input
                                                    type={showPassword ? "text" : "password"}
                                                    value={field.state.value}
                                                    onChange={(e) =>
                                                        field.handleChange(e.target.value)
                                                    }
                                                    className="pl-10 pr-10"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="absolute right-3 top-2"
                                                >
                                                    {showPassword ? <EyeOff /> : <Eye />}
                                                </button>
                                            </div>
                                        </Field>
                                    )}
                                />

                                <Button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-[#D97757] hover:bg-[#c96a4f]"
                                >
                                    {loading ? "Logging in..." : "Login"}
                                </Button>

                                <p className="text-center text-sm text-muted-foreground">
                                    Don’t have an account?{" "}
                                    <Link href="/register" className="text-[#D97757] font-medium">
                                        Sign up
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