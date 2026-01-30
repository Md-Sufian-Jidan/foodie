import { cookies } from "next/headers";

const AUTH_URL = process.env.AUTH_URL!;

export async function getSession() {
    const cookieStore = cookies();

    const res = await fetch(`${AUTH_URL}/session`, {
        headers: {
            cookie: cookieStore.toString(),
        },
        cache: "no-store",
    });

    if (!res.ok) return null;

    return res.json();
}
