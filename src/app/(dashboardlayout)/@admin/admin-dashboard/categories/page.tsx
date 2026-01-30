"use client";

import { useEffect, useState } from "react";
import { adminService } from "@/services/admin.service";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default function CategoriesPage() {
    const [categories, setCategories] = useState<any[]>([]);

    useEffect(() => {
        async function fetchCategories() {
            const { data } = await adminService.getCategories();
            setCategories(data);
        }
        fetchCategories();
    }, []);

    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-bold">Manage Categories</h1>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {categories.map((cat) => (
                        <TableRow key={cat.id}>
                            <TableCell>{cat.name}</TableCell>
                            <TableCell>
                                <Button size="sm" variant="outline">Edit</Button>
                                <Button size="sm" variant="destructive" className="ml-2">Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
