"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import {
    Bot,
    Loader2,
    MessageSquare,
    Minimize2,
    Send,
    Sparkles,
    User,
    X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Message {
    id: string;
    role: "user" | "ai";
    content: string;
    timestamp: Date;
}

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`;

export function AiChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            role: "ai",
            content:
                "Hello! I'm your Food AI assistant. How can I help you find the perfect meal today?",
            timestamp: new Date(),
        },
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            role: "user",
            content: input,
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsTyping(true);

        try {
            const res = await fetch(`${API_URL}/ai/chat`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: userMessage.content }),
            });

            const payload = await res.json();
            if (!res.ok || !payload?.success) {
                throw new Error(payload?.message || "AI request failed");
            }

            const aiMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: "ai",
                content: payload.data,
                timestamp: new Date(),
            };

            setMessages((prev) => [...prev, aiMessage]);
        } catch (error: any) {
            const fallbackMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: "ai",
                content:
                    error?.message ||
                    "I could not connect to the AI service right now. Please try again in a moment.",
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, fallbackMessage]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <div className="fixed bottom-4 left-4 z-50 flex flex-col items-start sm:bottom-6 sm:left-6">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: -24, y: 16, scale: 0.96 }}
                        animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -24, y: 16, scale: 0.96 }}
                        transition={{ duration: 0.24, ease: "easeOut" }}
                        className="relative mb-3 flex h-[480px] w-[320px] max-w-[calc(100vw-1rem)] flex-col overflow-hidden rounded-[1.75rem] border border-[#D97757]/20 bg-white/70 dark:bg-white/10 backdrop-blur-xl text-[#1F2933] dark:text-white shadow-[0_20px_50px_rgba(217,119,87,0.25)]"
                    >
                        <div className="pointer-events-none absolute inset-0">
                            <div className="absolute -top-24 left-[-20%] h-52 w-52 rounded-full bg-orange-500/20 blur-3xl" />
                            <div className="absolute -bottom-24 right-[-15%] h-52 w-52 rounded-full bg-red-500/12 blur-3xl" />
                        </div>

                        <div className="relative flex items-center justify-between border-b border-[#D97757]/20 bg-white/50 dark:bg-white/5 backdrop-blur-md p-5"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 via-red-500 to-red-600 text-white shadow-lg shadow-red-500/30 ring-1 ring-white/15">
                                    <Sparkles size={20} />
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold tracking-wide text-black dark::text-white">
                                        FoodHub Assistant
                                    </h4>
                                    <p className="mt-1 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.22em] text-black dark:text-white/50">
                                        <span className="h-1.5 w-1.5 rounded-full bg-red-400 shadow-[0_0_0_4px_rgba(248,113,113,0.12)]" />
                                        Systems Active
                                    </p>
                                </div>
                            </div>

                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsOpen(false)}
                                className="h-8 w-8 rounded-xl text-white/60 hover:bg-white/10 hover:text-white"
                            >
                                <Minimize2 size={18} />
                            </Button>
                        </div>

                        <div
                            ref={scrollRef}
                            className="relative flex-1 space-y-3 overflow-y-auto bg-gradient-to-b from-transparent to-[#FAF9F7]/50 dark:to-black/30 p-4"
                        >
                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={cn(
                                        // "flex items-end gap-3",
                                        "max-w-[82%] rounded-[1.15rem] px-3.5 py-2.5 text-sm leading-relaxed shadow-lg bg-gradient-to-br from-[#D97757] to-[#c96a4f] text-white",
                                        message.role === "user" ? "flex-row-reverse" : "",
                                    )}
                                >
                                    <div
                                        className={cn(
                                            "flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D97757] to-[#c96a4f] text-white shadow-lg shadow-[#D97757]/30",
                                            message.role === "ai"
                                                ? "bg-white/10 text-white"
                                                : "bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-lg shadow-red-500/20",
                                        )}
                                    >
                                        {message.role === "ai" ? (
                                            <Bot size={16} />
                                        ) : (
                                            <User size={16} />
                                        )}
                                    </div>

                                    <div
                                        className={cn(
                                            "max-w-[82%] rounded-[1.15rem] px-3.5 py-2.5 text-sm leading-relaxed shadow-md bg-white/60 dark:bg-white/10 border border-white/20 text-[#1F2933] dark:text-white",
                                            message.role === "ai"
                                                ? "rounded-bl-md border border-white/10 bg-white/6 text-slate-100"
                                                : "rounded-br-md bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-red-500/20",
                                        )}
                                    >
                                        {message.content}
                                    </div>
                                </div>
                            ))}

                            {isTyping && (
                                <div className="flex items-end gap-3">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/10">
                                        <Bot size={16} />
                                    </div>
                                    <div className="flex items-center gap-2 rounded-[1.15rem] rounded-bl-md border border-white/10 bg-white/6 px-3.5 py-2.5 text-sm text-white/70 shadow-lg">
                                        <Loader2 className="animate-spin text-[#D97757]" size={16} />
                                        Thinking...
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="relative border-t border-white/10 p-3">
                            <div className="relative">
                                <input
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                                    placeholder="Ask about meals, deals, or delivery..."
                                    className="h-11 w-full rounded-2xl border border-[#D97757]/20 bg-white/60 dark:bg-white/10 pl-4 pr-14 text-sm text-[#1F2933] dark:text-white placeholder:text-[#6B7280] dark:placeholder:text-white/40 outline-none transition-all focus:border-[#D97757]/60 focus:ring-4 focus:ring-[#D97757]/10"
                                />
                                <Button
                                    onClick={handleSend}
                                    disabled={!input.trim()}
                                    className="absolute right-1.5 top-1/2 flex h-8.5 w-8.5 -translate-y-1/2 items-center justify-center rounded-xl bg-gradient-to-br from-[#D97757] to-[#c96a4f] text-white shadow-lg shadow-[#D97757]/20 transition-transform hover:scale-105 disabled:opacity-40"
                                >
                                    <Send size={15} />
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "group relative flex h-11 w-11 items-center justify-center rounded-2xl border border-[#D97757]/20 shadow-xl transition-all duration-300 hover:scale-105 active:scale-95",
                    isOpen
                        ? "bg-white dark:bg-white/10 text-[#1F2933] dark:text-white"
                        : "bg-gradient-to-br from-[#D97757] to-[#c96a4f] text-white"
                )}
            >
                <span className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
                {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 flex h-4 w-4">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
                        <span className="relative inline-flex h-4 w-4 rounded-full bg-orange-500" />
                    </span>
                )}
            </Button>
        </div>
    );
}