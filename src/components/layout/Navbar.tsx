"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./ModeToggle";
import { authClient } from "@/lib/auth-client";

const navLinks = [
    { label: "Browse Meals", href: "/meals" },
];

function NavLink({
    href,
    children,
    active,
}: {
    href: string;
    children: React.ReactNode;
    active?: boolean;
}) {
    return (
        <Link
            href={href}
            className={cn(
                "relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                active && "text-foreground"
            )}
        >
            {children}
            {active && (
                <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary"
                />
            )}
        </Link>
    );
}

function MenuItem({ href, children }: any) {
    return (
        <DropdownMenuItem asChild>
            <Link href={href}>{children}</Link>
        </DropdownMenuItem>
    );
}

function UserMenu({
    role,
    name,
}: {
    role: "CUSTOMER" | "PROVIDER" | "ADMIN";
    name: string;
}) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer">
                    <AvatarFallback>{name.charAt(0)}</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-48">
                {role === "CUSTOMER" && (
                    <>
                        <MenuItem href="/customer-dashboard">Dashboard</MenuItem>
                        <MenuItem href="/customer-dashboard/cart">Cart</MenuItem>
                        <MenuItem href="/customer-dashboard/orders">Orders</MenuItem>
                        <MenuItem href="/customer-dashboard/profile">Profile</MenuItem>
                    </>
                )}

                {role === "PROVIDER" && (
                    <>
                        <MenuItem href="/provider-dashboard">Dashboard</MenuItem>
                        <MenuItem href="/provider/menu">Menu</MenuItem>
                        <MenuItem href="/provider/orders">Orders</MenuItem>
                    </>
                )}

                {role === "ADMIN" && (
                    <>
                        <MenuItem href="/admin-dashboard">Admin Dashboard</MenuItem>
                        <MenuItem href="/all-users">All Users</MenuItem>
                    </>
                )}

                <DropdownMenuItem
                    className="cursor-pointer text-red-500"
                    onClick={async () => {
                        await authClient.signOut();
                    }}
                >
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default function Navbar() {
    const pathname = usePathname();
    const { data: session, isPending } = authClient.useSession();

    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur"
        >
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="font-serif text-xl font-bold">
                    MealMate
                </Link>

                {/* Desktop Nav */}
                <div className="hidden items-center gap-6 md:flex">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.href}
                            href={link.href}
                            active={pathname === link.href}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </div>

                {/* Right */}
                <div className="flex items-center gap-3">
                    <ModeToggle />

                    {isPending ? null : session?.user ? (
                        <UserMenu
                            name={session.user.name}
                            role={session.user.role}
                        />
                    ) : (
                        <>
                            <Button variant="ghost" asChild>
                                <Link href="/login">Login</Link>
                            </Button>
                            <Button asChild>
                                <Link href="/register">Register</Link>
                            </Button>
                        </>
                    )}
                </div>
            </nav>
        </motion.header>
    );
}
