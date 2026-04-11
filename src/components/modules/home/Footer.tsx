"use client";

import Link from "next/link";
import {
    Facebook,
    Github,
    Linkedin,
    UtensilsCrossed,
    Mail,
    MapPin,
    Phone,
    ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
    return (
        <footer className="relative bg-gradient-to-b from-[#FAF9F7] to-white dark:from-gray-950 dark:to-gray-900 text-[#1F2933] dark:text-white pt-20 pb-10 border-t border-white/10">

            {/* Glass Background Effect */}
            <div className="absolute inset-0 backdrop-blur-3xl opacity-40 pointer-events-none" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

                {/* TOP SECTION */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 pb-16 mb-16">

                    {/* Brand */}
                    <div className="max-w-md">
                        <Link href="/" className="flex items-center gap-2 group mb-6">
                            <div className="bg-[#D97757] p-2 rounded-lg group-hover:rotate-12 transition-transform shadow-lg">
                                <UtensilsCrossed size={18} className="text-white" />
                            </div>
                            <span className="font-serif text-2xl font-bold">
                                MealMate
                            </span>
                        </Link>

                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                            Elevating local flavors with a modern multi-vendor food platform.
                            Discover, order, and enjoy meals from trusted kitchens near you.
                        </p>
                    </div>

                    {/* Newsletter (Glass Card) */}
                    <div className="w-full max-w-md">
                        <div className="backdrop-blur-xl bg-white/60 dark:bg-white/10 border border-white/20 shadow-lg rounded-2xl p-4 flex items-center gap-2">

                            <Input
                                type="email"
                                placeholder="Your email address"
                                className="bg-transparent border-none focus-visible:ring-0 text-sm"
                            />

                            <Button className="bg-[#D97757] hover:bg-[#D97757]/90 rounded-full px-5">
                                Join <ArrowRight className="ml-1 h-4 w-4" />
                            </Button>
                        </div>

                        <p className="text-xs text-gray-400 mt-3 text-center">
                            Get weekly deals & updates — no spam.
                        </p>
                    </div>
                </div>

                {/* MAIN GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">

                    {/* Mission */}
                    <div className="space-y-5">
                        <h4 className="font-semibold text-lg">Our Mission</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                            Connecting food lovers with local kitchens through fast, reliable, and delicious delivery.
                        </p>

                        <div className="flex gap-3">
                            <SocialLink icon={<Github size={18} />} href="https://github.com" />
                            <SocialLink icon={<Linkedin size={18} />} href="https://linkedin.com" />
                            <SocialLink icon={<Facebook size={18} />} href="https://facebook.com" />
                        </div>
                    </div>

                    {/* Discover */}
                    <div className="space-y-5">
                        <h4 className="font-semibold text-lg">Discover</h4>
                        <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
                            <li><FooterLink href="/meals">All Meals</FooterLink></li>
                            <li><FooterLink href="/categories">Categories</FooterLink></li>
                            <li><FooterLink href="/providers">Vendors</FooterLink></li>
                            <li><FooterLink href="/offers">Offers</FooterLink></li>
                        </ul>
                    </div>

                    {/* Partnerships */}
                    <div className="space-y-5">
                        <h4 className="font-semibold text-lg">Partnerships</h4>
                        <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
                            <li><FooterLink href="/register">Become Vendor</FooterLink></li>
                            <li><FooterLink href="/delivery">Delivery Partners</FooterLink></li>
                            <li><FooterLink href="/guidelines">Guidelines</FooterLink></li>
                            <li><FooterLink href="/support">Support</FooterLink></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-5">
                        <h4 className="font-semibold text-lg">Contact</h4>

                        <div className="space-y-4 text-sm text-gray-500 dark:text-gray-400">

                            <div className="flex gap-3">
                                <MapPin className="text-[#D97757]" />
                                <span>Narayanganj, Dhaka, Bangladesh</span>
                            </div>

                            <div className="flex gap-3">
                                <Phone className="text-[#D97757]" />
                                <a href="tel:+8801906844598" className="hover:text-[#D97757]">
                                    +880 1906 844 598
                                </a>
                            </div>

                            <div className="flex gap-3">
                                <Mail className="text-[#D97757]" />
                                <a href="mailto:contact@mealmate.com" className="hover:text-[#D97757]">
                                    contact@mealmate.com
                                </a>
                            </div>

                        </div>
                    </div>
                </div>

                {/* BOTTOM BAR */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-5 pt-8 border-t border-white/10">

                    <p className="text-xs text-gray-400">
                        © {new Date().getFullYear()} MealMate — All rights reserved
                    </p>

                    <div className="flex gap-6 text-xs text-gray-400">
                        <Link className="hover:text-[#D97757]" href="/privacy">Privacy</Link>
                        <Link className="hover:text-[#D97757]" href="/terms">Terms</Link>
                        <Link className="hover:text-[#D97757]" href="/cookies">Cookies</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}

function FooterLink({ href, children }: any) {
    return (
        <Link href={href} className="group flex items-center gap-2 hover:text-[#D97757] transition">
            <span className="w-0 group-hover:w-2 h-[2px] bg-[#D97757] transition-all" />
            {children}
        </Link>
    );
}

function SocialLink({ icon, href }: any) {
    return (
        <a
            href={href}
            target="_blank"
            className="w-9 h-9 rounded-full backdrop-blur-xl bg-white/60 dark:bg-white/10 border border-white/20 flex items-center justify-center hover:bg-[#D97757] hover:text-white transition"
        >
            {icon}
        </a>
    );
}