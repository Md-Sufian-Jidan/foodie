"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

// ✅ Validation Schema
const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    subject: z.string().min(3, "Subject is required"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        try {
            setLoading(true);
            setSuccess(false);

            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (result.success) {
                setSuccess(true);
                reset();
            } else {
                alert(result.message);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <section className="relative py-20 overflow-hidden">

            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FAF9F7] via-white to-[#D97757]/10 dark:from-[#0B0F17] dark:via-[#0F172A] dark:to-[#D97757]/10" />

            {/* Blur */}
            <div className="absolute top-10 left-10 w-72 h-72 bg-[#D97757]/20 rounded-full blur-3xl opacity-30" />
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl opacity-30" />

            <div className="relative max-w-3xl mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#1F2933] dark:text-white">
                        Send Us a Message
                    </h2>
                    <p className="mt-3 text-[#6B7280] dark:text-gray-300">
                        We’d love to hear from you. Fill out the form below.
                    </p>
                </div>

                {/* Form Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Card className="p-8 rounded-3xl border-0 bg-white/30 dark:bg-white/10 backdrop-blur-xl shadow-2xl">

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                            {/* Name */}
                            <div>
                                <Input
                                    placeholder="Your Name"
                                    {...register("name")}
                                />
                                {errors.name && (
                                    <p className="text-sm text-red-500 mt-1">
                                        {errors.name.message}
                                    </p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <Input
                                    type="email"
                                    placeholder="Your Email"
                                    {...register("email")}
                                />
                                {errors.email && (
                                    <p className="text-sm text-red-500 mt-1">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>

                            {/* Subject */}
                            <div>
                                <Input
                                    placeholder="Subject"
                                    {...register("subject")}
                                />
                                {errors.subject && (
                                    <p className="text-sm text-red-500 mt-1">
                                        {errors.subject.message}
                                    </p>
                                )}
                            </div>

                            {/* Message */}
                            <div>
                                <Textarea
                                    placeholder="Your Message..."
                                    rows={5}
                                    {...register("message")}
                                />
                                {errors.message && (
                                    <p className="text-sm text-red-500 mt-1">
                                        {errors.message.message}
                                    </p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#D97757] hover:bg-[#c96a4f] text-white py-6 rounded-full text-base transition-all hover:scale-105"
                            >
                                {loading ? "Sending..." : "Send Message"}
                            </Button>

                            {/* Success Message */}
                            {success && (
                                <p className="text-green-600 text-sm text-center mt-2">
                                    ✅ Message sent successfully!
                                </p>
                            )}

                        </form>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}