import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
    // baseURL: "http://localhost:5000"
    baseURL: typeof window !== "undefined" ? window.location.origin : "",
    fetchOptions: { credentials: "include" }
    // process.env.AUTH_URL!,
})

export const {
    useSession,
    signIn,
    signOut
} = authClient;