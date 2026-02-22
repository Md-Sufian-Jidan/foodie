"use client";

import { useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
    Plus,
    Pencil,
    Trash2,
    MoreHorizontal,
    Image as ImageIcon,
    LayoutGrid,
    Layers
} from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { adminService } from "@/services/admin.service";

export default function CategoriesPage() {
    const [categories, setCategories] = useState<any[]>([]);

    const getAllCategories = async () => {
        const { data, error } = await adminService.getCategories();
        if (error) {
            // console.log("Error fetching categories:", error);
            return;
        }
        setCategories(data.data || []);
    };

    useEffect(() => {
        getAllCategories();
    }, [])

    return (
        <div className="space-y-8 p-4 lg:p-8 bg-[#FAF9F7] dark:bg-[#121110] min-h-screen rounded-4xl">
            {/* Header Section */}
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[#D97757] font-bold text-xs uppercase tracking-widest">
                        <LayoutGrid size={14} /> Taxonomy Management
                    </div>
                    <h1 className="font-serif text-4xl font-bold text-[#1F2933] dark:text-[#F5F4F2]">
                        Global Categories
                    </h1>
                </div>
                <Link href="/admin-dashboard/add-category">
                    <Button className="bg-[#D97757] hover:bg-[#D97757]/90 text-white rounded-full px-6 shadow-lg shadow-[#D97757]/20 transition-all hover:scale-105">
                        <Plus className="mr-2 w-4 h-4" /> Add New Category
                    </Button>
                </Link>
            </header>

            {/* Visual Table Card */}
            <Card className="border-none shadow-sm bg-white dark:bg-[#1C1A18] overflow-hidden">
                <CardContent className="p-0 font-jakarta">
                    <Table>
                        <TableHeader className="bg-[#FAF9F7]/50 dark:bg-[#121110]/50">
                            <TableRow className="border-b border-[#6B7280]/10 hover:bg-transparent">
                                <TableHead className="w-[80px] text-[10px] uppercase font-bold tracking-widest text-[#6B7280] py-5 pl-6">Preview</TableHead>
                                <TableHead className="text-[10px] uppercase font-bold tracking-widest text-[#6B7280] py-5">Category Identity</TableHead>
                                <TableHead className="text-[10px] uppercase font-bold tracking-widest text-[#6B7280] py-5">Usage Count</TableHead>
                                <TableHead className="text-right text-[10px] uppercase font-bold tracking-widest text-[#6B7280] py-5 pr-6">Management</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {categories.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={4} className="h-[400px] text-center">
                                        <div className="flex flex-col items-center justify-center space-y-4 animate-in fade-in zoom-in duration-300">
                                            <div className="w-20 h-20 bg-[#FAF9F7] dark:bg-[#1C1A18] rounded-3xl flex items-center justify-center border border-[#6B7280]/10 shadow-sm">
                                                <Layers className="w-10 h-10 text-[#6B7280]/20" />
                                            </div>
                                            <div className="space-y-1 bg-red-500">
                                                <p className="text-xl font-serif font-bold text-[#1F2933] dark:text-[#F5F4F2]">
                                                    No categories found
                                                </p>
                                                <p className="text-sm text-[#6B7280] max-w-[250px] mx-auto">
                                                    It looks like you haven't added any food <br></br> categories yet. Start by creating one!
                                                </p>
                                            </div>
                                            <Button
                                                className="bg-[#D97757] hover:bg-[#D97757]/90 rounded-full px-8 shadow-lg shadow-[#D97757]/20 transition-all"
                                                onClick={() => {/* Trigger your Add Category Modal */ }}
                                            >
                                                + Create First Category
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ) : (
                                categories.map((cat) => (
                                    <TableRow
                                        key={cat.id}
                                        className="border-b border-[#6B7280]/5 hover:bg-[#FAF9F7]/30 dark:hover:bg-[#121110]/30 transition-colors group"
                                    >
                                        <TableCell className="py-4 pl-6">
                                            <div className="w-12 h-12 rounded-xl overflow-hidden bg-[#FAF9F7] border border-[#6B7280]/10 flex items-center justify-center">
                                                {cat.image ? (
                                                    <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
                                                ) : (
                                                    <ImageIcon className="text-[#6B7280]/40 w-5 h-5" />
                                                )}
                                            </div>
                                        </TableCell>
                                        <TableCell className="py-4">
                                            <p className="font-bold text-[#1F2933] dark:text-[#F5F4F2]">{cat.name}</p>
                                            <p className="text-xs text-[#6B7280]">
                                                Slug: /{cat.name.toLowerCase().replace(/\s+/g, "-")}
                                            </p>
                                        </TableCell>
                                        <TableCell className="py-4">
                                            <Badge variant="secondary" className="bg-[#6B8E7D]/10 text-[#6B8E7D] border-none font-bold">
                                                {cat.count || 0} Active Items
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="py-4 pr-6 text-right">
                                            <div className="hidden group-hover:flex items-center justify-end gap-2 animate-in fade-in slide-in-from-right-2">
                                                <Button variant="outline" size="icon" className="h-8 w-8 rounded-full border-[#6B7280]/10">
                                                    <Pencil size={14} className="text-[#1F2933] dark:text-[#F5F4F2]" />
                                                </Button>
                                                <Button variant="outline" size="icon" className="h-8 w-8 rounded-full border-[#6B7280]/10 hover:text-red-500 hover:border-red-500">
                                                    <Trash2 size={14} />
                                                </Button>
                                            </div>
                                            <div className="group-hover:hidden">
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <Button variant="ghost" size="icon" className="h-8 w-8">
                                                            <MoreHorizontal size={18} className="text-[#6B7280]" />
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="end" className="w-40 font-jakarta">
                                                        <DropdownMenuItem className="cursor-pointer">Edit Details</DropdownMenuItem>
                                                        <DropdownMenuItem className="cursor-pointer text-red-500">Delete Category</DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}