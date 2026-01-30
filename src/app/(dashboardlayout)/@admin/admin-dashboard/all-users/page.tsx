"use client";

import { useEffect, useState } from "react";
import { adminService } from "@/services/admin.service";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default function UsersPage() {
    const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {
        async function fetchUsers() {
            const { data } = await adminService.getUsers();
            setUsers(data);
        }
        fetchUsers();
    }, []);

    const handleToggleStatus = async (id: string, isActive: boolean) => {
        await adminService.updateUserStatus(id, !isActive);
        setUsers(users.map(u => u.id === id ? { ...u, isActive: !isActive } : u));
    };

    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-bold">Manage Users</h1>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.role}</TableCell>
                            <TableCell>{user.isActive ? "Active" : "Suspended"}</TableCell>
                            <TableCell>
                                <Button size="sm" onClick={() => handleToggleStatus(user.id, user.isActive)}>
                                    {user.isActive ? "Suspend" : "Activate"}
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
