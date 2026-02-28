"use client";

import { ArrowUp, Loader2, Menu, UtensilsCrossed } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { authClient } from "@/lib/auth-client";
import { CartButton } from "./CartButton";
import { ModeToggle } from "./ModeToggle";
import { ProfileDropdown } from "./ProfileDropdown";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Meals", href: "/meals" },
    { name: "Providers", href: "/providers" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSheetOpen, setIsSheetOpen] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const { data: session, isPending } = authClient.useSession();
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
            setShowScrollTop(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${isScrolled
                    ? "bg-[#FAF9F7]/80 backdrop-blur-md shadow-sm border-b border-[#D97757]/10"
                    : "bg-[#FAF9F7] border-b border-transparent"
                    }`}
            >
                <div className="container mx-auto flex h-20 items-center justify-between px-4">
                    {/* Left - Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 rounded-xl bg-[#D97757] flex items-center justify-center transition-transform group-hover:rotate-12">
                            <div className="bg-[#D97757] p-2 rounded-lg group-hover:rotate-12 transition-transform shadow-lg shadow-[#D97757]/20">
                                <UtensilsCrossed size={18} className="text-white" />
                            </div>
                        </div>
                        <span className="text-2xl font-bold text-[#1F2933] font-serif tracking-tight">
                            MealMate
                        </span>
                    </Link>

                    {/* Middle - Nav Items (Desktop) */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`transition-all duration-300 text-sm font-semibold font-sans relative py-2 ${isActive
                                        ? "text-[#D97757]"
                                        : "text-[#6B7280] hover:text-[#D97757]"
                                        }`}
                                >
                                    {item.name}
                                    {isActive && (
                                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D97757] rounded-full" />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Right - Actions (Desktop) */}
                    <div className="hidden md:flex items-center gap-3">
                        <div className="flex items-center gap-1 bg-white py-1 px-3 rounded-full border border-[#D97757]/10">
                            <CartButton />
                            <ModeToggle />
                        </div>

                        <div className="h-6 w-[1px] bg-[#D97757]/20 mx-1" />

                        {isPending ? (
                            <Loader2 className="h-5 w-5 animate-spin text-[#D97757]" />
                        ) : session?.user ? (
                            <ProfileDropdown user={session?.user} />
                        ) : (
                            <div className="flex items-center gap-2">
                                <Button variant="ghost" className="text-[#6B7280] font-sans hover:text-[#D97757] hover:bg-[#D97757]/5" asChild>
                                    <Link href="/login">Login</Link>
                                </Button>
                                <Button className="bg-[#D97757] hover:bg-[#D97757]/90 text-white font-sans rounded-full px-6 shadow-sm transition-all hover:scale-105" asChild>
                                    <Link href="/register">Join Now</Link>
                                </Button>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Trigger */}
                    <div className="flex items-center gap-2 md:hidden">
                        <CartButton />
                        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="text-[#1F2933]">
                                    <Menu className="h-8 w-8" />
                                </Button>
                            </SheetTrigger>

                            <SheetContent side="right" className="w-72 bg-[#FAF9F7] border-l border-[#D97757]/10">
                                <SheetHeader className="text-left p-5 border-b border-[#D97757]/10">
                                    <SheetTitle className="font-serif text-2xl text-[#1F2933]">MealMate</SheetTitle>
                                    <SheetDescription className="font-sans text-[#6B7280]">Fresh meals delivered to you.</SheetDescription>
                                </SheetHeader>

                                <div className="flex flex-col gap-8 p-5">
                                    <nav className="flex flex-col gap-4">
                                        {navItems.map((item) => {
                                            const isActive = pathname === item.href;
                                            return (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    onClick={() => setIsSheetOpen(false)}
                                                    className={`text-lg font-semibold font-sans px-4 py-2 rounded-lg transition-all ${isActive
                                                        ? "bg-[#D97757]/10 text-[#D97757]"
                                                        : "text-[#6B7280] hover:bg-[#D97757]/5"
                                                        }`}
                                                >
                                                    {item.name}
                                                </Link>
                                            );
                                        })}
                                    </nav>

                                    <div className="pt-5 border-t border-[#D97757]/10">
                                        <div className="flex items-center justify-between mb-6">
                                            <span className="text-sm font-medium text-[#6B7280]">Appearance</span>
                                            <ModeToggle />
                                        </div>

                                        {session?.user ? (
                                            <div className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-[#D97757]/10 shadow-sm">
                                                <ProfileDropdown user={session?.user} />
                                                <div className="overflow-hidden">
                                                    <p className="text-sm font-bold text-[#1F2933] truncate">{session.user.name}</p>
                                                    <p className="text-xs text-[#6B7280] truncate">{session.user.email}</p>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="flex flex-col gap-3">
                                                <Button variant="outline" className="border-[#D97757] text-[#D97757] hover:bg-[#D97757]/5 rounded-full" asChild>
                                                    <Link href="/login" onClick={() => setIsSheetOpen(false)}>Login</Link>
                                                </Button>
                                                <Button className="bg-[#D97757] hover:bg-[#D97757]/90 text-white rounded-full shadow-lg" asChild>
                                                    <Link href="/register" onClick={() => setIsSheetOpen(false)}>Register</Link>
                                                </Button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </header>

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 p-3 bg-[#D97757] hover:bg-[#D97757]/90 text-white rounded-full shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer border-2 border-white"
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="h-6 w-6" />
                </button>
            )}
        </>
    );
}