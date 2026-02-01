"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  ShoppingBag,
  User,
  Utensils,
  PlusCircle,
  Users,
  Layers,
  ClipboardList,
  LogOut,
  UtensilsCrossed,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Role = "ADMIN" | "CUSTOMER" | "PROVIDER";

const NAV: Record<Role, any[]> = {
  CUSTOMER: [
    {
      label: "Marketplace",
      items: [
        { title: "Dashboard", href: "/customer-dashboard", icon: LayoutDashboard },
        { title: "Cart", href: "/customer-dashboard/cart", icon: ShoppingBag },
        { title: "My Orders", href: "/customer-dashboard/orders", icon: ClipboardList },
        { title: "Profile", href: "/customer-dashboard/profile", icon: User },
      ],
    },
  ],
  PROVIDER: [
    {
      label: "Kitchen Management",
      items: [
        { title: "Dashboard", href: "/provider-dashboard", icon: LayoutDashboard },
        { title: "Menu Items", href: "/provider-dashboard/menu", icon: Utensils },
        { title: "Active Orders", href: "/provider-dashboard/orders", icon: ShoppingBag },
        { title: "Add A Meal", href: "/provider-dashboard/create-meal", icon: PlusCircle },
      ],
    },
  ],
  ADMIN: [
    {
      label: "Administration",
      items: [
        { title: "Overview", href: "/admin-dashboard", icon: LayoutDashboard },
        { title: "User Registry", href: "/admin-dashboard/all-users", icon: Users },
        { title: "Taxonomy", href: "/admin-dashboard/all-categories", icon: Layers },
        { title: "Global Orders", href: "/admin-dashboard/all-orders", icon: ClipboardList },
      ],
    },
  ],
};

export function AppSidebar({ role }: { role: Role }) {
  const pathname = usePathname();
  const { state } = useSidebar();

  return (
    <Sidebar collapsible="icon" className="border-r border-[#6B7280]/10 font-jakarta">
      {/* Sidebar Header with Logo */}
      <SidebarHeader className="py-6 px-4">
        <Link href="/" className="flex items-center gap-3 group overflow-hidden">
          <div className="bg-[#D97757] p-2 rounded-xl shrink-0 shadow-lg shadow-[#D97757]/20 group-hover:rotate-6 transition-transform">
            <UtensilsCrossed size={18} className="text-white" />
          </div>
          {state !== "collapsed" && (
            <span className="font-serif text-2xl font-bold text-[#1F2933] dark:text-[#F5F4F2] tracking-tight">
              MealMate
            </span>
          )}
        </Link>
      </SidebarHeader>

      <SidebarContent className="px-2">
        {NAV[role].map((group) => (
          <SidebarGroup key={group.label} className="py-4">
            {state !== "collapsed" && (
              <SidebarGroupLabel className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#6B7280] px-4 mb-2">
                {group.label}
              </SidebarGroupLabel>
            )}
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item: any) => {
                  const isActive = pathname === item.href;
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        tooltip={item.title}
                        className={cn(
                          "flex items-center gap-3 px-4 py-6 rounded-xl transition-all duration-200",
                          isActive
                            ? "bg-[#D97757]/10 text-[#D97757] font-bold"
                            : "text-[#6B7280] hover:bg-[#FAF9F7] dark:hover:bg-[#1C1A18] hover:text-[#1F2933]"
                        )}
                      >
                        <Link href={item.href}>
                          <item.icon size={20} className={cn(isActive ? "text-[#D97757]" : "text-[#6B7280]")} />
                          <span className="text-sm tracking-tight">{item.title}</span>
                          {isActive && (
                            <motion.div
                              layoutId="active-nav"
                              className="absolute left-0 w-1 h-6 bg-[#D97757] rounded-r-full"
                            />
                          )}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      {/* Sidebar Footer */}
      <SidebarFooter className="p-4 border-t border-[#6B7280]/5">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="w-full justify-start gap-3 text-[#6B7280] hover:text-red-500 transition-colors"
              onClick={() => {/* Add Signout Logic */ }}
            >
              <LogOut size={20} />
              {state !== "collapsed" && <span className="text-sm font-medium">Log Out</span>}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}