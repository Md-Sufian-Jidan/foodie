import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
    baseURL: "http://localhost:5000"
    // process.env.AUTH_URL!,
})

export const {
    useSession,
    signIn,
    signOut
} = authClient;