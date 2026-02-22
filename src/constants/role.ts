export type Roles = (typeof Roles)[keyof typeof Roles];
export const Roles = {
    ADMIN: "ADMIN",
    CUSTOMER: "CUSTOMER",
    PROVIDER: "PROVIDER"
}

export const UserStatus = {
    ACTIVE: "ACTIVE",
    INACTIVE: "INACTIVE",
    BLOCKED: "BLOCKED"
}
export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];

export const OrderStatus = {
    PENDING: "PENDING",
    ACCEPTED: "ACCEPTED",
    COOKING: "COOKING",
    ON_THE_WAY: "ON_THE_WAY",
    DELIVERED: "DELIVERED",
    CANCELLED: "CANCELLED"
}
export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus];