"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import { ModeToggle } from "./ModeToggle"

// replace with better-auth hook
import { useSession, signOut } from "@/lib/auth-client"

const navLinks = [
    { label: "Browse Meals", href: "/meals" },
]


function NavLink({
    href,
    children,
    active,
}: {
    href: string
    children: React.ReactNode
    active?: boolean
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
    )
}

function UserMenu({
    role,
    name,
}: {
    role: "customer" | "provider" | "admin"
    name: string
}) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer">
                    <AvatarFallback>
                        {name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-48">
                {role === "customer" && (
                    <>
                        <MenuItem href="/cart">Cart</MenuItem>
                        <MenuItem href="/orders">Orders</MenuItem>
                        <MenuItem href="/profile">Profile</MenuItem>
                    </>
                )}

                {role === "provider" && (
                    <>
                        <MenuItem href="/provider/dashboard">Dashboard</MenuItem>
                        <MenuItem href="/provider/menu">Menu</MenuItem>
                        <MenuItem href="/provider/orders">Orders</MenuItem>
                    </>
                )}

                {role === "admin" && (
                    <MenuItem href="/admin">Admin Dashboard</MenuItem>
                )}

                <DropdownMenuItem
                    className="text-red-500 cursor-pointer"
                    onClick={() => signOut()}
                >
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

function MenuItem({ href, children }: any) {
    return (
        <DropdownMenuItem asChild>
            <Link href={href}>{children}</Link>
        </DropdownMenuItem>
    )
}

export default function Navbar() {
    const pathname = usePathname()
    const { data } = useSession();
    console.log(data?.user);

    interface Roles {
        admin: "ADMIN";
        customer: "CUSTOMER"
    }

    const isAuthenticated = false;
    const user = {
        role: "ADMIN",
        name: "SUFIAN"
    }

    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur"
        >
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">

                {/* Logo */}
                <Link
                    href="/"
                    className="font-serif text-xl font-bold text-foreground"
                >
                    MealMate
                </Link>

                {/* Desktop Nav */}
                <div className="hidden items-center gap-6 md:flex">
                    {navLinks.map(link => (
                        <NavLink
                            key={link.href}
                            href={link.href}
                            active={pathname === link.href}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </div>

                {/* Right side */}
                <div className="flex items-center gap-3">
                    <ModeToggle />

                    {!isAuthenticated ? (
                        <>
                            <Button variant="ghost" asChild>
                                <Link href="/login">Login</Link>
                            </Button>
                            <Button asChild>
                                <Link href="/register">Register</Link>
                            </Button>
                        </>
                    ) : (
                        <UserMenu role={user.role} name={user.name} />
                    )}
                </div>
            </nav>
        </motion.header>
    )
}
