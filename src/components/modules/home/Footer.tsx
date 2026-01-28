"use client"

import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-[#1F2933] py-12">
            <div className="mx-auto max-w-7xl px-4 sm:flex sm:justify-between sm:items-start">
                {/* Logo / Brand */}
                <div className="mb-6 sm:mb-0">
                    <Link href="/" className="font-heading text-2xl font-bold text-[#F5F4F2]">
                        MealMate
                    </Link>
                    <p className="mt-2 max-w-xs font-body text-sm text-[#B3B3B0]">
                        Discover, order, and enjoy delicious meals from your favorite local providers.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col space-y-2">
                    <h4 className="font-heading text-sm font-semibold text-[#F5F4F2]">Quick Links</h4>
                    <Link href="/" className="font-body text-sm text-[#E5E7EB] hover:text-[#D97757]">
                        Home
                    </Link>
                    <Link href="/meals" className="font-body text-sm text-[#E5E7EB] hover:text-[#D97757]">
                        Browse Meals
                    </Link>
                    <Link href="/login" className="font-body text-sm text-[#E5E7EB] hover:text-[#D97757]">
                        Login
                    </Link>
                    <Link href="/register" className="font-body text-sm text-[#E5E7EB] hover:text-[#D97757]">
                        Register
                    </Link>
                </div>
            </div>

            {/* Bottom */}
            <div className="mt-8 border-t border-[#374151] pt-6 text-center">
                <p className="font-body text-sm text-[#B3B3B0]">
                    &copy; {new Date().getFullYear()} MealMate. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
