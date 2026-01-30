"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
    { label: "Dashboard", href: "/customer/dashboard" },
    { label: "My Orders", href: "/customer/orders" },
    { label: "Cart", href: "/customer/cart" },
    { label: "Profile", href: "/customer/profile" },
];

export default function CustomerSidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 border-r bg-muted/40 p-4 hidden md:block">
            <h2 className="mb-6 font-serif text-xl font-bold">Customer</h2>

            <nav className="space-y-2">
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                            "block rounded-md px-3 py-2 text-sm transition hover:bg-muted",
                            pathname === link.href && "bg-muted font-medium"
                        )}
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>
        </aside>
    );
}
