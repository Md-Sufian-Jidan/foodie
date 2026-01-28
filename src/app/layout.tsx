import type { Metadata } from "next"
import { Merriweather } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/providers/theme-provider"
import Transition from "@/components/layout/Transition"
import { Toaster } from "@/components/ui/sonner"

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: {
    default: "MealMate — Discover & Order Delicious Meals",
    template: "%s | MealMate",
  },
  description:
    "MealMate helps you discover delicious meals, order from local providers, and enjoy fast delivery. Simple, reliable, and made for food lovers.",
  keywords: [
    "MealMate",
    "food delivery",
    "meal ordering app",
    "restaurant marketplace",
    "online food order",
  ],
  authors: [{ name: "MealMate Team" }],
  creator: "MealMate",
  openGraph: {
    title: "MealMate — Discover & Order Delicious Meals",
    description:
      "Browse meals, order from trusted providers, and track your food delivery with ease.",
    url: "https://mealmate.app",
    siteName: "MealMate",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MealMate Food Ordering Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MealMate — Discover & Order Delicious Meals",
    description:
      "Order meals from local providers and enjoy fast, reliable delivery.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${merriweather.variable} antialiased`}
        style={{
          fontFamily:
            'var(--font-body), Merriweather, Georgia, "Times New Roman", serif',
        }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Transition>{children}</Transition>
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  )
}
