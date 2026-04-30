"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Send, X } from "lucide-react";

export default function LeadCaptureModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    useEffect(() => {
        const alreadyShown = sessionStorage.getItem("boxxera-lead-modal-shown");
        if (alreadyShown) return;

        const timer = window.setTimeout(() => {
            setIsOpen(true);
            sessionStorage.setItem("boxxera-lead-modal-shown", "1");
        }, 5500);

        return () => window.clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        const formData = new FormData(e.currentTarget);
        const name = formData.get("name");
        const email = formData.get("email");
        const phone = formData.get("phone");
        const message = formData.get("message");

        const subject = "New Enquiry from Boxera Website (Popup Form)";
        const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0A%0D%0AMessage:%0D%0A${message}`;
        const mailtoLink = `mailto:boxxera.in@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

        setTimeout(() => {
            try {
                window.location.href = mailtoLink;
                setStatus("success");
                (e.target as HTMLFormElement).reset();
            } catch {
                setStatus("error");
            }
        }, 800);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 z-[190] bg-black/80 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.96, y: 16 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96, y: 16 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed z-[200] inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-auto md:w-[92vw] md:max-w-2xl max-h-[92vh] overflow-hidden rounded-sm border border-white/10 bg-zinc-950 shadow-[0_20px_80px_rgba(29,194,193,0.15)]"
                    >
                        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 md:px-8">
                            <div>
                                <h3 className="text-white font-anton text-2xl md:text-3xl uppercase tracking-tight">Let&apos;s Get Started</h3>
                            </div>
                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                className="p-2 text-white/70 hover:text-white hover:bg-white/10 transition-colors rounded"
                                aria-label="Close popup"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        <div className="max-h-[calc(92vh-100px)] overflow-y-auto px-5 py-5 md:px-8 md:py-7">
                            <form onSubmit={handleSubmit} className="space-y-7">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-white/40 px-1">Full Name</label>
                                        <input
                                            required
                                            name="name"
                                            type="text"
                                            placeholder="EX. JON DOE"
                                            className="w-full bg-transparent border-b border-white/10 py-3 text-sm focus:border-accent focus:outline-none transition-colors uppercase tracking-wider"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-white/40 px-1">Email Address</label>
                                        <input
                                            required
                                            name="email"
                                            type="email"
                                            placeholder="JON@EXAMPLE.COM"
                                            className="w-full bg-transparent border-b border-white/10 py-3 text-sm focus:border-accent focus:outline-none transition-colors uppercase tracking-wider"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-white/40 px-1">Phone Number</label>
                                        <input
                                            required
                                            name="phone"
                                            type="tel"
                                            placeholder="+91 00000 00000"
                                            className="w-full bg-transparent border-b border-white/10 py-3 text-sm focus:border-accent focus:outline-none transition-colors uppercase tracking-wider"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40 px-1">Message / Goals</label>
                                    <textarea
                                        name="message"
                                        rows={3}
                                        placeholder="TELL US WHAT YOU WANT TO ACHIEVE..."
                                        className="w-full bg-transparent border-b border-white/10 py-3 text-sm focus:border-accent focus:outline-none transition-colors uppercase tracking-wider resize-none"
                                    />
                                </div>

                                <div className="relative pt-2">
                                    <AnimatePresence mode="wait">
                                        {status === "idle" || status === "loading" ? (
                                            <motion.button
                                                key="submit"
                                                disabled={status === "loading"}
                                                whileHover={{ scale: 1.01, backgroundColor: "#D40000", color: "#ffffff", boxShadow: "0 0 25px rgba(212,0,0,0.4)" }}
                                                className="w-full bg-accent text-black py-4 font-black uppercase tracking-[.25em] text-xs flex items-center justify-center gap-3 transition-all disabled:opacity-50 group"
                                            >
                                                {status === "loading" ? "SENDING..." : (
                                                    <>SEND ENQUIRY <Send size={15} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                                                )}
                                            </motion.button>
                                        ) : status === "success" ? (
                                            <motion.div
                                                key="success"
                                                initial={{ opacity: 0, y: 8 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="w-full bg-green-500/20 text-green-500 border border-green-500/20 py-4 flex items-center justify-center gap-2 font-bold uppercase tracking-widest text-[11px]"
                                            >
                                                <CheckCircle2 size={16} /> Thanks! Our team will contact you shortly.
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="error"
                                                initial={{ opacity: 0, y: 8 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="w-full bg-red-500/20 text-red-500 border border-red-500/20 py-4 flex items-center justify-center gap-2 font-bold uppercase tracking-widest text-[11px] cursor-pointer"
                                                onClick={() => setStatus("idle")}
                                            >
                                                <AlertCircle size={16} /> Something went wrong. Please try again.
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

