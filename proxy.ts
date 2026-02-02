import { Roles } from "@/constants/role";
import { userService } from "@/services/user.service";
import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const { data } = await userService.getSession();

    // 🔐 Not authenticated
    if (!data) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    const role = data.user.role;

    // 🛡️ Admin routes
    if (pathname.startsWith("/admin-dashboard") && role !== Roles.admin) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    // 🛡️ Provider routes
    if (pathname.startsWith("/provider-dashboard") && role !== Roles.provider) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    // 🛡️ Customer routes
    if (pathname.startsWith("/customer-dashboard") && role !== Roles.customer) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/dashboard/customer/:path*",
        "/dashboard/admin/:path*",
        "/dashboard/provider/:path*",
    ],
};