"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import {
    ArrowRight,
    CheckCircle2,
    Home,
    Loader2,
    Mail,
    XCircle,
    RefreshCw,
    UtensilsCrossed,
} from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

export function VerifyEmailContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const token = searchParams.get("token");
    const [status, setStatus] = useState<"loading" | "success" | "error">(
        token ? "loading" : "error",
    );
    const [error, setError] = useState<string | null>(
        token ? null : "No verification token found.",
    );

    useEffect(() => {
        if (!token) return;

        const verify = async () => {
            const { error } = await authClient.verifyEmail({
                query: { token },
            });

            if (error) {
                setStatus("error");
                setError(error.message || "Failed to verify email.");
                toast.error("Email verification failed.");
            } else {
                setStatus("success");
                toast.success("Email verified successfully!");
                setTimeout(() => {
                    router.push("/login");
                }, 5000);
            }
        };

        verify();
    }, [token, router]);

    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-[#FAF9F7]">
            <div className="max-w-md w-full">
                {/* Branding */}
                <div className="text-center mb-10">
                    <Link href="/" className="inline-flex flex-col items-center gap-3 group">
                        <div className="w-14 h-14 rounded-2xl bg-[#D97757] flex items-center justify-center shadow-lg transition-transform group-hover:scale-105">
                            <div className="bg-[#D97757] p-2 rounded-lg group-hover:rotate-12 transition-transform shadow-lg shadow-[#D97757]/20">
                                <UtensilsCrossed size={18} className="text-white" />
                            </div>
                        </div>
                        <span className="text-2xl font-serif font-bold text-[#1F2933]">MealMate</span>
                    </Link>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={status}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Card className="border-none shadow-[0_20px_50px_rgba(217,119,87,0.1)] bg-white rounded-[2.5rem] overflow-hidden">
                            <CardContent className="pt-12 pb-10 px-8">
                                {status === "loading" && (
                                    <div className="flex flex-col items-center text-center space-y-6">
                                        <div className="relative">
                                            <div className="w-24 h-24 rounded-full bg-[#FAF9F7] flex items-center justify-center border-2 border-[#D97757]/10">
                                                <Loader2 className="w-10 h-10 text-[#D97757] animate-spin" />
                                            </div>
                                            <motion.div
                                                animate={{ scale: [1, 1.2, 1] }}
                                                transition={{ repeat: Infinity, duration: 2 }}
                                                className="absolute -bottom-1 -right-1 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center"
                                            >
                                                <Mail className="w-5 h-5 text-[#D97757]" />
                                            </motion.div>
                                        </div>
                                        <div className="space-y-2">
                                            <h1 className="text-2xl font-serif font-bold text-[#1F2933]">Verifying Email</h1>
                                            <p className="text-[#6B7280] text-sm">Fine-tuning your kitchen access...</p>
                                        </div>
                                    </div>
                                )}

                                {status === "success" && (
                                    <div className="flex flex-col items-center text-center space-y-8">
                                        <div className="w-24 h-24 rounded-full bg-[#D97757]/5 flex items-center justify-center border-2 border-[#D97757]/20">
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ type: "spring", damping: 12 }}
                                            >
                                                <CheckCircle2 className="w-12 h-12 text-[#D97757]" />
                                            </motion.div>
                                        </div>
                                        <div className="space-y-3">
                                            <h1 className="text-3xl font-serif font-bold text-[#1F2933]">Success!</h1>
                                            <p className="text-[#6B7280] text-sm leading-relaxed">
                                                Your email is verified. Welcome to the **MealMate** family. We are redirecting you to your dashboard.
                                            </p>
                                        </div>
                                        <Button asChild className="w-full h-12 bg-[#D97757] hover:bg-[#D97757]/90 rounded-xl" size="lg">
                                            <Link href="/login">
                                                Go to Login <ArrowRight className="ml-2 w-4 h-4" />
                                            </Link>
                                        </Button>
                                    </div>
                                )}

                                {status === "error" && (
                                    <div className="flex flex-col items-center text-center space-y-8">
                                        <div className="w-24 h-24 rounded-full bg-red-50 flex items-center justify-center border-2 border-red-100">
                                            <XCircle className="w-12 h-12 text-red-500" />
                                        </div>
                                        <div className="space-y-3">
                                            <h1 className="text-3xl font-serif font-bold text-[#1F2933]">Verification Failed</h1>
                                            <p className="text-[#6B7280] text-sm leading-relaxed">
                                                {error || "The link may have expired or is no longer valid."}
                                            </p>
                                        </div>
                                        <div className="w-full space-y-3 pt-4">
                                            <Button asChild className="w-full h-12 bg-[#D97757] hover:bg-[#D97757]/90 rounded-xl">
                                                <Link href="/register">
                                                    <RefreshCw className="mr-2 w-4 h-4" /> Try Registering Again
                                                </Link>
                                            </Button>
                                            <Button variant="ghost" asChild className="w-full text-[#6B7280] hover:text-[#1F2933]">
                                                <Link href="/">
                                                    <Home className="mr-2 w-4 h-4" /> Back to Home
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </motion.div>
                </AnimatePresence>

                {/* Help Footer */}
                <div className="mt-12 text-center">
                    <p className="text-[#6B7280] text-sm font-sans">
                        Confused? <a href="mailto:support@mealmate.com" className="text-[#D97757] font-bold hover:underline">Contact Support</a>
                    </p>
                </div>
            </div>
        </div>
    );
}