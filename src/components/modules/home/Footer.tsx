"use client"

import Link from "next/link"
import {
    Facebook,
    Github,
    Linkedin,
    UtensilsCrossed,
    Mail,
    MapPin,
    Phone,
    ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
    return (
        <footer className="bg-[#FAF9F7] text-[#1F2933] pt-20 pb-10 font-jakarta border-t border-[#1F2933]/5">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Top Section: Newsletter & Branding */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 pb-16 border-b border-[#1F2933]/10 mb-16">
                    <div className="max-w-md">
                        <Link href="/" className="flex items-center gap-2 group shrink-0 mb-6">
                            <div className="bg-[#D97757] p-2 rounded-lg group-hover:rotate-12 transition-transform shadow-lg shadow-[#D97757]/20">
                                <UtensilsCrossed size={18} className="text-white" />
                            </div>
                            <span className="font-serif text-2xl font-bold tracking-tight text-[#1F2933] md:text-3xl">
                                MealMate
                            </span>
                        </Link>
                        <p className="text-[#6B7280] text-sm leading-relaxed">
                            Elevating local flavors. Join our newsletter for exclusive recipes,
                            provider stories, and special neighborhood discounts.
                        </p>
                    </div>

                    <div className="flex w-full max-w-sm items-center space-x-2">
                        <Input
                            type="email"
                            placeholder="Your email address"
                            className="bg-white border-[#1F2933]/10 text-[#1F2933] placeholder:text-[#9CA3AF] focus:border-[#D97757] focus:ring-[#D97757]/10 transition-all rounded-full px-6"
                        />
                        <Button className="bg-[#D97757] hover:bg-[#D97757]/90 shrink-0 rounded-full px-6">
                            Join <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Mission */}
                    <div className="space-y-6">
                        <h4 className="font-serif text-xl font-bold text-[#1F2933]">Our Mission</h4>
                        <p className="text-[#6B7280] text-sm leading-relaxed">
                            Connecting community kitchens with food lovers. We believe the best meals
                            aren't just made; they're shared.
                        </p>
                        <div className="flex gap-4">
                            <SocialLink icon={<Github size={18} />} href="https://github.com/Md-Sufian-Jidan" />
                            <SocialLink icon={<Linkedin size={18} />} href="https://www.linkedin.com/in/md-abu-sufian-jidan/" />
                            <SocialLink icon={<Facebook size={18} />} href="https://www.facebook.com/profile.php?id=61580036619103" />
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="space-y-6">
                        <h4 className="font-serif text-xl font-bold text-[#1F2933]">Discover</h4>
                        <ul className="space-y-4 text-sm text-[#6B7280]">
                            <li><FooterLink href="/meals">Browse All Meals</FooterLink></li>
                            <li><FooterLink href="/categories">Cuisines</FooterLink></li>
                            <li><FooterLink href="/providers">Our Kitchens</FooterLink></li>
                            <li><FooterLink href="/offers">Special Offers</FooterLink></li>
                        </ul>
                    </div>

                    {/* Join the Platform */}
                    <div className="space-y-6">
                        <h4 className="font-serif text-xl font-bold text-[#1F2933]">Partnerships</h4>
                        <ul className="space-y-4 text-sm text-[#6B7280]">
                            <li><FooterLink href="/register?role=PROVIDER">List Your Kitchen</FooterLink></li>
                            <li><FooterLink href="/logistics">Delivery Partners</FooterLink></li>
                            <li><FooterLink href="/guidelines">Kitchen Standards</FooterLink></li>
                            <li><FooterLink href="/help">Provider FAQ</FooterLink></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h4 className="font-serif text-xl font-bold text-[#1F2933]">Get in Touch</h4>
                        <ul className="space-y-4 text-sm text-[#6B7280]">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-[#D97757] shrink-0" />
                                <span>Chasara Road, <br />Narayanganj, Dhaka</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-[#D97757] shrink-0" />
                                {/* tel: protocol opens the dialer */}
                                <a
                                    href="tel:+8801906844598"
                                    className="hover:text-[#D97757] transition-colors font-medium"
                                >
                                    +880 1906 844 598
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-[#D97757] shrink-0" />
                                {/* mailto: protocol opens the default email client */}
                                <a
                                    href="mailto:jidanjiyaj03@gmail.com"
                                    className="truncate decoration-[#D97757]/30 hover:text-[#D97757] hover:decoration-[#D97757] transition-colors font-medium"
                                >
                                    jidanjiyaj03@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-[#1F2933]/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-[#6B7280] text-center md:text-left">
                        &copy; {new Date().getFullYear()} MealMate. Handcrafted with passion in Narayanganj.
                    </p>
                    <div className="flex flex-wrap justify-center gap-8 text-xs text-[#6B7280]">
                        <Link href="/privacy" className="hover:text-[#D97757] transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-[#D97757] transition-colors">Terms of Service</Link>
                        <Link href="/cookies" className="hover:text-[#D97757] transition-colors">Cookie Settings</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="hover:text-[#D97757] transition-colors flex items-center group font-medium"
        >
            <span className="w-0 group-hover:w-2 h-[1px] bg-[#D97757] mr-0 group-hover:mr-2 transition-all"></span>
            {children}
        </Link>
    )
}

function SocialLink({ icon, href }: { icon: React.ReactNode; href: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white border border-[#1F2933]/10 flex items-center justify-center text-[#1F2933] shadow-sm hover:shadow-md hover:bg-[#D97757] hover:text-white hover:border-[#D97757] transition-all duration-300"
        >
            {icon}
        </a>
    )
}