"use client";

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
import { authClient } from "@/lib/auth-client";
import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import * as z from "zod";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, "Minimum length is 8"),
});

export function LoginForm({ ...props }: React.ComponentProps<typeof Card>) {
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();
    const handleGoogleLogin = async () => {
        const data = authClient.signIn.social({
            provider: "google",
            callbackURL: "http://localhost:3000",
        });
        console.log(data);
    };

    const form = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        validators: {
            onSubmit: formSchema,
        },
        onSubmit: async ({ value }) => {
            const toastId = toast.loading("Logging in...");
            try {
                const { data, error } = await authClient.signIn.email(value);

                if (error) {
                    toast.error(error.message, { id: toastId });
                    return;
                }
                toast.success("User Logged in Successfully", { id: toastId });
                // router.push("/");
                window.location.href = "/";
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
                    <CardTitle className="font-heading text-2xl">Welcome Back</CardTitle>
                    <CardDescription className="font-body text-white text-sm mt-1">
                        Log in to your MealMate account
                    </CardDescription>
                </CardHeader>

                <CardContent className="px-6 py-8 sm:px-10">
                    <form
                        id="login-form"
                        onSubmit={(e) => {
                            e.preventDefault();
                            form.handleSubmit();
                        }}
                    >
                        <FieldGroup className="space-y-5">
                            {/* Email */}
                            <form.Field
                                name="email"
                                children={(field) => {
                                    const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                                    return (
                                        <Field>
                                            <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                                            <Input
                                                type="email"
                                                id={field.name}
                                                name={field.name}
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
                        </FieldGroup>
                    </form>
                </CardContent>

                <CardFooter className="flex flex-col gap-4 px-6 py-6 sm:px-10">
                    <Button form="login-form" type="submit" className="w-full bg-[#D97757] hover:bg-[#c96a4f] text-white py-3 hover:cursor-pointer">
                        Log In
                    </Button>

                    <Button
                        onClick={() => handleGoogleLogin()}
                        variant="outline"
                        type="button"
                        className="w-full py-3"
                    >
                        Continue with Google
                    </Button>

                    <p className="text-center text-sm font-body text-[#6B7280] mt-2">
                        Don’t have an account?{" "}
                        <a href="/register" className="text-[#D97757] hover:underline">
                            Register
                        </a>
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
}
