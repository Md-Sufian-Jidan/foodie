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
    BreadcrumbList,
    BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

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

    if (isPending) return null;

    if (!data) {
        router.replace("/login");
        return null;
    }

    const role = data.user.role;
    return (
        <SidebarProvider>
            <AppSidebar role={role} />
            <SidebarInset>
                <header className="flex h-16 items-center gap-2 border-b px-4">
                    <SidebarTrigger />
                    <Separator orientation="vertical" className="h-4" />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbPage>Dashboard</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </header>

                <main className="flex flex-1 flex-col gap-4 p-4">
                    {role === "ADMIN" && admin}
                    {role === "CUSTOMER" && customer}
                    {role === "PROVIDER" && provider}
                </main>
            </SidebarInset>
        </SidebarProvider>
    );
}
