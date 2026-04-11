import Link from "next/link";
import { Card } from "@/components/ui/card";

export default function SupportFaq() {
    return (
        <section className="max-w-4xl mx-auto px-4 py-12">

            <Card className="p-6 rounded-2xl bg-white/30 dark:bg-white/10 backdrop-blur-xl border-0 text-center">

                <h3 className="text-xl font-bold text-[#1F2933] dark:text-white">
                    Still need help?
                </h3>

                <p className="text-[#6B7280] mt-2">
                    Visit our FAQ page for instant answers.
                </p>

                <Link
                    href="/faq"
                    className="inline-block mt-4 px-6 py-2 rounded-full bg-[#D97757] text-white hover:scale-105 transition"
                >
                    Go to FAQ
                </Link>

            </Card>

        </section>
    );
}