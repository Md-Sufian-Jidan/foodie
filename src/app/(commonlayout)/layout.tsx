import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/modules/home/Footer";
import React from "react";

export default function CommonLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            <main className="pt-16">{children}</main>
            <Footer />
        </>
    );
}