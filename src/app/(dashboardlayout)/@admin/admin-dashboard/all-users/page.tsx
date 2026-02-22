"use client";

import { Suspense, useEffect, useState } from "react";
import { adminService } from "@/services/admin.service";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    ShieldAlert,
    ShieldCheck,
    MoreHorizontal,
    Mail,
    UserCog
} from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

export default function UsersPage() {
    const [users, setUsers] = useState<any[]>([]);

    const getAllUsers = async () => {
        const { data, error } = await adminService.getAllUsers();
        if (error) {
            // console.error("Error fetching users:", error);
            return;
        }
        setUsers(data.data || []);
    };

    useEffect(() => {
        getAllUsers();
    }, []);


    const handleToggleStatus = async (id: string, isActive: boolean) => {
        const { data, error } = await adminService.updateUserStatus(id, !isActive);
        if (error) {
            // console.error("Error updating user status:", error);
            return;
        }
        toast.success(`User has been ${!isActive ? "restored" : "suspended"} successfully.`);
        setUsers((prev) =>
            prev.map((user) =>
                user.id === id ? { ...user, isActive: !isActive } : user
            )
        );
    };

    return (
        <Suspense>
            <div className="space-y-8 p-4 lg:p-8 bg-[#FAF9F7] dark:bg-[#121110] min-h-screen font-jakarta rounded-4xl">
                {/* Page Header */}
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-[#6B7280]/10 pb-8">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 text-[#D97757] font-bold text-xs uppercase tracking-[0.2em]">
                            <UserCog size={14} /> Permissions & Access
                        </div>
                        <h1 className="font-serif text-4xl font-bold text-[#1F2933] dark:text-[#F5F4F2]">
                            User Directory
                        </h1>
                    </div>
                    <div className="flex gap-2">
                        <Badge variant="outline" className="rounded-full border-[#6B7280]/20 px-4 py-1">
                            {users.length} Total Members
                        </Badge>
                    </div>
                </header>

                {/* Table Card */}
                <Card className="border-none shadow-sm bg-white dark:bg-[#1C1A18] overflow-hidden">
                    <CardContent className="p-0">
                        <Table>
                            <TableHeader className="bg-[#FAF9F7]/50 dark:bg-[#121110]/50">
                                <TableRow className="border-b border-[#6B7280]/10 hover:bg-transparent">
                                    <TableHead className="py-5 pl-6 text-[10px] uppercase font-bold tracking-widest text-[#6B7280]">Profile</TableHead>
                                    <TableHead className="py-5 text-[10px] uppercase font-bold tracking-widest text-[#6B7280]">Contact Info</TableHead>
                                    <TableHead className="py-5 text-[10px] uppercase font-bold tracking-widest text-[#6B7280]">Account Role</TableHead>
                                    <TableHead className="py-5 text-[10px] uppercase font-bold tracking-widest text-[#6B7280]">Status</TableHead>
                                    <TableHead className="py-5 pr-6 text-right text-[10px] uppercase font-bold tracking-widest text-[#6B7280]">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {users.map((user) => (
                                    <TableRow key={user.id} className="border-b border-[#6B7280]/5 hover:bg-[#FAF9F7]/30 dark:hover:bg-[#121110]/30 transition-colors">
                                        {/* Profile Column */}
                                        <TableCell className="py-4 pl-6">
                                            <div className="flex items-center gap-3">
                                                <Avatar className="h-10 w-10 border-2 border-white dark:border-[#1C1A18] shadow-sm">
                                                    <AvatarImage src={user.image} />
                                                    <AvatarFallback className="bg-[#D97757]/10 text-[#D97757] font-bold">
                                                        {user.name.substring(0, 2).toUpperCase()}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <span className="font-bold text-[#1F2933] dark:text-[#F5F4F2]">{user.name}</span>
                                            </div>
                                        </TableCell>

                                        {/* Email Column */}
                                        <TableCell className="py-4">
                                            <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                                                <Mail size={14} className="shrink-0" />
                                                {user.email}
                                            </div>
                                        </TableCell>

                                        {/* Role Column */}
                                        <TableCell className="py-4">
                                            <Badge
                                                variant="secondary"
                                                className={`${user.role === 'PROVIDER'
                                                    ? 'bg-[#6B8E7D]/10 text-[#6B8E7D]'
                                                    : 'bg-[#1F2933]/5 text-[#1F2933] dark:text-[#6B7280]'
                                                    } border-none font-bold text-[10px] tracking-wide`}
                                            >
                                                {user.role}
                                            </Badge>
                                        </TableCell>

                                        {/* Status Column */}
                                        <TableCell className="py-4">
                                            <div className="flex items-center gap-2">
                                                <div className={`h-2 w-2 rounded-full ${user.status === "ACTIVE" ? 'bg-emerald-500' : 'bg-red-500'}`} />
                                                <span className={`text-xs font-bold ${user.status === "ACTIVE" ? 'text-emerald-600' : 'text-red-600'}`}>
                                                    {user.status === "ACTIVE" ? "ACTIVE" : "SUSPENDED"}
                                                </span>
                                            </div>
                                        </TableCell>

                                        {/* Action Column */}
                                        <TableCell className="py-4 pr-6 text-right">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                                        <MoreHorizontal size={18} className="text-[#6B7280]" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end" className="w-48 font-jakarta">
                                                    <DropdownMenuLabel>User Actions</DropdownMenuLabel>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem className="cursor-pointer">View History</DropdownMenuItem>
                                                    <DropdownMenuItem className="cursor-pointer">Edit Profile</DropdownMenuItem>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem
                                                        className={`cursor-pointer font-bold ${user.isActive ? 'text-red-500' : 'text-emerald-600'}`}
                                                        onClick={() => handleToggleStatus(user.id, user.isActive)}
                                                    >
                                                        {user.isActive ? (
                                                            <span className="flex items-center gap-2"><ShieldAlert size={16} /> Suspend Access</span>
                                                        ) : (
                                                            <span className="flex items-center gap-2"><ShieldCheck size={16} /> Restore Access</span>
                                                        )}
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </Suspense>

    );
}