export const ROLES = {
    ADMIN: "ADMIN",
    CUSTOMER: "CUSTOMER",
    PROVIDER: "PROVIDER",
} as const;

export type Roles = (typeof ROLES)[keyof typeof ROLES];