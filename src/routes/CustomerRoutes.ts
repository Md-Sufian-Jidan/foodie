import { Route } from "@/types/route.type";

export const CustomerRoutes: Route[] = [
    {
        title: "Customer Dashboard",
        items: [
            {
                title: "Dashboard",
                url: "/dashboard",
            },
            {
                title: "My Orders",
                url: "/dashboard/orders",
            },
            {
                title: "My Profile",
                url: "/dashboard/profile",
            },
            {
                title: "Track Order",
                url: "/dashboard/track",
            },
        ],
    },
];