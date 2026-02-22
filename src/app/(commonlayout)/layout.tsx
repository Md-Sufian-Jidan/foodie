import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/modules/home/Footer";

export default function CommonLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            {children}
        </div>
    );
}