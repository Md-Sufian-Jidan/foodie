"use client";

import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

type Role = "ADMIN" | "CUSTOMER" | "PROVIDER";

const NAV: Record<Role, any[]> = {
  CUSTOMER: [
    {
      label: "Customer",
      items: [
        { title: "Dashboard", href: "/customer-dashboard" },
        { title: "Cart", href: "/customer-dashboard/cart" },
        { title: "Orders", href: "/customer-dashboard/orders" },
        { title: "Profile", href: "/customer-dashboard/profile" },
      ],
    },
  ],
  PROVIDER: [
    {
      label: "Provider",
      items: [
        { title: "Dashboard", href: "/provider-dashboard" },
        { title: "Menu", href: "/provider-dashboard/menu" },
        { title: "Orders", href: "/provider-dashboard/orders" },
      ],
    },
  ],
  ADMIN: [
    {
      label: "Admin",
      items: [
        { title: "Dashboard", href: "/admin-dashboard" },
        { title: "Users", href: "/admin-dashboard/users" },
        { title: "Categories", href: "/admin-dashboard/categories" },
      ],
    },
  ],
};

export function AppSidebar({ role }: { role: Role }) {
  return (
    <Sidebar>
      <SidebarContent>
        {NAV[role].map((group) => (
          <SidebarGroup key={group.label}>
            <Link href="/" className="font-serif text-xl font-bold pl-2 pt-5">
              MealMate
            </Link>
            <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.href}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
