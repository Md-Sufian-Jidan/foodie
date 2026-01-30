"use client";
import { motion } from "framer-motion";

const steps = ["PLACED", "PREPARING", "READY", "DELIVERED"];

export function OrderTimeline({ status }: { status: string }) {
    const currentStep = steps.indexOf(status);

    return (
        <div className="relative flex justify-between w-full py-4">
            {/* Background Line */}
            <div className="absolute top-5 left-0 w-full h-0.5 bg-[#6B7280]/20 z-0" />

            {steps.map((step, i) => {
                const isActive = i <= currentStep;
                return (
                    <div key={step} className="relative z-10 flex flex-col items-center flex-1">
                        <motion.div
                            initial={false}
                            animate={{
                                scale: isActive ? 1.2 : 1,
                                backgroundColor: isActive ? "#D97757" : "#E5E7EB",
                            }}
                            className="h-4 w-4 rounded-full border-2 border-[#FAF9F7] dark:border-[#1C1A18]"
                        />
                        <span className={`mt-3 text-[10px] font-bold tracking-tighter sm:tracking-normal sm:text-xs uppercase ${isActive ? "text-[#D97757] font-bold" : "text-[#6B7280]"
                            }`}>
                            {step}
                        </span>
                    </div>
                );
            })}
        </div>
    );
}