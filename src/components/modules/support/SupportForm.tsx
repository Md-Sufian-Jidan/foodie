"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function SupportForm() {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        await new Promise((res) => setTimeout(res, 1500));

        alert("Support request submitted!");
        setLoading(false);
    };

    return (
        <section className="max-w-3xl mx-auto px-4 py-16">

            <Card className="p-8 rounded-3xl bg-white/30 dark:bg-white/10 backdrop-blur-xl border-0 shadow-xl">

                <h2 className="text-2xl font-bold mb-6 text-[#1F2933] dark:text-white">
                    Submit a Support Request
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">

                    <Input placeholder="Your Name" required />
                    <Input type="email" placeholder="Email Address" required />
                    <Input placeholder="Subject" required />
                    <Textarea placeholder="Describe your issue..." rows={5} required />

                    <Button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#D97757] hover:bg-[#c96a4f]"
                    >
                        {loading ? "Sending..." : "Submit Request"}
                    </Button>

                </form>
            </Card>

        </section>
    );
}