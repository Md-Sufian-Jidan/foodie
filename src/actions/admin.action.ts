"use server";

import { adminService } from "@/services/admin.service";
// import { cookies } from "next/headers";

export const getCategories = async () => {
    // const cookieStore = cookies();
    // const cookieHeader = cookieStore.toString();
    // cookieHeader
    return await adminService.getCategories();
};
