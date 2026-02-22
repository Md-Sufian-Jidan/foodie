import { Roles, UserStatus } from "@/constants/role";

export interface User {
    id: string;
    name: string;
    email: string;
    emailVerified: boolean;
    image?: string | null;
    role: Roles;
    status: UserStatus;
    phone?: string | null;
    createdAt: Date;
    updatedAt: Date;
}

export interface UpdateProfileData {
    name?: string;
    phone?: string;
    image?: string;
}