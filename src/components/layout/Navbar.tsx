"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    UtensilsCrossed,
    Menu,
    LayoutDashboard,
    ShoppingBag,
    User,
    LogOut,
    PlusCircle,
    Settings,
    ChefHat,
    ShieldCheck
} from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { ModeToggle } from "./ModeToggle";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navLinks = [
    { label: "Browse Meals", href: "/meals" },
];

export default function Navbar() {
    const pathname = usePathname();
    const { data: session, isPending } = authClient.useSession();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        >
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
                {/* Logo Area */}
                <Link href="/" className="flex items-center gap-2 group shrink-0">
                    <div className="bg-[#D97757] p-2 rounded-lg group-hover:rotate-12 transition-transform shadow-lg shadow-[#D97757]/20">
                        <UtensilsCrossed size={18} className="text-white" />
                    </div>
                    <span className="font-serif text-2xl font-bold tracking-tight md:text-3xl">
                        MealMate
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <NavLink key={link.href} href={link.href} active={pathname === link.href}>
                            {link.label}
                        </NavLink>
                    ))}
                </div>

                {/* Action Area */}
                <div className="flex items-center gap-2 sm:gap-4">
                    <ModeToggle />

                    <div className="hidden sm:flex items-center gap-2">
                        {isPending ? null : session?.user ? (
                            <UserMenu user={session.user} />
                        ) : (
                            <div className="flex items-center gap-2">
                                <Button variant="ghost" asChild className="font-medium">
                                    <Link href="/login">Login</Link>
                                </Button>
                                <Button asChild className="bg-[#D97757] hover:bg-[#D97757]/90 rounded-full px-6">
                                    <Link href="/register">Join Now</Link>
                                </Button>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Trigger */}
                    <div className="md:hidden flex items-center gap-2">
                        {!session?.user && !isPending && (
                            <Button size="sm" asChild className="bg-[#D97757] text-xs h-8 px-3 rounded-full">
                                <Link href="/login">Join</Link>
                            </Button>
                        )}
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="md:hidden">
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] font-jakarta">
                                <SheetHeader className="text-left border-b pb-4 mb-4">
                                    <SheetTitle className="font-serif text-2xl">MealMate</SheetTitle>
                                </SheetHeader>
                                <div className="flex flex-col gap-4">
                                    {session?.user && (
                                        <div className="flex items-center gap-3 p-3 bg-muted rounded-xl mb-4">
                                            <Avatar>
                                                <AvatarImage src={session.user.image} />
                                                <AvatarFallback>{session.user.name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <div className="flex flex-col">
                                                <span className="text-sm font-bold truncate">{session.user.name}</span>
                                                <span className="text-xs text-muted-foreground uppercase font-bold tracking-tighter">{session.user.role}</span>
                                            </div>
                                        </div>
                                    )}
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className={cn(
                                                "text-lg font-medium p-2 rounded-lg",
                                                pathname === link.href ? "text-[#D97757] bg-[#D97757]/5" : "text-muted-foreground"
                                            )}
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                    <div className="border-t pt-4 mt-4 space-y-4">
                                        {session?.user ? (
                                            <MobileAuthLinks role={session.user.role} close={() => setIsOpen(false)} />
                                        ) : (
                                            <div className="flex flex-col gap-2">
                                                <Button variant="outline" asChild onClick={() => setIsOpen(false)}>
                                                    <Link href="/login">Login</Link>
                                                </Button>
                                                <Button asChild onClick={() => setIsOpen(false)} className="bg-[#D97757]">
                                                    <Link href="/register">Register</Link>
                                                </Button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </nav>
        </motion.header>
    );
}

function NavLink({ href, children, active }: { href: string; children: React.ReactNode; active?: boolean }) {
    return (
        <Link
            href={href}
            className={cn(
                "relative text-sm font-bold tracking-tight transition-colors",
                active ? "text-[#D97757]" : "text-muted-foreground hover:text-foreground"
            )}
        >
            {children}
            {active && (
                <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-5 left-0 h-0.5 w-full bg-[#D97757]"
                />
            )}
        </Link>
    );
}

function UserMenu({ user }: { user: any }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar className="h-9 w-9 cursor-pointer border border-[#D97757]/20 hover:ring-2 hover:ring-[#D97757]/50 transition-all">
                    <AvatarImage src={user.image} />
                    <AvatarFallback className="bg-[#D97757]/10 text-[#D97757] font-bold">
                        {user.name.charAt(0)}
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 p-2 font-jakarta">
                <DropdownMenuLabel className="flex flex-col">
                    <span className="text-sm font-bold">{user.name}</span>
                    <span className="text-[10px] text-muted-foreground uppercase tracking-widest">{user.role}</span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />

                {user.role === "CUSTOMER" && (
                    <>
                        <MenuItem href="/customer-dashboard" icon={<LayoutDashboard size={14} />}>Dashboard</MenuItem>
                        <MenuItem href="/customer-dashboard/cart" icon={<ShoppingBag size={14} />}>Cart</MenuItem>
                        <MenuItem href="/customer-dashboard/profile" icon={<User size={14} />}>Profile</MenuItem>
                    </>
                )}

                {user.role === "PROVIDER" && (
                    <>
                        <MenuItem href="/provider-dashboard" icon={<LayoutDashboard size={14} />}>Kitchen View</MenuItem>
                        <MenuItem href="/provider-dashboard/menu" icon={<ChefHat size={14} />}>My Menu</MenuItem>
                        <MenuItem href="/provider-dashboard/create-meal" icon={<PlusCircle size={14} />}>Add Meal</MenuItem>
                    </>
                )}

                {user.role === "ADMIN" && (
                    <>
                        <MenuItem href="/admin-dashboard" icon={<ShieldCheck size={14} />}>Control Panel</MenuItem>
                        <MenuItem href="/admin-dashboard/all-users" icon={<User size={14} />}>User List</MenuItem>
                    </>
                )}

                <DropdownMenuSeparator />
                <DropdownMenuItem
                    className="text-red-500 font-bold focus:bg-red-50 focus:text-red-600 cursor-pointer"
                    onClick={() => authClient.signOut()}
                >
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

function MenuItem({ href, icon, children }: any) {
    return (
        <DropdownMenuItem asChild className="cursor-pointer py-2">
            <Link href={href} className="flex items-center gap-2">
                {icon}
                <span className="text-sm">{children}</span>
            </Link>
        </DropdownMenuItem>
    );
}

function MobileAuthLinks({ role, close }: any) {
    const links = {
        CUSTOMER: [
            { label: "Dashboard", href: "/customer-dashboard", icon: <LayoutDashboard size={18} /> },
            { label: "Orders", href: "/customer-dashboard/orders", icon: <ShoppingBag size={18} /> }
        ],
        PROVIDER: [
            { label: "Dashboard", href: "/provider-dashboard", icon: <LayoutDashboard size={18} /> },
            { label: "Create Meal", href: "/provider-dashboard/create-meal", icon: <PlusCircle size={18} /> }
        ],
        ADMIN: [
            { label: "Admin Console", href: "/admin-dashboard", icon: <ShieldCheck size={18} /> },
            { label: "Global Users", href: "/admin-dashboard/all-users", icon: <User size={18} /> }
        ]
    };

    return (
        <div className="space-y-2">
            {links[role as keyof typeof links].map((l) => (
                <Link key={l.href} href={l.href} onClick={close} className="flex items-center gap-3 p-2 text-muted-foreground hover:text-foreground">
                    {l.icon} {l.label}
                </Link>
            ))}
            <Button
                variant="destructive"
                className="w-full justify-start mt-4"
                onClick={() => { authClient.signOut(); close(); }}
            >
                <LogOut className="mr-2 h-4 w-4" /> Logout
            </Button>
        </div>
    );
}