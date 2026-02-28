"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    ArrowLeft,
    CheckCircle2,
    Clock,
    Mail,
    RefreshCw,
    UtensilsCrossed,
    Inbox
} from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function VerifyRequest() {
    const searchParams = useSearchParams();
    const email = searchParams.get("email");
    const [resendStatus, setResendStatus] = useState<"idle" | "sending" | "sent">(
        "idle",
    );

    const handleResend = async () => {
        setResendStatus("sending");
        // Simulate resend delay
        setTimeout(() => {
            setResendStatus("sent");
            setTimeout(() => setResendStatus("idle"), 3000);
        }, 1500);
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-[#FAF9F7]">
            <div className="max-w-md w-full">
                {/* Branding Logo */}
                <div className="text-center mb-10">
                    <Link href="/" className="inline-flex flex-col items-center gap-3 group">
                        <div className="w-14 h-14 rounded-2xl bg-[#D97757] flex items-center justify-center shadow-lg transition-transform group-hover:scale-105">
                            <div className="bg-[#D97757] p-2 rounded-lg group-hover:rotate-12 transition-transform shadow-lg shadow-[#D97757]/20">
                                <UtensilsCrossed size={22} className="text-white" />
                            </div>
                        </div>
                        <span className="text-2xl font-serif font-bold text-[#1F2933]">MealMate</span>
                    </Link>
                </div>

                {/* Content Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Card className="border-none shadow-[0_20px_50px_rgba(217,119,87,0.08)] bg-white rounded-[2.5rem] overflow-hidden">
                        <CardContent className="pt-12 pb-10 px-8">
                            <div className="flex flex-col items-center text-center">
                                {/* Animated Mail Icon */}
                                <div className="relative mb-8">
                                    <div className="w-24 h-24 rounded-full bg-[#FAF9F7] flex items-center justify-center border-2 border-[#D97757]/10">
                                        <Inbox className="w-10 h-10 text-[#D97757]" />
                                    </div>
                                    <motion.div
                                        animate={{ y: [0, -5, 0] }}
                                        transition={{ repeat: Infinity, duration: 2.5 }}
                                        className="absolute -bottom-1 -right-1 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center border border-[#FAF9F7]"
                                    >
                                        <Mail className="w-5 h-5 text-[#D97757]" />
                                    </motion.div>
                                </div>

                                <div className="space-y-3 mb-8">
                                    <h1 className="text-3xl font-serif font-bold text-[#1F2933]">
                                        Check Your Email
                                    </h1>
                                    <p className="text-[#6B7280] text-sm max-w-[280px] mx-auto leading-relaxed">
                                        We&apos;ve sent a magic link to verify your account at
                                    </p>

                                    {email && (
                                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FAF9F7] border border-[#D97757]/10 rounded-full">
                                            <span className="text-sm font-medium text-[#D97757] break-all">
                                                {email}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Instruction Blocks */}
                                <div className="w-full space-y-3 mb-8">
                                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#FAF9F7] text-left border border-black/5">
                                        <div className="mt-1 bg-white p-1.5 rounded-lg shadow-sm">
                                            <Clock className="w-4 h-4 text-[#D97757]" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-[#1F2933]">Next Steps</p>
                                            <p className="text-xs text-[#6B7280] mt-0.5 leading-relaxed">
                                                Click the link in your inbox to instantly activate your chef profile.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-white text-left border border-[#D97757]/10">
                                        <div className="mt-1 bg-[#FAF9F7] p-1.5 rounded-lg">
                                            <Mail className="w-4 h-4 text-[#D97757]" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-[#1F2933]">Missing Email?</p>
                                            <p className="text-xs text-[#6B7280] mt-0.5">
                                                Check your spam folder or try resending the link below.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="w-full space-y-4">
                                    <Button
                                        onClick={handleResend}
                                        disabled={resendStatus !== "idle"}
                                        className={cn(
                                            "w-full h-12 rounded-xl transition-all duration-300 font-medium shadow-md",
                                            resendStatus === "sent"
                                                ? "bg-green-500 hover:bg-green-600 text-white"
                                                : "bg-[#D97757] hover:bg-[#D97757]/90 text-white"
                                        )}
                                        size="lg"
                                    >
                                        <AnimatePresence mode="wait">
                                            {resendStatus === "idle" && (
                                                <motion.div key="idle" className="flex items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                                    <RefreshCw className="mr-2 w-4 h-4" /> Resend Verification
                                                </motion.div>
                                            )}
                                            {resendStatus === "sending" && (
                                                <motion.div key="sending" className="flex items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                                    <RefreshCw className="mr-2 w-4 h-4 animate-spin" /> Sending...
                                                </motion.div>
                                            )}
                                            {resendStatus === "sent" && (
                                                <motion.div key="sent" className="flex items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                                    <CheckCircle2 className="mr-2 w-4 h-4" /> Link Sent!
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </Button>

                                    <Button variant="ghost" asChild className="w-full text-[#6B7280] hover:text-[#1F2933] hover:bg-transparent group" size="sm">
                                        <Link href="/login">
                                            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                            Back to Sign In
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Footer Quote */}
                <p className="mt-10 text-center text-xs text-[#6B7280] font-sans">
                    Need technical assistance?{" "}
                    <a href="mailto:support@mealmate.com" className="text-[#D97757] font-bold hover:underline">
                        Contact Kitchen Support
                    </a>
                </p>
            </div>
        </div>
    );
}

// Utility function to handle conditional classes
function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(" ");
}