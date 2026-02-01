"use client";

import { AppSidebar } from "@/components/layout/app-sidebar";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useSession } from "@/lib/auth-client";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Loader2, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardLayout({
    admin,
    customer,
    provider,
}: {
    admin: React.ReactNode;
    customer: React.ReactNode;
    provider: React.ReactNode;
}) {
    const { data, isPending } = useSession();
    const router = useRouter();
    const pathname = usePathname();

    // Loading State
    if (isPending) {
        return (
            <div className="flex h-screen w-full items-center justify-center bg-[#FAF9F7]">
                <Loader2 className="h-8 w-8 animate-spin text-[#D97757]" />
            </div>
        );
    }

    // Auth Guard
    if (!data) {
        router.replace("/login");
        return null;
    }

    const role = data.user.role;

    // Helper to format breadcrumb from pathname
    const pathSegments = pathname.split("/").filter(Boolean);

    return (
        <SidebarProvider>
            <div className="flex min-h-screen w-full bg-[#FAF9F7] dark:bg-[#121110] font-jakarta">
                <AppSidebar role={role} />

                <SidebarInset className="flex flex-col bg-transparent">
                    {/* Enhanced Header */}
                    <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-2 border-b bg-white/80 dark:bg-[#1C1A18]/80 backdrop-blur-md px-6 transition-all">
                        <div className="flex flex-1 items-center gap-2">
                            <SidebarTrigger className="-ml-1 hover:bg-[#D97757]/10 hover:text-[#D97757]" />
                            <Separator orientation="vertical" className="mx-2 h-4 hidden sm:block" />

                            <Breadcrumb className="hidden md:block">
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/" className="hover:text-[#D97757] transition-colors">
                                            MealMate
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                    <BreadcrumbItem>
                                        <BreadcrumbPage className="font-bold text-[#1F2933] dark:text-[#F5F4F2] capitalize">
                                            {pathSegments[0]?.replaceAll("-", " ") || "Dashboard"}
                                        </BreadcrumbPage>                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </div>

                        {/* Top Bar Actions */}
                        <div className="flex items-center gap-4">
                            {/* <Button variant="ghost" size="icon" className="relative text-[#6B7280]"> */}
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="relative text-[#6B7280]"
                                    aria-label="Notifications"
                                    onClick={() => { /* TODO: Implement notifications */ }}
                                >
                                    <Bell size={20} />
                                    {/* TODO: Conditionally render based on unread count */}
                                    {/* <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-[#D97757] border-2 border-white" /> */}
                                </Button>
                                <div className="hidden sm:flex flex-col items-center gap-3 mr-2">
                                    <span className="text-sm font-bold leading-none">{data.user.name}</span>
                                    <Badge variant="secondary" className="text-[9px] px-1.5 py-0 h-4 bg-[#6B8E7D]/10 text-[#6B8E7D] border-none font-bold tracking-widest uppercase">
                                        {role}
                                    </Badge>
                                </div>
                        </div>
                    </header>

                    {/* Dynamic Main Content with Animation */}
                    <motion.main
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-1 flex-col p-4 md:p-8 md:pt-6"
                    >
                        <div className="max-w-7xl mx-auto w-full space-y-6">
                            {role === "ADMIN" && admin}
                            {role === "CUSTOMER" && customer}
                            {role === "PROVIDER" && provider}
                        </div>
                    </motion.main>
                </SidebarInset>
            </div>
        </SidebarProvider>
    );
}