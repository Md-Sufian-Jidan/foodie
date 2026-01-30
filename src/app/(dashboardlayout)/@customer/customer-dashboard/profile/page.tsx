'use client'

import ProfileForm from "@/components/modules/customer/profile/ProfileForm";
import { useSession } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { motion } from "framer-motion";
import ProfileDetails from "@/components/modules/customer/profile/ProfileDetails";

export default function ProfilePage() {
    const { data, isPending } = useSession();

    if (isPending) return (
        <div className="flex items-center justify-center min-h-[60vh]">
            <p className="text-[#6B7280] animate-pulse font-jakarta">Loading profile...</p>
        </div>
    );

    if (!data) redirect("/login");

    return (
        <div className="max-w-7xl mx-auto space-y-8 p-4 lg:p-8 bg-[#FAF9F7] dark:bg-[#121110] rounded-4xl">
            <header className="space-y-1">
                <h1 className="font-serif text-4xl font-bold text-[#1F2933] dark:text-[#F5F4F2]">
                    My Profile
                </h1>
                <p className="text-[#6B7280] dark:text-[#B3B3B0] font-sans">
                    Update your personal information and preferences.
                </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Column: Form */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="lg:col-span-7"
                >
                    <ProfileForm user={data.user} />
                </motion.div>

                {/* Right Column: Details */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="lg:col-span-5"
                >
                    <ProfileDetails user={data.user} />
                </motion.div>
            </div>
        </div>
    );
}